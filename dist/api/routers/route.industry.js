'use strict';

var Router = require("express").Router();
var industryController = require('../controllers/controller.industry');

Router.get('/industry', industryController.getIndustryList);

Router.post('/industry', industryController.addIndustry);

module.exports = Router;