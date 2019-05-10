/* eslint-disable no-undef */
const http = require('http');
const { assert } = require('chai');

describe('Express Server', () => {
  it('should return 200', (done) => {
    http.get('http://localhost:3000/home', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Should not route', () => {
  it('should return 404', (done) => {
    http.get('http://localhost:3000/ap1/v1/use', (res) => {
      assert.equal(404, res.statusCode);
      done();
    });
  });
});
