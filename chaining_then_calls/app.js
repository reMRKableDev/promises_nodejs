const fs = require('fs');
const Promise = require('promise');

let readFile = Promise.denodeify(fs.readFile);

readFile('.../sample.json', 'utf8')
    .then((data) => {
        return JSON.parse(data);
    }, (error) => {
        throw new Error();
    })
    .then((parsedData) => {
        console.log(`Resolved value from JSON file:  ${parsedData.sample_key}`);
    }).catch((error) => console.log(`An error occured: ${error.stack}`));
