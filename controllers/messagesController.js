const messages = require("../storage/messages");

const getIndex = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message" });
};

module.exports = { getIndex, getNewMessage };
