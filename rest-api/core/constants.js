// Environment
const apiEnvironments = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  TEST: "test",
};

const productionAdminUrl = 'https://admin.vianch.com:3001';

const loginCacheName = 'loginUser';

const whiteList = [
  "https://localhost:3001",
  "http://localhost:3001",
  "https://admin.vianch.com",
  productionAdminUrl,
  "https://localhost:3000",
  "http://localhost:3000",
  "https://admin.vianch.com:5000",
  "http://admin.vianch.com:5000",
  "http://192.168.100.128:3001",
  "https://192.168.100.128:3001",
  "http://192.168.100.128:3000",
  "https://192.168.100.128:3000",
  "http://local.vianch.com:5000",
  "https://local.vianch.com:5000",
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
  productionAdminUrl,
  connectionString,
  whiteList,
  loginCacheName
};
