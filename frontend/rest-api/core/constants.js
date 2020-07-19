const apiEnvironments = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  TEST: "test",
};
const defaultPort = 5001;
const connectionString = (userName, password, databaseName) =>
  `mongodb+srv://${userName}:${password}@vianch-coding-blog-clus.igd6l.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

module.exports = {
  apiEnvironments,
  defaultPort,
  connectionString,
};
