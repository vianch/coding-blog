// Environment
const apiEnvironments = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  TEST: "test",
};

const whiteList = [
  "https://localhost:3001",
  "http://localhost:3001",
  "https://admin.vianch.com",
  "http://admin.vianch.com",
  "https://localhost:3000",
  "http://localhost:3000",
  "http://localhost:5000",
  "https://localhost:5000",
  "https://www.vianch.com",
  "http://www.vianch.com",
];

const defaultPort = 5555;

// Routes constants
const apiVersionPrefix = "/api/v1";
const adminPrefix = "/admin";
const postPrefix = "/posts";
const projectsPrefix = "/projects";

// Mongo
const connectionString = (userName, password, clusterName, databaseName) =>
  `mongodb+srv://${userName}:${password}@${clusterName}/${databaseName}?retryWrites=true&w=majority`;

module.exports = {
  apiVersionPrefix,
  adminPrefix,
  postPrefix,
  apiEnvironments,
  defaultPort,
  projectsPrefix,
  connectionString,
  whiteList,
};
