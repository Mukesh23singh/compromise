'use strict';
const Trie = require('./trie');
let ptrie = require('./ptrie');
let PackedTrie = ptrie.PackedTrie;

// let str = 'cat\nsat\nmat\ngermany\nmatters';
let arr = require('/home/spencer/nlp/nlp_compromise/src/data/nouns/nouns.js');
let t = new Trie(arr);
// console.log('\n\n' + t.isWord('nothing'));

let compressed = t.pack();
console.log(compressed);
let p = new PackedTrie(compressed);
console.log(p.isWord('nothing'));

for(let i = 0; i < arr.length; i++) {
  console.log(p.isWord(arr[i]));
}
