const assert = require('chai');
const helper = require('../../seeder/seederHelper');
const db = require('../../database-mysql');
const seeder = require('../../seeder/seeder');

describe('Helper Functions', function () {
  describe('Boolean Generator', function () {
    it('should generate a boolean randoly', function () {

      assert.equal(typeof helper.randomBool(), 'boolean');
    });
  });

  describe('Random Name', function () {
    const array = ['Bob', 'Charlie', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'shaneGiant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo'];

    it('should generate a name from the list of names', function () {
      const index = array.indexOf(helper.randomName());
      const truthiness = index > -1;

      assert.equal(truthiness, true);
    });
  });

  describe('Random Date', function () {
    const dates = ['08-20-2020', '01-10-2020', '02-12-2020', '03-22-2020', '09-24-2020', '07-02-2020', '10-29-2020', '03-10-2020', '04-05-2020'];

    it('should generate a date from the list of dates', function () {
      const index = dates.indexOf(helper.randomDate());
      const truthiness = index > -1;

      assert.equal(truthiness, true);
    });
  });

  describe('Random Comment', function () {
    it('should generate a random comment using lorem ipsum', function () {
      assert.equal(typeof helper.randomComment(), 'string');
    });
  });

  describe('Random Rating', function () {
    it('should generate a random number', function () {
      assert.equal('number', typeof helper.randomRating());
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
              reject(err);
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
              throw err;
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
        .catch((err) => {
          throw err;
        });
    });
  });
});
