/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const {
  validateLoan, validateLogin,
  validateSignUp,
  loanApproveValidate,
} = require('../helper/validate');

const login = {
  email: 'elemanhillary@gmail.com',
  pin: '123456',
};

const loan = {
  usermail: 'elemanhillary@gmail.com',
  loanType: 'Auto Loan',
  tenor: 12,
  amount: 3000,
};

const user = {
  firstname: 'eleman',
  lastname: 'hillary',
  email: 'elemanhillary@gmail.com',
  workAddress: 'kampala',
  homeAddress: 'kampala',
  pin: '123456',
};

describe('validation', () => {
  let result;
  it('Should validate sign up', () => {
    result = validateSignUp(user);
    expect(result).to.be.a('object');
  });
  it('Should validate login', () => {
    result = validateLogin(login);
    expect(result).to.be.a('object');
  });
  it('Should successfully validate user loan', () => {
    result = validateLoan(loan);
    expect(result).to.be.a('object');
  });
  it('Should successfully validate loan verification', () => {
    result = loanApproveValidate({ status: 'approved' });
    expect(result).to.be.a('object');
  });
});
