const express = require("express");
const messagesRouter = require("./routes/messagesRouter");

require("dotenv").config();

const app = express();
const { PORT } = process.env;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server initialized. Listening on port: ${PORT}`);
});
