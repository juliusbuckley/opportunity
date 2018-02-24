'use strict';

var Router = require("express").Router();
var businessStreamController = require('../controllers/controller.businessStream');

Router.get('/businessStream', businessStreamController.getBusinessStream);

Router.get('/businessStream/:industry', businessStreamController.getBusinessStreamByIndustry);

Router.post('/businessStream', businessStreamController.addBusinessStream);

module.exports = Router;