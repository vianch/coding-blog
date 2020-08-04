const BlogProjectsModel = require("../../models/projects.js");
const { responseHandler } = require("../../utils/errorHandler");

const properties = "id name url description";
const sortAsc = { id: -1 };

const getAllProjects = (callback) => {
  BlogProjectsModel.find({ id: {$ne : null}}, properties)
      .sort(sortAsc)
      .exec((error, posts) => responseHandler(error, posts, callback));
};

module.exports = {
  getAllProjects,
};
