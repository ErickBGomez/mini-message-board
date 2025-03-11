const { Router } = require("express");
const {
  getIndex,
  getNewMessage,
  postNewMessage,
} = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", getIndex);
messagesRouter.get("/new", getNewMessage);
messagesRouter.post("/new", postNewMessage);

module.exports = messagesRouter;
