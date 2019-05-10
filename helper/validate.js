/* eslint-disable no-restricted-syntax */
const Joi = require('@hapi/joi');
const { loanTypesAmount } = require('./helper');
const { newApplication } = require('../helper/util');

let data;

/**
 *
 * @params {res} object
 * @params {args} array
 *
 * check if amount is greater than loan type maximum amount */
let idL = 1;
const loanTypeAndLoanAmountChecker = (res, ...args) => {
  if (parseFloat(args[3]) > parseFloat(loanTypesAmount[args[1]])) {
    res.status(403).json({ status: 403, error: `maximum loan amount for ${args[1]} is ${loanTypesAmount[args[1]]}` });
  } else {
    newApplication.insertLoan(idL, ...args);
    idL += 1;
    // eslint-disable-next-line prefer-destructuring
    data = newApplication.head.data;
    res.status(201).json({ status: 201, Created: 'true', data });
  }
};

/**
 *
 * @param {user} object
 */
const validateSignUp = (user) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().regex(/^[A-Z]+$/).trim().uppercase()
      .required(),
    lastname: Joi.string().regex(/^[A-Z]+$/).trim().uppercase(),
    email: Joi.string().email().trim().required(),
    workAddress: Joi.string().trim().required(),
    homeAddress: Joi.string().trim().required(),
    pin: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().min(6)
      .max(30)
      .required(),
  });
  return Joi.validate(user, schema);
};


/**
 * @param{details} string
 */
const validateLogin = (details) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().trim().required(),
    pin: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().required(),
  });
  return Joi.validate(details, schema);
};

/**
 *
 * @param {user} object
 */
const validateLoan = (loan) => {
  const schema = Joi.object().keys({
    loanType: Joi.string().trim().required(),
    tenor: Joi.number().integer().min(1).max(12)
      .required(),
    amount: Joi.number().required(),
  });
  return Joi.validate(loan, schema);
};

/**
 *
 * @param {user} object
 */
const loanApproveValidate = (user) => {
  const schema = Joi.object().keys({
    status: Joi.string().insensitive().valid('approved', 'rejected').required(),
  });
  return Joi.validate(user, schema);
};

/**
 *
 * @param {user} object
 */
const amountValidate = (user) => {
  const schema = Joi.object().keys({
    amount: Joi.number().required(),
  });
  return Joi.validate(user, schema);
};

module.exports = {
  validateLoan,
  validateLogin,
  validateSignUp,
  loanApproveValidate,
  loanTypeAndLoanAmountChecker,
  amountValidate,
};
