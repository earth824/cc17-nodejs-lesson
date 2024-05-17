const http = require('http');
const fs = require('fs/promises');

// const requestListener = (req, res) => {};

const server = http.createServer(async (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  // res.writeHead(200);
  // res.end(`{ "message": "Response sent back from server" }`);
  console.log(req.method);
  console.log(req.url);

  switch (req.url) {
    case '/home':
      switch (req.method) {
        case 'GET':
          const content = await fs.readFile('./main.html', 'utf8');
          res.setHeader('Content-Type', 'text/html');
          res.writeHead(200);
          res.end(content);
          break;
        case 'POST':
          break;
        case 'PUT':
          break;
      }
    default:
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(404);
      res.end('<h1>404 The page you request was not found !!!!</h1>');
  }
});

server.listen(8000, () => {
  console.log('server running');
});
