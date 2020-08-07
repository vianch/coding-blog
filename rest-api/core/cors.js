const { whiteList } = require("./constants");
const { serverLogger } = require("./logger");

const isInWhiteList = origin => whiteList.indexOf(origin) !== -1;
const corsOptions = {
  origin: (origin, callback) => {
    if (origin) {
      if(isInWhiteList(origin)) {
        callback(null, true)
      } else {
        const errorMessage = `Not allowed by CORS ${origin}` ;

        serverLogger.error(errorMessage);
        callback(new Error(errorMessage))
      }
    } else {
      callback(null, true);
    }
  },
  credentials: true
};

module.exports = corsOptions;
