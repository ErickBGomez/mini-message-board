const messages = require("../storage/messages");

const getIndex = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message" });
};

const postNewMessage = (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
};

module.exports = { getIndex, getNewMessage, postNewMessage };
