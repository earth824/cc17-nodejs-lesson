const db = require('../db');

exports.insertUser = async (username, password) => {
  const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
  await db.execute(sql, [username, password]);
};

exports.findUserByUsernameAndPassword = async (username, password) => {
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  const result = await db.execute(sql, [username, password]);
  return result;
};
