const express = require('express');

const api = require('./api.js');

const app = express.Router();

app.get('/posts/get-all-blog-posts', (request, response) => {
  api.getAllBlogPosts(apiResponse => {
    response.json(apiResponse)
  });
});

app.get('/posts/get-blog-posts/tag/:tag', (request, response) => {
  api.getBlogPostsByTag(request.params.tag, apiResponse => {
    response.json(apiResponse)
  });
});

app.get('/posts/get-newest-posts', (request, response) => {
  api.getNewestPosts(request.query.limit, apiResponse => {
    response.json(apiResponse)
  });
});

app.get('/posts/get-blog-post/title/:title', (request, response) => {
  api.getBlogPostByUrlTitle(request.params.title, apiResponse => {
    response.json(apiResponse)
  });
});


module.exports = app;
