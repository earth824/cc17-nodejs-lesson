const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('html', 'home.html'));
});

app.get('/login', (req, res) => {
  res.status(200).sendFile(path.resolve('html', 'login.html'));
});

app.post('/submit-login', (req, res) => {
  res.redirect('/');
});

app.listen(8002, () => console.log('server running 8002'));
