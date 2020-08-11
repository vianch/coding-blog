const moment = require('moment');
const get = require('lodash/get');

const AdminUserModel = require('../../models/admin-user.js');
const { errorHandler, responseHandler } = require('../../utils/errorHandler');
const { uuidV4 } = require('../../utils/string.utils');

const updateUser = (
  user,
  authTokenString,
  authTokenExpiresTimestamp,
  callback,
) => {
  user.authToken = authTokenString;
  user.authTokenExpiresTimestamp = authTokenExpiresTimestamp;

  user.save(saveError => {

    const responseData = authTokenString
      ? {
          userId: user.id,
          authToken: authTokenString,
          authTokenExpiresTimestamp: authTokenExpiresTimestamp,
        }
      : null;
    responseHandler(saveError, responseData, callback);
  });
};

const loginAdminUser = (email, password, callback) => {
  AdminUserModel.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      return errorHandler(error || `No user`, callback);
    } else {
      user.comparePassword(password, user.password, (matchError, isMatch) => {
        let errorMessage = matchError
          ? matchError
          : !isMatch
          ? `No match password for ${email}`
          : null;

        if (errorMessage) {
          return errorHandler(errorMessage, callback);
        } else {
          const authTokenString = uuidV4();
          const authTokenExpiresTimestamp = moment().unix() + 86400 * 3;

          updateUser(user, authTokenString, authTokenExpiresTimestamp, callback);
        }
      });
    }
  });
};

const authenticateAdminUser = (userId, authToken, callback) => {
  AdminUserModel.findOne({ id: userId }).exec((error, user) => {
    let errorMessage = null;
    let userData = {};
    const timeStampExpired = moment().unix() > user.authTokenExpiresTimestamp;
    const userId = get(user, 'id');

    if (error) {
      errorMessage = error;
    }

    if (!user) {
      errorMessage = `No user response for ${userId}`;
    }

    if (authToken !== user.authToken) {
      errorMessage = `Token doesn't match`;
    }

    if (timeStampExpired) {
      errorMessage = `Token expired`;
    }

    if (!userId) {
      errorMessage = 'No user data';
    }

    if (userId) {
      userData = {
        id: user.id,
        authToken: user.authToken,
        authTokenExpiresTimestamp: user.authTokenExpiresTimestamp,
      };
    }

    return responseHandler(errorMessage, userData, callback);
  });
};

const removeUserAuthorizationToken = (userId, callback) => {
  AdminUserModel.findOne({ id: userId }).exec((error, user) => {
    if (error || !user) {
      return errorHandler(error || `No user to remove auth token`, callback);
    } else {
      return updateUser(user, null, null, callback);
    }
  });
};

module.exports = {
  loginAdminUser,
  authenticateAdminUser,
  removeUserAuthorizationToken,
};
