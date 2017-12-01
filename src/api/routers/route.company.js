const Router = require("express").Router();
const companyController = require('../controllers/controller.company');

Router.get("/", companyController.getCompany);

module.exports = Router;
