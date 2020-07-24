const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");

const { restApiEnvironmentSetup } = require("./core/env");
const { serverLogger } = require("./core/logger");
const { defaultPort, apiEnvironments } = require("./core/constants");
const { dataBaseSetup } = require("./core/mongoose");
const postsRoutes = require("./routes/posts");
const projectRoutes = require("./routes/projects");

/* Environment configuration */
restApiEnvironmentSetup();

/* Constants */
const { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_CLUSTER } = process.env;
const isDevelopment = NODE_ENV === apiEnvironments.DEVELOPMENT;

/* Database configuration */
dataBaseSetup(DB_USERNAME, DB_PASSWORD, DB_NAME, DB_CLUSTER, isDevelopment);

/* Express Configuration */
const port = process.env.SERVER_PORT || defaultPort;
const app = express();

if (isDevelopment) {
  app.use(cors());
}
app.use(helmet());
app.use(postsRoutes);
app.use(projectRoutes);
app.use("/assets", express.static(path.join(__dirname, "..", "..", "assets")));

app.listen(port, () => {
  serverLogger.info(`rest-api listening on port ${port}`);
});
