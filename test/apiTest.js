const request = require('supertest');
const app = require('../routes/index');

//==================== Waterdata API test ====================

/**
 * Testing get waterdata endpoint
 */

describe('GET /waterData', function () {
  it('respond with json containing a list of all waterdata', function (done) {
    request(app)
      .get('/waterData')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
