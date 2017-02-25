'use strict';
const Trie = require('./trie');

// let str = 'cat\nsat\nmat\ngermany\nmatters';
// let arr = require('/home/spencer/nlp/nlp_compromise/src/data/nouns/nouns.js');
let arr = [
  'fun',
  'nothing',
  'nroo',
];
let t = new Trie(arr);
console.log('\n\n' + t.isWord('nothing'));
console.log('\n\n' + t.isWord('nroo'));
console.log('\n\n' + t.isWord('fun'));
console.log('\n\n' + t.isWord('germany'));
// console.log(t.isWord('number'));

// let compressed = t.pack();
// console.log(compressed);
// let p = new PackedTrie(compressed);
// console.log(p.isWord('nothing'));
// console.log(p.isWord('germany'));
