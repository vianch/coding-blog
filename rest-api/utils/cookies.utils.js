const tldjs = require("tldjs")

const { productionAdminUrl, apiEnvironments } = require("../core/constants");

const cookieSettings = (authTokenExpiresTimestamp) => {
  const isProduction = process.env.NODE_ENV === apiEnvironments.PRODUCTION;

  return ({
    path: "/",
    expires: new Date(authTokenExpiresTimestamp * 1000),
    httpOnly: true,
    secure: isProduction,
    encode: String,
    domain: isProduction ? tldjs.parse(productionAdminUrl).domain : "",
  });
}

module.exports = {
  cookieSettings,
};
