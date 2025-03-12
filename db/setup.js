const { Client } = require("pg");
const messages = require("../storage/messages");

require("dotenv").config();

const setup = async () => {
  const { CONNECTION_STRING } = process.env;

  const client = new Client({
    connectionString: CONNECTION_STRING,
  });

  console.log("Setting up data...");

  await client.connect();
  await client.query(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    text VARCHAR(255),
    added TIMESTAMPTZ NOT NULL
    )`);

  for (const message of messages) {
    await client.query(
      "INSERT INTO messages (username, text, added) VALUES($1, $2, $3)",
      [message.username, message.text, message.added]
    );
  }

  await client.end();

  console.log("Done!");
};

setup();
