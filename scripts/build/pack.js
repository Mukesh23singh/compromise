'use strict';
require('shelljs/global');
config.silent = true;
const efrt = require('efrt');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

console.log(chalk.yellow('\n 🕑 packing trie-data..'));
//cleanup. remove old builds
exec('rm -rf ./src/lexicon/_packed/');
exec('mkdir ./src/lexicon/_packed/');

var files = fs.readdirSync('./src/lexicon/data');
files.forEach((file) => {
  let input = '../../src/lexicon/data/' + file;
  input = path.join(__dirname, input);
  let arr = require(input);

  console.log(file, arr.length);
  let packed = efrt.pack(arr);

  let output = path.join(__dirname, '../../src/lexicon/_packed/' + file);
  let content = 'module.exports="' + packed + '"';
  fs.writeFileSync(output, content, 'utf8');
});

// Object.keys(data).forEach((k) => {
//   console.log('       -' + k);
//   let packed = efrt.pack(data[k]);
//   let src = './src/tries/_packed/_' + k + '.js';
//   let content = 'module.exports="' + packed + '"';
//   fs.writeFileSync(src, content, 'utf8');
// });
// console.log(chalk.green('  done!\n'));
