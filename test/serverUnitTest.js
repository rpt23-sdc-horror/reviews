const assert = require('chai').assert;
const axios = require('axios').default;
const db = require('../database-mysql');
const helper = require('../seeder/seederHelper');

describe("Server", function () {
  describe("GET all request", function () {
    it("Should send in a GET request receive a 200 status code", function () {
      axios.get('http://localhost:3003/testingRoute/databaseTestRoute')
        .then(function (response) {
          assert.equal(200, response.status);
        })
        .catch(function (error) {
          console.log(error);
        })
    });

    it("Should receive a response with empty data", function () {
      axios.get('http://localhost:3003/testingRoute/databaseTestRoute')
        .then(function (response) {
          console.log(typeof response.data);
          assert.equal(typeof response.data, 'object');
        })
        .catch(function (error) {
          console.log(error);
        })
    })
  })
})