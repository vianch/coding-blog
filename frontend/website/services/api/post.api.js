import { httpGet } from '~/services/api/rest.api';
import { endpoints } from '~/services/api/constants';

const getAllBlogPost = () => {
  return httpGet(endpoints.getAllBlogPost());
};

const getBlogByTag = (tag) => {
  return httpGet(endpoints.getBlogPostsByTag(tag));
};

const getBlogPostByUrlTitle = (urlTitle) => {
  return httpGet(endpoints.getBlogPostByUrlTitle(urlTitle));
};

export default {
  getAllBlogPost,
  getBlogByTag,
  getBlogPostByUrlTitle,
};
