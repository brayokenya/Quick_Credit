/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');/* used to make requests and return responses */
const jwt = require('jsonwebtoken');
const { checkToken } = require('../middleware/auth');
const { SECRET_KEY } = require('../helper/config');

describe('Test Auth Middleware', () => {
  let request;
  let response;
  let next;

  beforeEach(() => {
    request = {};
    response = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    next = sinon.spy();
  });
  it('next should not be called if bad token was provided', () => {
    request.headers = {};
    request.headers.authorization = 'some authorization header';
    checkToken(request, response, next);
    expect(next.called).to.equal(false);
  });

  it('request should contain user info if good token was provided', () => {
    request.headers = {};
    request.headers.authorization = jwt.sign({ id: 1 }, SECRET_KEY);
    checkToken(request, response, next);
    expect(request.decoded).to.have.property('id');
    expect(request.decoded.id).to.be.equal(1);
  });

  it('next should be called once if good token was provided', () => {
    request.headers = {};
    request.headers.authorization = jwt.sign({ id: 1 }, SECRET_KEY);
    checkToken(request, response, next);
    expect(next.calledOnce).to.equal(true);
  });
});
