const mongoose = require("mongoose");

const BlogProjectsSchema = new mongoose.Schema(
    {
      id: {
        type: String,
        unique: true,
      },
      name: String,
      url: {
        type: String,
        unique: true,
      },
      description: String,
    },
    { collection: "project" }
);

BlogProjectsSchema.index({id: -1, url: 1});

module.exports = mongoose.model("Project", BlogProjectsSchema);
