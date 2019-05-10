const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./config');

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const comparePassword = (hPassword, password) => bcrypt.compareSync(password, hPassword);
/**
 *
 * @param {email} string
 * @returns {token} string
 *
 * generate user token */
const genToken = (email) => {
  const token = jwt.sign({
    user: email,
  }, SECRET_KEY, { expiresIn: '24h' });
  return token;
};

const loanTypesAmount = {
  'Refinance Loan': 60000,
  'Agriculture Loan': 3000,
  'Auto Loan': 45000,
  'Mortgage Loan': 60000,
  'School Fees Loan': 1000000,
  'Salary Loan': 10000,
};
Object.freeze(loanTypesAmount);

module.exports = {
  genToken,
  loanTypesAmount,
  hashPassword,
  comparePassword,
};
