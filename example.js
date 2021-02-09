const Markov = require('./markov.js');

const data = require('fs').readFileSync('shakespeare.txt', 'utf8');

const myChain = new Markov(data);

console.log(myChain.generate(50));
console.log(myChain.generate());
