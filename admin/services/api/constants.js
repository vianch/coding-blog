const apiVersionPrefix = '/api/v1';
const adminPrefix = "/admin";

// REST endpoints
export const endpoints = {
  login: () => `${apiVersionPrefix}${adminPrefix}/login`,
};
