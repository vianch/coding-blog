const apiVersionPrefix = '/api/v1';
const postPrefix = '/posts';

// REST endpoints
export const endpoints = {
  getAllBlogPost: () => `${apiVersionPrefix}${postPrefix}/get-all-blog-posts`,
  getBlogPostsByTag: (tag) =>
    `${apiVersionPrefix}${postPrefix}/get-blog-posts/tag/${tag}`,
  getBlogPostByUrlTitle: (title) =>
    `${apiVersionPrefix}${postPrefix}/get-blog-post/title/${title}`,
  getNewestPosts: (limit) =>
    `${apiVersionPrefix}${postPrefix}/get-newest-posts?limit=${limit}`,
};
