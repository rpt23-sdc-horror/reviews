const assert = require('chai').assert;
const findAll = require('../database-mysql/index').findAll;
const helper = require('../seeder/seederHelper');

describe("Helper Functions", function () {
  describe("Boolean Generator", function () {
    it("should generate a boolean randoly", function () {
      const randomBool = helper.randomBool()

      assert.equal("boolean", typeof randomBool);
    });
  });

  describe("Random Sku", function () {
    const skuStarter = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'OO', 'PP', 'QQ'];

    it("should generate a random sku in string format", function () {
      const randomSku = helper.randomSku(skuStarter);

      assert.equal("string", typeof randomSku);
    });

    it("should generate a string with a length of 6", function () {
      const randomSku = helper.randomSku(skuStarter);

      assert.equal(6, randomSku.length);
    });
  });

  describe("Random Name", function () {
    const names = ['Bob', 'Charlie', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'shaneGiant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo'];

    it("should generate a name from the list of names", function () {
      const randomName = helper.randomName(names);
      const index = names.indexOf(randomName);
      const truthiness = index > -1 ? true : false;

      assert.equal(true, truthiness);
    });
  });

  describe("Random Date", function () {
    const dates = ['08-20-2020', '01-10-2020', '02-12-2020', '03-22-2020', '09-24-2020', '07-02-2020', '10-29-2020', '03-10-2020', '04-05-2020'];

    it("should generate a date from the list of dates", function () {
      const randomDate = helper.randomDate(dates);
      const index = names.indexOf(randomDate);
      const truthiness = index > -1 ? true : false;

      assert.equal(true, truthiness);
    });
  });

  describe("Random Comment", function () {
    it("should generate a random comment using lorem ipsum", function () {
      const randomComment = helper.randomComment();

      assert.equal("string", typeof randomComment);
    });
  });

  describe("Random Rating", function () {
    const ratings = [1, 2, 3, 4, 5];
    it("should generate a random number between 1 to 5", function () {
      const randomRating = helper.randomRating();
      const index = ratings.indexOf(randomRating);
      const truthiness = index > -1 ? true : false;

      assert.equal(true, truthiness);
    });
  })
});

// describe("Seeder", function () {

// })