// Environment
const apiEnvironments = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  TEST: "test",
};
const defaultPort = 5001;

// Routes constants
const apiVersionPrefix = "/api/v1";
const postPrefix = "/posts";
const projectsPrefix = "/projects";

// Mongo
const connectionString = (userName, password, databaseName) =>
  `mongodb+srv://${userName}:${password}@vianch-coding-blog-clus.igd6l.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

module.exports = {
  apiVersionPrefix,
  postPrefix,
  apiEnvironments,
  defaultPort,
  projectsPrefix,
  connectionString,
};
