const {
    Client
} = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente'
});

client.connect();

let selectStuffFromTable = (tableName) => {
    return new Promise((resolve, reject) => {
        client.query("select * from " + tableName, function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result.rows);
        });
    });
};


// resolve handler called
selectStuffFromTable("hats").then((rows) => {
    console.log("HATS :D :D ");
    console.log("number of rows: " + rows.length);
    console.log(rows);
}, (error) => {
    console.log("oh no an error :c");
    console.log(error);
});

// reject handler called (because 'flats' doesn't exist
/*selectStuffFromTable("flats").then((rows) => {
    console.log("FLATS :D :D ");
    console.log("number of rows: " + rows.length);
    console.log(rows);
}, (error) => {
    console.log("oh no an error :c");
    console.log(error);
});*/

let timeout = setTimeout(() => {
    console.log('//////////HERE COMES THE ASYNC PROOF/////////'), 5000
});

timeout;
