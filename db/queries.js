const pool = require("./pool");

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getMessage = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
};

const createMessage = async (username, text, added) => {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES($1, $2, $3)",
    [username, text, added]
  );
};

const searchMessage = async (query) => {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE username = $1 OR text = $1",
    [query]
  );

  return rows;
};

const deleteMessage = async (id) => {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
};

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  searchMessage,
  deleteMessage,
};
