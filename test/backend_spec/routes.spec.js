const request = require('supertest');
const app = require('../../server/index')

describe('Server Routes', function () {
  describe('GET Endpoint', function () {
    it('should receive a 200 OK status', function (done) {
      const productID = 1;

      request(app)
        .get(`/api/reviews/${productID}`)
        .expect(200)
        .end(function (err) {
          if (err) return done(err);
          done();
        });
    });

    it('should send a JSON object back', function (done) {
      const productID = 1;

      request(app)
        .get(`/api/reviews/${productID}`)
        .expect('Content-type', /json/)
        .end(function (err) {
          if (err) return done(err);
          done();
        });
    });
  });
});
