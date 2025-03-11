const { Router } = require("express");
const {
  getIndex,
  getNewMessage,
} = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", getIndex);
// messagesRouter.get("/new", message form here);

module.exports = messagesRouter;
