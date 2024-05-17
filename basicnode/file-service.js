const fs = require('fs');

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) return reject(err);
      resolve();
    });
  });

const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });

module.exports = {
  readFile,
  writeFile
};
