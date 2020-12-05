// Seeding file. Executing this file will seed the database.

const db = require('../database-mysql');
// new code
const fs = require('fs');

const dbFunc = require('../database-mysql/index');

dbFunc.uploadProdCSV();
dbFunc.uploadRevCSV();

db.connection.end();

console.log('Seed Finished');
