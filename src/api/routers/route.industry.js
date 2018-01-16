const Router = require("express").Router();
const industryController = require('../controllers/controller.industry');

Router.get("/industry", industryController.getIndustryList);

module.exports = Router;
