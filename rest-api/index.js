const { createServer } = require("https");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

/* Core */
const { restApiEnvironmentSetup } = require("./core/env");
const { serverLogger } = require("./core/logger");
const getLocalSslConfig = require("./core/ssl.utils");
const { defaultPort, apiEnvironments } = require("./core/constants");
const corsOptions = require("./core/cors");
const { dataBaseSetup } = require("./core/mongoose");

/* Routes */
const adminRoutes = require("./routes/admin-user");
const postsRoutes = require("./routes/posts");
const projectRoutes = require("./routes/projects");

/* Environment configuration */
restApiEnvironmentSetup();

/* Constants */
const { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_CLUSTER, RUNNING_LOCAL_INSTANCE, SERVER_PORT } = process.env;
const isDevelopment = NODE_ENV === apiEnvironments.DEVELOPMENT;

/* Database configuration */
dataBaseSetup(DB_USERNAME, DB_PASSWORD, DB_NAME, DB_CLUSTER, isDevelopment);


try {
  /* Express Configuration */
  const port = SERVER_PORT || defaultPort;
  const app = express();

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(bodyParser.json({limit: "100mb"}));
  app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));
  app.use(cookieParser());
  app.use(adminRoutes);
  app.use(postsRoutes);
  app.use(projectRoutes);
  app.use("/assets", express.static(path.join(__dirname, "..", "assets")));


  const appServer = RUNNING_LOCAL_INSTANCE
    ? createServer(getLocalSslConfig(), app) // Run https server locally
    : expressServer; // No need to configure https for

  appServer.listen(port, error => {
    if (error) {
      throw serverLogger.error(error);
    }

    if (NODE_ENV !== 'production') {
      serverLogger.info(`NODE_ENV: ${NODE_ENV}`);
    }

    serverLogger.info(`rest-api listening on port ${port}`);
  });

} catch (error) {
  serverLogger.error('Fatal error starting express server: ', error);
  process.exit(1);
}
