const Promise = require('promise');


let comparisonFunctionPromise = new Promise((resolve, reject) => {
    let comparisonFunction = () => {
        return Math.random() < 0.5;
    };

    if (comparisonFunction()) {
        resolve("success!");
    } else {
        reject("failure!");
    }
});

/* .then() is used to access the value/values passed by resolve & reject */
comparisonFunctionPromise.then(console.log, console.log);


let onResolved = (resolvedValue) => {
    console.log(resolvedValue);
};
let onRejected = (error) => {
    console.log(error)
};

comparisonFunctionPromise.then(onResolved, onRejected);
