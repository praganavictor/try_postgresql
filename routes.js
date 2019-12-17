const express = require("express");

const questionController = require("./controllers/question");

const routes = express.Router();

routes.get("/questions", questionController.index);
routes.get("/question/:id", questionController.show);
routes.post("/question", questionController.create);

module.exports = routes;
