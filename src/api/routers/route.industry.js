const Router = require("express").Router();
const industryController = require('../controllers/controller.industry');

// Router.get("/industry", industryController.getIndustryList);

Router.post("/industry", industryController.addIndustry);

module.exports = Router;
