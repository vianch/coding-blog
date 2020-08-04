const express = require("express");

const { apiVersionPrefix, postPrefix } = require('../../core/constants');
const api = require("./posts.api.js");
const app = express.Router();

app.get(
  `${apiVersionPrefix}${postPrefix}/get-all-blog-posts`,
  (request, response) => {
    api.getAllBlogPosts((apiResponse) => {
      response.json(apiResponse);
    });
  }
);

app.get(
  `${apiVersionPrefix}${postPrefix}/get-blog-posts/tag/:tag`,
  (request, response) => {
    api.getBlogPostsByTag(request.params.tag, (apiResponse) => {
      response.json(apiResponse);
    });
  }
);

app.get(
  `${apiVersionPrefix}${postPrefix}/get-newest-posts`,
  (request, response) => {
    api.getNewestPosts(request.query.limit, (apiResponse) => {
      response.json(apiResponse);
    });
  }
);

app.get(
  `${apiVersionPrefix}${postPrefix}/get-blog-post/title/:title`,
  (request, response) => {
    api.getBlogPostByUrlTitle(request.params.title, (apiResponse) => {
      response.json(apiResponse);
    });
  }
);

module.exports = app;
