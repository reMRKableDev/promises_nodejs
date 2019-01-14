const fs = require('fs');
const Promise = require('promise');

const readFile = Promise.denodeify(fs.readFile);

readFile('./sample.txt', 'utf8').then(
    (result) => {
        console.log(`Success: ${result}`);
    },
    (error) => {
        console.log(`Something went wrong: ${error}`);
    }
);
