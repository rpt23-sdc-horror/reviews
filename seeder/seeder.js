/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.

const helper = require('./seederHelper');
const { updateDb } = require('../database-mysql/index');

const seed = function (names, dates) {
  for (let i = 1; i <= 10; i++) {
    const dataOne = {
      product_id: helper.randomSku(),
      product_name: 'Placeholder',
      comfort_average: helper.randomRating(),
      durability_average: helper.randomRating(),
      size_average: helper.randomRating(),
      stars_average: helper.randomRating(),
    };

    const dataTwo = {
      product_id: helper.randomSku(),
      username: helper.randomName(names),
      comment: helper.randomComment(),
      verified: helper.randomBool(),
      locale: 'US',
      upvote: helper.randomRating(),
      downvote: helper.randomRating(),
      created_at: helper.randomDate(dates),
      size_rating: helper.randomRating(),
      durability_rating: helper.randomRating(),
      comfort_rating: helper.randomRating(),
      stars: helper.randomRating(),
    };

    updateDb(dataOne, dataTwo, (err, result) => {
      if (err) {
        throw (err);
      } else {
        return result;
      }
    });
  }
};

module.exports = seed;
