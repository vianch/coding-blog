import { httpGet } from '~/services/api/rest.api';
import { endpoints } from '~/services/api/constants';

const getHomePostData = (limit) => {
  return httpGet(endpoints.getNewestPosts(limit));
};

const getProjectsData = () => {
  return httpGet(endpoints.getAllProjects());
};

export default {
  getHomePostData,
  getProjectsData,
};
