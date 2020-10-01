'use strict'

// Automated data generator to generate 100 fake products and 100 fake reviews randomly assigned to fake products.

const helper = require('./seederHelper');
const updateDb = require('../database-mysql/index').updateDb;

const seed = function(names, dates) {

  for (let i = 0; i <= 100; i++) {
    const dataOne = {
      product_id: helper.randomSku(),
      product_name: 'Placeholder',
      comfort_average: helper.randomRating(),
      durability_average: helper.randomRating(),
      size_average: helper.randomRating(),
      stars_average: helper.randomRating()
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
      stars: helper.randomRating()
    };

    updateDb(dataOne, dataTwo);
  }
  return;
};

module.exports = seed;