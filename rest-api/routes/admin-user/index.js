const express = require('express');
const get = require('lodash/get');

const { apiVersionPrefix, adminPrefix } = require('../../core/constants');
const { cookieSettings } = require('../../utils/cookies.utils');
const { routeErrorHandler } = require("../../utils/errorHandler");

const api = require('./admin-user.api.js');
const app = express.Router();

app.put(
  `${apiVersionPrefix}${adminPrefix}/login`,
  (request, response) => {

        const {email, password} = get(request, 'body', { email: null, password: null});

        if (!email  || !password) {
            routeErrorHandler('Empty body data, no email or no password', response);
        } else {
          api.loginAdminUser(email, password, (apiResponse) => {
            if (apiResponse.success) {
              const userId = get(apiResponse, 'data.userId', null);
              const authToken = get(apiResponse, 'data.authToken', null);
              const authTokenExpiresTimestamp = get(apiResponse, 'data.authTokenExpiresTimestamp', null);

              response.cookie(
                'loginUser',
                `${userId}&${authToken}`,
                cookieSettings(authTokenExpiresTimestamp)
              );

              response.json(apiResponse);
            } else {
              routeErrorHandler('Cannot verify data', apiResponse);
            }
          });
        }
  });

module.exports = app;
