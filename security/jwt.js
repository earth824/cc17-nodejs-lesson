const jwt = require('jsonwebtoken');

const payload = { email: 'john@gmail.com', username: 'john', id: 1 };

const token = jwt.sign(payload, 'qwertyuiopasdfghjklzxcvbnm', {
  algorithm: 'HS256',
  expiresIn: 60000
});

// console.log(token);

const tokenToVerify =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJqb2huIiwiaWQiOjEsImlhdCI6MTcxNjM3MzQ3NywiZXhwIjoxNzE2NDMzNDc3fQ.C0IEb30ydlPrLyvIub34Exn6ddwlzavXWSEa--QYydU';

try {
  const result = jwt.verify(tokenToVerify, 'qwertyuiopasdfghjklzxcvbnm');
  console.log(result);
} catch (err) {
  console.log(err);
}
