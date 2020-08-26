import { endpoints } from "~/services/api/constants";
import { httpGet } from "~/services/api/rest.api";

const getAllBlogPost = () => {
  return httpGet(endpoints.getAllBlogPost());
};

export default {
  getAllBlogPost,
};
