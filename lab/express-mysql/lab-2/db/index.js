const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'cc17_bill',
  connectionLimit: 20
});

const execute = async (sql, value = []) => {
  const [result] = await pool.execute(sql, value);
  return result;
};

exports.execute = execute;
