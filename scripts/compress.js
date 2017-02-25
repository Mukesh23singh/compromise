require('shelljs/global');
config.silent = true;
const Huffman = require('../src/data/lib/huffman');
console.log(Huffman);

var text = 'some text to encode with huffman';
// var tree = Huffman.treeFromText(text); // generate the tree
// var treeEncoded = tree.encodeTree(); // will return an javascript array with tree representation
// var treeAgain = Huffman.decodeTree(treeEncoded); // restore the tree based on array representation
// var obj = JSON.stringify(treeEncoded); // get a JSON string for easy transportation
// console.log(obj);


Huffman.treeFromText(text, function(tree) {
  tree.encode(lorem, function(encoded) {
    console.log(encoded);
    tree.decode(encoded, function(decoded) {
      console.log(decoded);
    });
  });
});
