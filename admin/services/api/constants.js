const apiVersionPrefix = '/api/v1';
const adminPrefix = "/admin";
const postPrefix = '/posts';

// REST endpoints
export const endpoints = {
  login: () => `${apiVersionPrefix}${adminPrefix}/login`,
  authentication: () => `${apiVersionPrefix}${adminPrefix}/authenticate`,
  logout: () => `${apiVersionPrefix}${adminPrefix}/logout`,
  getAllBlogPost: () => `${apiVersionPrefix}${postPrefix}/get-all-blog-posts`,
};
