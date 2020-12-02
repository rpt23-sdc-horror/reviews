/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.
const helper = require('./seederHelper');
const lorem = require('./loremIpsum');
const csvWriter = require('csv-write-stream');
const db = require('../database-mysql');
const fs = require("fs");


const genProducts = async () => {
  const writer = csvWriter();
  for (var j = 1; j < 10; j++) {
    writer.pipe(
      fs.createWriteStream('./CSV/product/product.csv' + j, { flags: 'a' })
    )

    for (let i = 1; i <= 1000000; i++) {
      const dataOne = {
        id: i,
        product_id: i,
        product_name: 'Placeholder',
        comfort_average: helper.randomRating(),
        durability_average: helper.randomRating(),
        size_average: helper.randomRating(),
        stars_average: helper.randomRating()
      }
      if (!writer.write(dataOne)) {
        await new Promise((resolve) => writer.once('drain', resolve));
      }
    };
  }
  return 'done';
}

const genReviews = async (names, dates) => {
  const writer = csvWriter();
  for (var i = 1; i < 11; i++) {
    writer.pipe(
      fs.createWriteStream('./CSV/review/review.csv' + i, { flags: 'a' })
    )

    for (let j = 1; j <= 100000; j++) {
      const dataTwo = {
        id: j,
        product_id: Math.floor(Math.random() * (9000000 - 1) + 1),
        username: helper.randomName(names),
        comment: lorem.generateSentences(2),
        verified: helper.randomBool(),
        locale: 'US',
        upvote: helper.randomRating(),
        downvote: helper.randomRating(),
        created_at: helper.randomDate(dates),
        size_rating: helper.randomRating(),
        durability_rating: helper.randomRating(),
        comfort_rating: helper.randomRating(),
        stars: helper.randomRating()
      };
      if (!writer.write(dataTwo)) {
        await new Promise((resolve) => writer.once('drain', resolve));
      }
    }
  }
  return 'done';
}

const names = ['Bob', 'Charles', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'giant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo', 'Mark', 'Lauren', 'Young', 'Rebecca'];
const dates = ['Aug 08, 2020', 'Jan 01, 2020', 'Feb 12, 2020', 'Mar 22, 2020', 'Sep 11, 2020', 'Jul 02, 2020', 'Oct 29, 2020', 'Mar 10, 2020', 'Apr 05, 2020', 'Jun 03, 2020', 'Jun 05, 2020', 'May 05, 2020', 'May 25, 2020'];

genProducts();
genReviews(names, dates);

