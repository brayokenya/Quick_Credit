const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./config');

/* asynchronous version of hashing password with node.js and bcrypt*/
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const comparePassword = (hPassword, password) => bcrypt.compareSync(password, hPassword);
/*
 * @param {email} string
 * @returns {token} string
 * generate user token */
const genToken = (email) => {
  const token = jwt.sign({
    user: email,
  }, SECRET_KEY, { expiresIn: '1hr(s)' });
  return token;
};

const loanTypesAmount = {
  'Hospital Emergency': $40000,
  'Mortage': $30000,
  'Education': $45000,
  'Investment': $60000,
  'Business Launch': $1000000,
  'Home Improvement': $10000,
};
Object.freeze(loanTypesAmount);

module.exports = {
  genToken,
  loanTypesAmount,
  hashPassword,
  comparePassword,
};
