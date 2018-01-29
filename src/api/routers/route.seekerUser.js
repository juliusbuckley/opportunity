const Router = require("express").Router();
const seekerUserController = require('../controllers/controller.seeker-user');

Router.get("/search-user/:userName", seekerUserController.getSeekerUser);

Router.post("/seeker-user", seekerUserController.addSeekerUser);

module.exports = Router;
