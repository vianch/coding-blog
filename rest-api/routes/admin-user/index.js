const express = require('express');
const get = require('lodash/get');

const { apiVersionPrefix, adminPrefix } = require('../../core/constants');
const { routeErrorHandler } = require("../../utils/errorHandler");

const api = require('./admin-user.api.js');
const app = express.Router();

app.put(
  `${apiVersionPrefix}${adminPrefix}/authenticate`,
  (request, response) => {
        const {email, password} = get(request, 'body', { email: null, password: null});

        if (!email  || !password) {
            routeErrorHandler('Empty body data, no email or no password', response);
        } else {
          api.loginAdminUser(email, password, (apiResponse) => {
            if (apiResponse) {
              response.json(apiResponse)
            } else {
              routeErrorHandler('Cannot verify data', apiResponse);
            }
          });
        }
  });

module.exports = app;
