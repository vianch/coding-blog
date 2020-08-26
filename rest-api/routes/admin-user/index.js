const express = require('express');
const get = require('lodash/get');

const {
  apiVersionPrefix,
  adminPrefix,
  loginCacheName,
} = require('../../core/constants');
const { cookieSettings, getCookeData,getDomain } = require('../../utils/cookies.utils');
const { routeErrorHandler } = require('../../utils/errorHandler');

const api = require('./admin-user.api.js');
const app = express.Router();

app.put(`${apiVersionPrefix}${adminPrefix}/login`, (request, response) => {
  const { email, password } = get(request, 'body', {
    email: null,
    password: null,
  });

  if (!email || !password) {
    routeErrorHandler('Empty body data, no email or no password', response);
  } else {
    api.loginAdminUser(email, password, apiResponse => {
      if (apiResponse.success) {
        const userId = get(apiResponse, 'data.userId', null);
        const authToken = get(apiResponse, 'data.authToken', null);
        const authTokenExpiresTimestamp = get(
          apiResponse,
          'data.authTokenExpiresTimestamp',
          null,
        );

        response.cookie(
          loginCacheName,
          `${userId}&${authToken}`,
          cookieSettings(authTokenExpiresTimestamp),
        );

        response.json(apiResponse);
      } else {
        routeErrorHandler('Cannot verify data / user doest exist', response);
      }
    });
  }
});

app.get(
  `${apiVersionPrefix}${adminPrefix}/authenticate`,
  (request, response) => {
    const { authUserId, authToken } = getCookeData(request);

    if (!authUserId || !authToken) {
      routeErrorHandler('User not authenticated', response);
    } else {
      api.authenticateAdminUser(authUserId, authToken, apiResponse => {
        response.json(apiResponse);
      });
    }
  },
);

app.put(`${apiVersionPrefix}${adminPrefix}/logout`, (request, response) => {
  const { authUserId, authToken } = getCookeData(request);

  if (!authToken) {
    routeErrorHandler('No auth success', response);
  } else {
    api.removeUserAuthorizationToken(authUserId, apiResponse => {
      apiResponse.authSuccess = true;
      response.clearCookie(loginCacheName, {
        path: '/',
        domain: `${getDomain}`
      });
      response.json(apiResponse);
    });
  }
});

module.exports = app;
