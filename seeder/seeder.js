/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.

const helper = require('./seederHelper');
const { insertProducts, insertReviews } = require('../database-mysql/index');

const seed = function (names, dates) {
  for (let i = 1; i <= 10000; i++) {
    const dataOne = {
      product_id: i,
      product_name: 'Placeholder',
      comfort_average: helper.randomRating(),
      durability_average: helper.randomRating(),
      size_average: helper.randomRating(),
      stars_average: helper.randomRating(),
    };

    insertProducts(dataOne, (err, result) => {
      if (err) {
        throw (err);
      } else {
        return result;
      }
    });

    for (let j = 1; j <= 5; j++) {
      const dataTwo = {
        product_id: i,
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

      insertReviews(dataTwo, (err, result) => {
        if (err) {
          throw (err);
        } else {
          return result;
        }
      });
    }
  }
};

module.exports = seed;
