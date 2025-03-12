const db = require("../db/queries");

// const messages = require("../storage/messages");

const getIndex = async (req, res) => {
  const messages = await db.getMessages();

  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message" });
};

const postNewMessage = async (req, res) => {
  const { text, username } = req.body;
  // messages.push({ id: messages.length + 1, text, user, added: new Date() });
  await db.createMessage(username, text, new Date());
  res.redirect("/");
};

const getMessage = async (req, res) => {
  const { id } = req.params;
  // const message = messages.find((message) => message.id === Number(id));
  const message = await db.getMessage(id);

  console.log(message);

  if (!message) return res.redirect("/not-found");

  const { text, username, added } = message[0];
  res.render("message", {
    title: "View message details",
    text,
    username,
    added,
  });
};

const getMessageNotFound = (req, res) => {
  res.render("not-found", { title: "Message Not Found" });
};

module.exports = {
  getIndex,
  getNewMessage,
  postNewMessage,
  getMessage,
  getMessageNotFound,
};
