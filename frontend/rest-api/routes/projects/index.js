const express = require("express");

const { apiVersionPrefix, projectsPrefix } = require('../../core/constants');
const api = require("./projects.api.js");

const app = express.Router();

app.get(
    `${apiVersionPrefix}${projectsPrefix}/get-all-projects`,
    (request, response) => {

      api.getAllProjects((apiResponse) => {
        console.log('apiResponse, ', apiResponse);
        response.json(apiResponse);
      });
    }
);

module.exports = app;
