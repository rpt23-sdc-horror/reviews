/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
const { assert } = require('chai');
const seeder = require('../seeder/seeder');
const db = require('../database-mysql');

describe('Database', function () {
  describe('Update Database', function () {
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
          assert.equal(typeof result, 'array');
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

  describe('Find All', function () {
    it('Should return results from the database', function () {
      const findAllPromisify = function () {
        return new Promise((resolve, reject) => {
          db.findAll((err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };

      findAllPromisify()
        .then((result) => {
          assert.equal(typeof result, 'object');
        })
        .catch((error) => {
          throw (error);
        });
    });
  });

  describe('Clear Database', function () {
    it('Should clear the database, leaving only the tables', function () {
      const clearDbPromisify = function () {
        return new Promise((resolve, reject) => {
          db.clearDb((err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };

      clearDbPromisify()
        .then(() => {
          db.findAll((err, result) => {
            if (err) {
              throw err;
            } else {
              return result;
            }
          });
        })
        .then((results) => {
          assert.equal(results.data.length, 0);
        })
        .catch((error) => {
          throw (error);
        });
    });
  });
});
