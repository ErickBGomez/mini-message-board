const { Router } = require("express");
const {
  getIndex,
  getNewMessage,
  postNewMessage,
  getMessage,
  getMessageNotFound,
  deleteMessage,
  searchMessage,
} = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", getIndex);
messagesRouter.get("/new", getNewMessage);
messagesRouter.post("/new", postNewMessage);
messagesRouter.get("/message/:id", getMessage);
messagesRouter.get("/not-found", getMessageNotFound);
// See a way to delete messages properly, not with POST (HTML form does not let me use DELETE apparently)
messagesRouter.post("/delete/message/:id", deleteMessage);
messagesRouter.get("/search", searchMessage);

module.exports = messagesRouter;
