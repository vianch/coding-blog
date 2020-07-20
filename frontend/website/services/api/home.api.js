import { httpGet } from '~/services/api/rest.api';
import { endpoints } from '~/services/api/constants';

const getHomePostData = () => {
  const limit = 5;
  return httpGet(endpoints.getNewestPosts(limit));
};

export default {
  getHomePostData,
};
