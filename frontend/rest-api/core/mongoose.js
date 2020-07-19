const mongoose = require('mongoose');

const { serverLogger } = require('./logger');
const { connectionString } = require('./constants');

const dataBaseSetup = (user, password, database, isDevelopment) => {
  mongoose.connect(connectionString(user, password, database), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', (error) => {
    if (isDevelopment) {
      serverLogger.error(error);
    }
  });

  mongoose.connection.on('open', () => {
    serverLogger.info('Connected to MongoDB database.');
  });
};

module.exports = {
  dataBaseSetup
};
