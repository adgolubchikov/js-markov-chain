## Markov chain text generator

### Installation
You can install it from npm `npm install js-markov-chain`  
Or clone this repository and `require('./markov.js');`  

### Usage
Firstly, require the package `const Markov = require('js-markov-chain');`  
Secondly, initiate the chain:  
`const trainData = require('fs').readFileSync('data.txt', 'utf8');`  
`const myChain = new Markov(trainData);`  
Data should be a string or an array of strings  
You can add a string or an array of strings to chain using `myChain.add(string);`  
Then, generate the text with string length limit:  
`myChain.generate(50);`  
Or, you can generate the text with default length up to 150 symbols:  
`myChain.generate();`  

### Save and load the chain
Chain preparation can take a long time, so sometimes it would be better to load already built chain.  
You can save the chain to file:  
`myChain.save('mychain.json');`  
You can load the chain from file:  
`myChain.load('mychain.json');`  
You may load messages from Telegram exported JSON (Export chat history - JSON). First argument is filename, second - name of the user whose messages you want to use.  
`myChain.loadTelegram('result.json', 'John Smith');`  

### Example
See `example.js`  

