/* eslint-disable no-undef */
const { expect } = require('chai');
const { hashPassword, comparePassword } = require('../helper/helper');

describe('JWT, BCRYPT', () => {
  let result;
  it('Should return hashed password', () => {
    result = hashPassword('123456');
    expect(result).to.be.a('string');
  });
  it('Should return true if password matches hashed', () => {
    result = comparePassword(`${result}`, '123456');
    expect(result).to.be.equal(true);
  });
  it('Should return false if password does not matches hashed', () => {
    result = comparePassword(`${result}`, '12345');
    expect(result).to.be.equal(false);
  });
});
