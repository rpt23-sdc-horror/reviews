const request = require('supertest');
const app = require('../../server/index')

describe('Server', function () {
  describe('GET all request', function () {
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

    it('should receive a 404 Not Found status when using a bad route', function (done) {
      request(app)
        .get('/bad/api/route')
        .expect(404)
        .end(function (err) {
          if (err) return done(err);
          done();
        });
    });
  });
});
