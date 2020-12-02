/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.
const helper = require('./seederHelper');
const lorem = require('./loremIpsum');
const csvWriter = require('csv-write-stream');
const fs = require("fs");


const genProducts = async () => {
  const writer = csvWriter();

  writer.pipe(
    fs.createWriteStream('./CSV/product.csv', { flags: 'a' })
  )

  for (let i = 1; i <= 9000000; i++) {
    const rating = helper.randomRating();
    const dataOne = {
      product_id: i,
      product_name: 'Placeholder',
      comfort_average: rating,
      durability_average: rating,
      size_average: rating,
      stars_average: rating
    }
    if (!writer.write(dataOne)) {
      await new Promise((resolve) => writer.once('drain', resolve));
    }
  };
  writer.end()
  return 'success';
}

const genReviews = async (names, dates) => {
  const writer = csvWriter();

  writer.pipe(
    fs.createWriteStream('./CSV/review.csv', { flags: 'a' })
  )

  for (let j = 1; j <= 1000000; j++) {
    var rand = helper.randomRating();
    const dataTwo = {
      product_id: Math.floor(Math.random() * (9000000 - 1) + 1),
      username: helper.randomName(names),
      comment: lorem.generateSentences(2),
      verified: helper.randomBool(),
      locale: 'US',
      upvote: rand,
      downvote: rand,
      created_at: helper.randomDate(dates),
      size_rating: rand,
      durability_rating: rand,
      comfort_rating: rand,
      stars: rand,
    };
    if (!writer.write(dataTwo)) {
      await new Promise((resolve) => writer.once('drain', resolve));
    }
  }
  writer.end()
  return 'success';
}

module.exports = {
  genProducts,
  genReviews
}
