/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const { assert } = require('chai');
const helper = require('../seeder/seederHelper');
const db = require('../database-mysql');
const seeder = require('../seeder/seeder');

describe('Helper Functions', function () {
  describe('Boolean Generator', function () {
    it('should generate a boolean randoly', function () {
      const randomBool = helper.randomBool();

      assert.equal(typeof randomBool, 'boolean');
    });
  });

  describe('Random Sku', function () {
    const skuStarter = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'OO', 'PP', 'QQ'];

    it('should generate a random sku in string format', function () {
      const randomSku = helper.randomSku(skuStarter);

      assert.equal('string', typeof randomSku);
    });

    it('should generate a string with a length of 6', function () {
      const productId = [];
      const randomSku = helper.randomSku(skuStarter);

      // Extract string without quotes.

      for (let i = 0; i < randomSku.length; i++) {
        if (randomSku[i] !== '"') {
          productId.push(randomSku[i]);
        }
      }

      assert.equal(productId.length, 6);
    });
  });

  describe('Random Name', function () {
    const array = ['Bob', 'Charlie', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'shaneGiant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo'];

    it('should generate a name from the list of names', function () {
      const randomName = helper.randomName(array);
      const index = array.indexOf(randomName);
      const truthiness = index > -1;

      assert.equal(truthiness, true);
    });
  });

  describe('Random Date', function () {
    const dates = ['08-20-2020', '01-10-2020', '02-12-2020', '03-22-2020', '09-24-2020', '07-02-2020', '10-29-2020', '03-10-2020', '04-05-2020'];

    it('should generate a date from the list of dates', function () {
      const randomDate = helper.randomDate(dates);
      const index = dates.indexOf(randomDate);
      const truthiness = index > -1;

      assert.equal(truthiness, true);
    });
  });

  describe('Random Comment', function () {
    it('should generate a random comment using lorem ipsum', function () {
      const randomComment = helper.randomComment();

      assert.equal(typeof randomComment, 'string');
    });
  });

  // eslint-disable-next-line prefer-arrow-callback
  describe('Random Rating', function () {
    const ratings = [0, 1, 2, 3, 4, 5];
    it('should generate a random number between 1 to 5', function () {
      const randomRating = helper.randomRating();
      const index = ratings.indexOf(randomRating);
      const truthiness = index > -1;
      assert.equal(true, truthiness);
    });
  });
});

describe('Seeder', function () {
  describe('Upload Data', function () {
    const names = ['Bob', 'Charlie', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'shaneGiant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo'];
    const dates = ['08-20-2020', '01-10-2020', '02-12-2020', '03-22-2020', '09-24-2020', '07-02-2020', '10-29-2020', '03-10-2020', '04-05-2020'];

    it('Should upload mock data to the database', function () {
      const seedPromisify = function () {
        return new Promise((resolve, reject) => {
          seeder(names, dates, (err, result) => {
            if (err) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      };

      seedPromisify()
        .then(() => {
          db.findAll((err, result) => {
            if (err) {
              throw (err);
            } else {
              return result;
            }
          });
        })
        .then((result) => {
          assert.equal(typeof result, 'object');
        })
        .then(() => {
          db.clearDb((err, result) => {
            if (err) {
              throw err;
            } else {
              return result;
            }
          });
        })
        .catch((error) => {
          throw (error);
        });
    });
  });
});
