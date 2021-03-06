const apiVersionPrefix = '/api/v1';
const adminPrefix = "/admin";

// REST endpoints
export const endpoints = {
  login: () => `${apiVersionPrefix}${adminPrefix}/login`,
  authentication: () => `${apiVersionPrefix}${adminPrefix}/authenticate`,
  logout: () => `${apiVersionPrefix}${adminPrefix}/logout`,
};
