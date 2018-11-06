const request = require('supertest');
const app = require('../app.js');
//==================== user API test ====================

/**
 * Testing get all user endpoint
 */

describe('GET /users', function () {
  it('respond with json containing a list of all users', function (done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
