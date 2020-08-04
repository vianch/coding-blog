
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
  AdminUserModel.findOne({ email: email }).exec((error, user) => {
    if (error || !user) {
      return errorHandler(error, callback);
    } else {
      user.comparePassword(password, user.password, (matchError, isMatch) => {
        if (matchError || !isMatch) {
          return errorHandler(error, callback);
        } else {
          updateUser(user, callback);
        }
      });
    }
  });
};

module.exports = {
  loginAdminUser,
}
