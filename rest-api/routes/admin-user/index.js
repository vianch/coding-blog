const express = require('express');
const get = require('lodash/get');

const { apiVersionPrefix, adminPrefix, loginCacheName } = require('../../core/constants');
const { cookieSettings } = require('../../utils/cookies.utils');
const { routeErrorHandler, errorHandler } = require("../../utils/errorHandler");

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
            loginCacheName,
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

app.get(
  `${apiVersionPrefix}${adminPrefix}/authenticate`,
  (request, response) => {
    let cookies = get(request, `cookies.${loginCacheName}`);
    cookies = cookies ? cookies.split('&') : null;

    const authUserId = cookies && cookies.length > 0 ? cookies[0] : '';
    const authToken = cookies && cookies.length > 0 ? cookies[1] : '';

    if (!authUserId || !authToken) {
      routeErrorHandler('User not authenticated', response);
    } else {
      api.authenticateAdminUser(authUserId, authToken, apiResponse => {
        response.json(apiResponse);
      });
    }
});

app.put(`${apiVersionPrefix}${adminPrefix}/logout`, (request, response) => {
  const authSuccess = get(request, 'locals.authSuccess');
  if(!authSuccess) {
    routeErrorHandler('No auth success', response)
  }
})

module.exports = app;
