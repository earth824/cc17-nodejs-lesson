const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'cc17_first_db'
});

connection
  .then(async conn => {
    // console.log('DB connected');
    const result = await conn.query('SELECT * FROM users');
    conn.destroy();
    // console.log(result);
  })
  .catch(err => console.log(err));

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'cc17_first_db',
  connectionLimit: 15
});

// pool
//   .execute('SELECT * FROM users')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const run = async () => {
  // C, U, D  [result, fields]
  // ResultSetHeader {
  //   fieldCount: 0,
  //   affectedRows: 1,
  //   insertId: 6,
  //   info: '',
  //   serverStatus: 2,
  //   warningStatus: 0,
  //   changedRows: 0
  // }
  // fields ==> undefined

  // const [result, fields] = await pool.execute(
  //   'INSERT INTO users (username, email, password) VALUES ("d", "d@gmail.com", "123456")'
  // );

  // const [result, fields] = await pool.execute(
  //   'INSERT INTO users (username, email, password) VALUES ("e", "e@gmail.com", "123456"), ("f", "f@gmail.com", "123456")'
  // );

  // const [result, fields] = await pool.execute(
  //   'UPDATE users SET password = "654321" WHERE id = 6000'
  // );

  // const [result, fields] = await pool.execute('DELETE FROM users WHERE id = 7');
  // const [result, fields] = await pool.execute(
  //   'INSERT INTO todo (title, user_id) VALUES ("Meeting", 2), ("Shopping", 3), ("Golf", 2), ("Fitness", 8)'
  // );

  // R [result, fields]
  // const [result, fields] = await pool.execute('SELECT * FROM users');
  // result ==> Array [{  }, {  }], column name ==> object key
  // fields ==> Array of column definition
  // [
  //   {
  //     id: 2,
  //     username: 'b',
  //     email: 'b@gmail.com',
  //     password: '1111',
  //     is_active: 0,
  //     birth_date: null,
  //     gender: null,
  //     point: 100,
  //     wallet: '100.00'
  //   },
  //   {
  //     id: 3,
  //     username: 'c',
  //     email: 'c@gmail.com',
  //     password: '1111',
  //     is_active: 0,
  //     birth_date: null,
  //     gender: null,
  //     point: 0,
  //     wallet: '200.00'
  //   },
  //   {
  //     id: 6,
  //     username: 'd',
  //     email: 'd@gmail.com',
  //     password: '654321',
  //     is_active: 0,
  //     birth_date: null,
  //     gender: null,
  //     point: 0,
  //     wallet: '0.00'
  //   },
  //   {
  //     id: 8,
  //     username: 'f',
  //     email: 'f@gmail.com',
  //     password: '123456',
  //     is_active: 0,
  //     birth_date: null,
  //     gender: null,
  //     point: 0,
  //     wallet: '0.00'
  //   }
  // ]

  // const [result, fields] = await pool.query(
  //   'SELECT username, email, point FROM users'
  // );

  // const [result, fields] = await pool.query(
  //   'SELECT user_id, COUNT(*) AS total_todo FROM todo GROUP BY user_id'
  // );

  // const [result, fields] = await pool.query(
  //   'SELECT * FROM users u INNER JOIN todo t ON u.id = t.user_id'
  // );

  // const [result, fields] =
  //   await pool.query(`SELECT u.username username, u.email email, COUNT(t.user_id) total
  // FROM users u LEFT JOIN todo t ON u.id = t.user_id GROUP BY u.id ORDER BY total`);

  // console.log('---------------------------------------');
  // console.log(result);
  // console.log('***************************************');
  // console.log(fields);

  // req.body { username: 'a', password: '12345678' }
  // const username = '";DROP TABLE users;';
  // SELECT * FROM users WHERE username = "";DROP TABLE users; " AND password = "1111"
  // const password = '1111';
  // const [result] = await pool.query(
  //   `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`
  // );

  const stm = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const [result] = await pool.query(stm, ['";DROP TABLE users;', '12345678']);
  console.log(result);
};

run();
