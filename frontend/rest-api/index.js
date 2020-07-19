const express = require('express');
const helmet = require('helmet');

const { restApiEnvironmentSetup } = require('./core/env');
const { serverLogger } = require('./core/logger');
const { defaultPort, apiEnvironments } = require('./core/constants');
const { dataBaseSetup } = require('./core/mongoose');
const appRoutes = require('./routes/index.js')
/* Environment configuration */
restApiEnvironmentSetup();

/* Database configuration */
const { NODE_EVN, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
dataBaseSetup(
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  NODE_EVN === apiEnvironments.DEVELOPMENT
);

const port = process.env.SERVER_PORT || defaultPort;
const app = express();

app.use(helmet());
app.use(appRoutes);
app.listen(port, () => {
  serverLogger.info(`rest-api listening on port ${port}`);
});
