/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.
const helper = require('./seederHelper');
const lorem = require('./loremIpsum');
const csvWriter = require('csv-write-stream');

  const genProducts = () => {
    const writer = csvWriter({
      headers: [
        'product_id',
        'product_name',
        'comfort_average',
        'durability_average',
        'size_average',
        'stars_average']
    });

    writer.pipe(
      fs.createWriteStream('./CSV/product.csv', { flags: 'a' })
    )

    for (let i = 1; i <= 10000000; i++) {
      const rating = helper.randomRating();
      const dataOne = {
        product_id: i,
        product_name: 'Placeholder',
        comfort_average: rating,
        durability_average: rating,
        size_average: rating,
        stars_average: rating
      }
    };
    return data;
  }



  const genReviews = (names, dates) => {
    const data = [];
    const rating = helper.randomRating();
    const randComment = lorem.generateSentences(2);
    for (let j = 1; j <= 100000; j++) {
      const dataTwo = {
        product_id: Math.floor(Math.random() * (1000000 - 1) + 1),
        username: helper.randomName(names),
        comment: lorem.generateSentences(2),
        verified: helper.randomBool(),
        locale: 'US',
        upvote: rating,
        downvote: rating,
        created_at: helper.randomDate(dates),
        size_rating: rating,
        durability_rating: rating,
        comfort_rating: rating,
        stars: rating,
      };
      data.push(dataTwo);
    }
    return data;
  }

module.exports = {
  genProducts,
  genReviews
}
