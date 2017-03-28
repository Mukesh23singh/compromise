'use strict';
require('shelljs/global');
const efrt = require('efrt');
const lexicon = require('../../src/data/lexicon');

let pivot = {};


Object.keys(lexicon).forEach((k) => {
  let pos = lexicon[k];
  pivot[pos] = pivot[pos] || [];
  pivot[pos].push(k);
});

Object.keys(pivot).forEach((k) => {
  console.log(k + '  ' + pivot[k].length);
});
// console.log(pivot);
