const express = require('express');

const app = express();

// GET /home
app.get('/home', (req, res) => {
  // res.status(200).send({ message: 'Express response has been sent' });
  res.status(200).send(req.query); // { nickname: 'jennifer' }
});

// POST /home
app.post(
  '/home',
  (req, res) => {},
  (req, res) => {},
  (req, res) => {},
  (req, res) => {}
);

// GET /book/26 req.params ===> { qwerty: '26' }
app.get('/book/:qwerty', (req, res) => {
  res.send(req.params);
});

app.listen(8001, () => console.log('express server running'));
