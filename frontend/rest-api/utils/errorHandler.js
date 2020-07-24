const { serverLogger } = require('../core/logger');

const errorHandler = (error, callback) => {
  serverLogger.error(error);
  callback({ getDataError: true });
};

const responseHandler = (error, data, callback) => {
  if (error) {
    errorHandler(error, callback);
  } else {
    callback({ success: true, data });
  }
};

module.exports = {
  errorHandler,
  responseHandler,
};
