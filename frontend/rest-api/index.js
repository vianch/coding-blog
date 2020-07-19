const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

const { restApiEnvironmentSetup } = require("./core/env");
const { serverLogger } = require("./core/logger");
const {
  apiEnvironments,
  connectionString,
  defaultPort,
} = require("./core/constants");

restApiEnvironmentSetup();

const port = process.env.SERVER_PORT || defaultPort;
const app = express();
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

mongoose.connect(
  connectionString(DB_USERNAME, DB_PASSWORD, DB_NAME),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", (error) => {
  if (process.env.NODE_EVN === apiEnvironments.DEVELOPMENT) {
    serverLogger.error(error);
  }
});

mongoose.connection.on("open", () => {
  serverLogger.info("Connected to MongoDB database.");
});

app.use(helmet());
app.listen(port, () => {
  serverLogger.info(`rest-api listening on port ${port}`);
});
