const moment = require("moment");

const BlogPostModel = require("../models/post.js");
const { responseHandler } = require("./errorHandler");

const properties = "id title urlTitle dateTimestamp tags thumbnailImageUrl markdownContent seoTitleTag seoMetaDescription";
const now = moment().unix();
const dateTimestamp = { $lte: now };
const sortAsc = { dateTimestamp: -1 };

const getAllBlogPosts = (callback) => {
  BlogPostModel.find({ dateTimestamp }, properties)
    .sort(sortAsc)
    .exec((error, posts) => responseHandler(error, posts, callback));
};

const getBlogPostsByTag = (tag, callback) => {
  BlogPostModel.find({ tags: tag, dateTimestamp }, properties)
    .sort(sortAsc)
    .exec((error, posts) => responseHandler(error, posts, callback));
};

const getNewestPosts = (limit, callback) => {
  const max = limit ? parseInt(limit) : 2;

  BlogPostModel.find({ dateTimestamp }, properties)
      .sort(sortAsc)
      .limit(max)
      .exec((error, posts) => responseHandler(error, posts, callback));
};

const getBlogPostByUrlTitle = (urlTitle, callback) => {
  BlogPostModel.findOne({urlTitle,}).exec((error, post) => {
    if(!post) {
      callback({notFoundError: true});
    } else {
      responseHandler(error, post, callback);
    }
  });
};

module.exports = {
  getAllBlogPosts,
  getBlogPostsByTag,
  getNewestPosts,
  getBlogPostByUrlTitle
};
