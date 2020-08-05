
const moment = require("moment");

const AdminUserModel = require("../../models/admin-user.js");
const { errorHandler, responseHandler } = require("../../utils/errorHandler");
const { uuidV4 } = require("../../utils/string.utils");

const updateUser = (user, callback) => {
  const authTokenString = uuidV4();
  const authTokenExpiresTimestamp = moment().unix() + (86400 * 3)

  user.authToken = authTokenString
  user.authTokenExpiresTimestamp = authTokenExpiresTimestamp

  user.save(saveError => {
    const responseData = {userId: user.id, authToken: authTokenString, authTokenExpiresTimestamp: authTokenExpiresTimestamp};
    responseHandler(saveError, responseData, callback)
  })
};

const loginAdminUser = (email, password, callback) => {
  AdminUserModel.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      return errorHandler(error || `No user`, callback);
    } else {
      user.comparePassword(password, user.password, (matchError, isMatch) => {
        let errorMessage = matchError ? matchError : !isMatch ? `No match password for ${email}` : null;

        if (errorMessage) {
          return errorHandler(errorMessage, callback);
        } else {
          updateUser(user, callback);
        }
      });
    }
  });
};

const authenticateAdminUser = (userId, authToken, callback) => {
  AdminUserModel.findOne({ id: userId }).exec((error, user) => {
    let errorMessage = null;
    const timeStampExpired = moment().unix() > user.authTokenExpiresTimestamp

    if (error) {
      errorMessage = error
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

    responseHandler(errorMessage, user, callback);
  });
};

module.exports = {
  loginAdminUser,
}
