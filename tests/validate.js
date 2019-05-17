/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const {
  validateLoan, validateLogin,
  validateSignUp,
  loanApproveValidate,
} = require('../helper/validate');

const login = {
  email: 'kiirubrian21@gmail.com',
  pin: '123456',
};

const loan = {
  usermail: 'kiirubrian21@gmail.com',
  loanType: 'Mortage',
  tenor: 15,
  amount: 47000,
};

const user = {
  firstname: 'Brian',
  lastname: 'kiiru',
  email: 'kiirubrian21@gmail.com',
  workAddress: 'Mama Ngina Street Hse no.24',
  homeAddress: 'Embu,Kenya',
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
