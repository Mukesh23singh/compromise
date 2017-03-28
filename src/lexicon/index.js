'use strict';
//to change these packed files, edit ./data then run `node scripts/pack`
const data = require('./data');
// console.time('unpack');
let lexicon = {};
Object.keys(data).forEach((k) => {
  let arr = data[k].toArray();
  for(let i = 0; i < arr.length; i++) {
    lexicon[arr[i]] = k;
  }
});
module.exports = lexicon;
// console.timeEnd('unpack');
// console.log(lexicon['toronto']);
