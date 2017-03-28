'use strict';
//to change these packed files, edit ./data then run `node scripts/pack`
const unpack = require('./efrt-unpack');

const data = {
  'Actor': require('./_packed/actor'),
  'Adjective': require('./_packed/adjective'),
  'Adverb': require('./_packed/adverb'),
  'Cardinal': require('./_packed/cardinal'),
  'City': require('./_packed/city'),
  'Comparative': require('./_packed/comparative'),
  'Conjunction': require('./_packed/conjunction'),
  'Country': require('./_packed/country'),
  'Currency': require('./_packed/currency'),
  'Demonym': require('./_packed/demonym'),
  'Determiner': require('./_packed/determiner'),
  'Duration': require('./_packed/duration'),
  'Expression': require('./_packed/expression'),
  'Femalename': require('./_packed/femalename'),
  'Firstname': require('./_packed/firstname'),
  'Gerund': require('./_packed/gerund'),
  'Holiday': require('./_packed/holiday'),
  'Honorific': require('./_packed/honorific'),
  'Infinitive': require('./_packed/infinitive'),
  'LastName': require('./_packed/lastname'),
  'MaleName': require('./_packed/malename'),
  'Modal': require('./_packed/modal'),
  'Month': require('./_packed/month'),
  'Noun': require('./_packed/noun'),
  'Ordinal': require('./_packed/ordinal'),
  'Organization': require('./_packed/organization'),
  'Participle': require('./_packed/participle'),
  'PastTense': require('./_packed/pasttense'),
  'Person': require('./_packed/person'),
  'Place': require('./_packed/place'),
  'Plural': require('./_packed/plural'),
  'Possessive': require('./_packed/possessive'),
  'Preposition': require('./_packed/preposition'),
  'PresentTense': require('./_packed/presenttense'),
  'Pronoun': require('./_packed/pronoun'),
  'Singular': require('./_packed/singular'),
  'Sportsteam': require('./_packed/sportsteam'),
  'Superlative': require('./_packed/superlative'),
  'Time': require('./_packed/time'),
  'Unit': require('./_packed/unit'),
  'Verb': require('./_packed/verb'),
  'Weekday': require('./_packed/weekday'),
};

// console.time('unpack');
let lexicon = {};
Object.keys(data).forEach((k) => {
  data[k] = unpack(data[k]);
  let arr = data[k].toArray();
  for(let i = 0; i < arr.length; i++) {
    lexicon[arr[i]] = k;
  }
});
// console.timeEnd('unpack');
// console.log(lexicon['toronto']);
