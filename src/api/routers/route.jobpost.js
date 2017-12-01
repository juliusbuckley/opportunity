const Router = require("express").Router();
const jobController = require('../controllers/controller.jobpost');

Router.get("/job", jobController.getJob);

module.exports = Router;
