const { serverLogger } = require('../core/logger');

const routeErrorHandler = (message, response) => {
  serverLogger.error(message);
  response.json({success: false})
};

const errorHandler = (error, callback) => {
  serverLogger.error(error);
  callback({ getDataError: true, success: false });
};

const responseHandler = (error, data, callback) => {
  if (error) {
    errorHandler(error, callback);
  } else {
    callback({ success: true, data });
  }
};

module.exports = {
  routeErrorHandler,
  errorHandler,
  responseHandler,
};
