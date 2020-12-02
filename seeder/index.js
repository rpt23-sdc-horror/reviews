// Seeding file. Executing this file will seed the database.

const db = require('../database-mysql');
// new code
const fs = require('fs');

const names = ['Bob', 'Charles', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'giant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo', 'Mark', 'Lauren', 'Young', 'Rebecca'];
const dates = ['Aug 08, 2020', 'Jan 01, 2020', 'Feb 12, 2020', 'Mar 22, 2020', 'Sep 11, 2020', 'Jul 02, 2020', 'Oct 29, 2020', 'Mar 10, 2020', 'Apr 05, 2020', 'Jun 03, 2020', 'Jun 05, 2020', 'May 05, 2020', 'May 25, 2020'];

const helper = require('./seederHelper');
const lorem = require('./loremIpsum');
const csvWriter = require('csv-write-stream');
const { insertProducts, insertReviews } = require('../database-mysql/index');

// const genProducts = async () => {
//   const writer = csvWriter();

//   writer.pipe(
//     fs.createWriteStream('./CSV/product.csv', { flags: 'a' })
//   )

//   for (let i = 1; i <= 9000000; i++) {
//     const rating = helper.randomRating();
//     const dataOne = {
//       product_id: i,
//       product_name: 'Placeholder',
//       comfort_average: rating,
//       durability_average: rating,
//       size_average: rating,
//       stars_average: rating
//     }
//     if (!writer.write(dataOne)) {
//       await new Promise((resolve) => writer.once('drain', resolve));
//     }
//   };
//   writer.end()
//   return 'success';
// }
// genProducts();

// const genReviews = async () => {
//   const writer = csvWriter();

//   writer.pipe(
//     fs.createWriteStream('./CSV/review.csv', { flags: 'a' })
//   )

//   for (let j = 1; j <= 1000000; j++) {
//     var rand = helper.randomRating();
//     const dataTwo = {
//       product_id: Math.floor(Math.random() * (9000000 - 1) + 1),
//       username: helper.randomName(names),
//       comment: lorem.generateSentences(2),
//       verified: helper.randomBool(),
//       locale: 'US',
//       upvote: rand,
//       downvote: rand,
//       created_at: helper.randomDate(dates),
//       size_rating: rand,
//       durability_rating: rand,
//       comfort_rating: rand,
//       stars: rand,
//     };
//     if (!writer.write(dataTwo)) {
//       await new Promise((resolve) => writer.once('drain', resolve));
//     }
//   }
//   writer.end()
//   return 'success';
// }
// genReviews();
let throttle = 10000;
let tracker = 1;
for (let i = 1; i <= 9000000; i++) {
      const rating = helper.randomRating();
      tracker += 1;
      const dataOne = {
        product_id: i,
        product_name: 'Placeholder',
        comfort_average: rating,
        durability_average: rating,
        size_average: rating,
        stars_average: rating
      }
      if (tracker === throttle) {
        insertProducts(dataOne, (err, result) => {
          if (err) {
            throw (err);
          } else {
            return result;
          }
        });
        tracker = 0;
      }
    }


db.connection.end();

console.log('Seed Finished');
module.exports = {
  names,
  dates
}
