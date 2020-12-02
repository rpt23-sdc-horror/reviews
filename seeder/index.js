// Seeding file. Executing this file will seed the database.

const db = require('../database-mysql');
// new code
const fs = require('fs');

const names = ['Bob', 'Charles', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'giant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo', 'Mark', 'Lauren', 'Young', 'Rebecca'];
const dates = ['Aug 08, 2020', 'Jan 01, 2020', 'Feb 12, 2020', 'Mar 22, 2020', 'Sep 11, 2020', 'Jul 02, 2020', 'Oct 29, 2020', 'Mar 10, 2020', 'Apr 05, 2020', 'Jun 03, 2020', 'Jun 05, 2020', 'May 05, 2020', 'May 25, 2020'];
const seeder = require('../seeder/seeder')
const { insertProducts, insertReviews } = require('../database-mysql/index');

seeder.genProducts();
seeder.genReviews(names, dates);


db.connection.end();

console.log('Seed Finished');
