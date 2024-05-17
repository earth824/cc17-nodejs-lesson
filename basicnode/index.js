// CommonJS
// const chalk = require('chalk');
// const fromMultiExport = require('./multi-export');
// const { AAA, sum } = require('./multi-export');

// const oneExport = require('./one-export');

// console.log(fromMultiExport.AAA);
// console.log(fromMultiExport.sum(4, 7));
// console.log(oneExport(5, 4));
// console.log(oneExport);

// ESM
// import chalk from 'chalk';

// console.log(chalk.yellow('Hello World'));
// console.log('Anot Log');
// console.log('Anot Log after installing nodemon');

// fs.readFile('a', 'b', 'c')
// const fs = require('fs');
// // Pending, Fullfilled, Rejected
// fs.readFile('./test.txt', (err, data) => {
//   // Rejected callback(errObject)
//   // Fullfileed callback(null, "Message from Test file")
//   console.log(data.toString());
// });

// const proObj = new Promise((resolve,reject) => {})

const { readFile, writeFile } = require('./file-service');
readFile('./tes.txt').then(console.log).catch(console.log);
// writeFile('./test.txt', 'Write file execute!!!')
//   .then(() => console.log('success write'))
//   .catch(console.log);
