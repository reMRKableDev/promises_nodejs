const {
    Client
} = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente'
});

client.connect();


let selectAllHatDataFromTable = new Promise((resolve, reject) => {
    client.query(`select * from hats`, (err, result) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(result.rows);
    });
});


selectAllHatDataFromTable.then((rows) => {
    console.log("HATS :D :D ");
    console.log("number of rows: " + rows.length);
    console.log(rows);
}, (error) => {
    console.log("oh no an error :c");
    console.log(error.stack);
});
