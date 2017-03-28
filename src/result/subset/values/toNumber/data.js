const p = require('../paths');
const numbers = p.data.numbers;
const fns = p.fns;

const cardinal = {
  ones: {

  },
  teens: {

  },
  tens: {

  },
  multiples: {

  }
};

const ordinal = {
  ones: {

  },
  teens: {

  },
  tens: {

  },
  multiples: {

  }
};

//setup number-word data
const ones = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  //
  'zeroth': 0,
  'first': 1,
  'second': 2,
  'third': 3,
  'fourth': 4,
  'fifth': 5,
  'sixth': 6,
  'seventh': 7,
  'eighth': 8,
  'ninth': 9
};
const teens = {
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  //
  'tenth': 10,
  'eleventh': 11,
  'twelfth': 12,
  'thirteenth': 13,
  'fourteenth': 14,
  'fifteenth': 15,
  'sixteenth': 16,
  'seventeenth': 17,
  'eighteenth': 18,
  'nineteenth': 19
};
const tens = {
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
  //
  'twentieth': 20,
  'thirtieth': 30,
  'fourtieth': 40,
  'fiftieth': 50,
  'sixtieth': 60,
  'seventieth': 70,
  'eightieth': 80,
  'ninetieth': 90
};
const multiples = {
  'hundred': 1e2,
  'thousand': 1e3,
  'grand': 1e3,
  'million': 1e6,
  'billion': 1e9,
  'trillion': 1e12,
  'quadrillion': 1e15,
  'quintillion': 1e18,
  'sextillion': 1e21,
  'septillion': 1e24,
  //
  'hundredth': 1e2,
  'thousandth': 1e3,
  'millionth': 1e6,
  'billionth': 1e9,
  'trillionth': 1e12,
  'quadrillionth': 1e15,
  'quintillionth': 1e18,
  'sextillionth': 1e21,
  'septillionth': 1e24
};

module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};
