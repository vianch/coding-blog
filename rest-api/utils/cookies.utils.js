const tldjs = require("tldjs")
const get = require('lodash/get');

const { productionAdminUrl, loginCacheName } = require("../core/constants");

const cookieSettings = (authTokenExpiresTimestamp) => ({
  path: "/",
  expires: new Date(authTokenExpiresTimestamp * 1000),
  httpOnly: true,
  secure: true,
  domain: `.${tldjs.parse(productionAdminUrl).domain}` || '',
  sameSite: 'lax',
});

const getCookeData = request => {
  let cookies = get(request, `cookies.${loginCacheName}`);
  cookies = cookies ? cookies.split('&') : null;

  const authUserId = cookies && cookies.length > 0 ? cookies[0] : null;
  const authToken = cookies && cookies.length > 0 ? cookies[1] : null;

  return {
    authUserId,
    authToken,
  };
};

module.exports = {
  cookieSettings,
  getCookeData,
};
