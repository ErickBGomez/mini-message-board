const messages = require("../storage/messages");

const getIndex = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message" });
};

const postNewMessage = (req, res) => {
  const { text, user } = req.body;
  messages.push({ id: messages.length + 1, text, user, added: new Date() });
  res.redirect("/");
};

const getMessage = (req, res) => {
  const { id } = req.params;
  const message = messages.find((message) => message.id === Number(id));

  if (!message) return res.redirect("/not-found");

  const { text, user, added } = message;
  res.render("message", { title: "View message details", text, user, added });
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
