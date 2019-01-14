/*
 1. Reads all files from people directory.
 
 2. Merge & Sort all of the files in the directory into a peopleComplete.json file
 */


const fs = require('fs');
const Promise = require('promise');

let readFile = Promise.denodeify(fs.readFile);
let readdir = Promise.denodeify(fs.readdir);
let writeFile = Promise.denodeify(fs.writeFile);

// Read directory people which holds all people.json files.
readdir('people')
    .then((peopleFileNames) => {
        console.log(`All the .json files found in people-folder: ${peopleFileNames}`);

        let promises = [];
        for (let i = 0; i < peopleFileNames.length; i++) {
            promises.push(readFile('people/' + peopleFileNames[i], 'utf8'));
        }

        return promises;
    }, (error) => {
        throw new Error;
    })
    .then((promises) => {
        let mergedPeople = [];
        for (let i = 0; i < promises.length; i++) {
            let aResult = JSON.parse(promises[i]);
            mergedPeople = mergedPeople.concat(aResult);
        }

        mergedPeople.sort();

        return mergedPeople;
    }, (err) => {
        throw new Error;
    })
    .then(JSON.stringify)
    .then((data) => {
        writeFile('peopleComplete.json', data);
    }).catch((error) => `Caught error: ${error.stack}`);
