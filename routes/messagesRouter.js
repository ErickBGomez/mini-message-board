const { Router } = require("express");
const {
  getIndex,
  getNewMessage,
  postNewMessage,
  getMessage,
  getMessageNotFound,
} = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", getIndex);
messagesRouter.get("/new", getNewMessage);
messagesRouter.post("/new", postNewMessage);
messagesRouter.get("/message/:id", getMessage);
messagesRouter.get("/not-found", getMessageNotFound);

module.exports = messagesRouter;
