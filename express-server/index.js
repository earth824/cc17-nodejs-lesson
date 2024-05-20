const express = require('express');

const app = express();

// /main.css /team-2.jpg
app.use('/sta-file', express.static('sta-file'));

app.use((err, req, res, next) => {
  console.log('Errrrrrrrrrrrrrrrrrrrrooooooorrrr');
});

app.use((req, res, next) => {
  // get request info and then save it (log.txt)
  console.log(`${req.method}: ${req.url}, time: ${new Date()}`);
  console.log('first middleware executed');
  // throw new Error('55555');
  next('zzzzzzzzzzzzzzzzz');
});

// GET /home
app.get('/home', (req, res, next) => {
  console.log('GET /home');
  // res.status(200).send({ message: 'Express response has been sent' });
  res.status(200).send(req.query); // { nickname: 'jennifer' }
  // next();
});

app.use((req, res, next) => {
  console.log('after GET /home');
  res.status(400).send('OMG');
  // next();
});

app.use((err, req, res, next) => {
  console.log('errror middle ware');
  console.log(err);
  next();
});

app.delete('/home', (req, res) => {});

// POST /home
app.post(
  '/home',
  (req, res, next) => {
    next();
  },
  (req, res) => {},
  (req, res) => {},
  (req, res) => {}
);

// GET /book/26 req.params ===> { qwerty: '26' }
app.get('/book/:qwerty', (req, res) => {
  res.send(req.params);
});

// axios, fetch Content-Type: application/json
// request body (string) ===> javascript object (convert string to object) tool. express.json()
// request body ie. json, file, html form
// application/json ===> express.json()
// application/x-www-form-urlencode ===> express.urlencode()
// multipart/form-data ===> busboy, multer, formidable
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // req.body = js object
app.post('/product', (req, res) => {
  console.log(req.body);
  console.log(req.headers['content-type']);
  console.log(req.headers['user-agent']);
});

const bookRouter = express.Router();

bookRouter.get('/', (req, res, next) => {}); // GET /book
bookRouter.post('/', (req, res, next) => {});
bookRouter.put('/', (req, res, next) => {});
bookRouter.get('/:bookId', (req, res, next) => {});
bookRouter.delete('/:bookId', (req, res, next) => {});

app.use('/book', bookRouter);

app.listen(8001, () => console.log('express server running'));
// STATUS CODE
// 200: OK
// 201: Created
// 204: No content (none resposne body)

// Cache
// 301:
// 303:
// 304:

// CLient Error
// 400: Bad Request
// 401: Unathenticated
// 403: Forbidden
// 404: Not Found
// 405:
// 422:
// 429:

// Server Error
// 500: Internal Server
// 502: Bad Gateway
// 503: Service Unavailable

const path = require('path');
// const result = path.join(__dirname, 'abc', 'xyz', 'hello', '..');

const result = path.resolve('abc', 'www.html', 'xxx', '..');

// console.log(result);
// console.log(__dirname);
