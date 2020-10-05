/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const { assert } = require('chai');
const axios = require('axios').default;

describe('Server', function () {
  describe('GET all request', function () {
    it('Should send in a GET request receive a 200 status code', function () {
      axios.get('http://localhost:3003/testingRoute/databaseTestRoute')
        .then((response) => {
          assert.equal(200, response.status);
        })
        .catch((error) => {
          throw (error);
        });
    });

    it('Should receive a response with empty data', function () {
      axios.get('http://localhost:3003/testingRoute/databaseTestRoute')
        .then((response) => {
          assert.equal(typeof response.data, 'object');
        })
        .catch((error) => {
          throw (error);
        });
    });
  });
});
