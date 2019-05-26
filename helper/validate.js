
const Joi = require('@hapi/joi'); //joi allows us me create blueprints oin JS objects to ensure processing of acurate data

/*
 * @param {user} object
 .trim used to remove whitespaces from both ends of a string
 */
const validateSignUp = (user) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().regex(/^[A-Z]+$/).trim().uppercase()
      .required(),
    lastname: Joi.string().regex(/^[A-Z]+$/).trim().uppercase(),
    email: Joi.string().email().trim().required(),
    address: Joi.string().trim().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().min(6)
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

/*
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

/*
 * @param {user} object
 */
const loanApproveValidate = (user) => {
  const schema = Joi.object().keys({
    status: Joi.string().insensitive().valid('approved', 'rejected').required(),
  });
  return Joi.validate(user, schema);
};

/*
 * @param {user} object
 */
const amountValidate = (user) => {
  const schema = Joi.object().keys({
    amount: Joi.number().required(),
  });
  return Joi.validate(user, schema);
};

module.exports = {
  validateSignUp,
  validateLogin,
  validateLoan,
  loanApproveValidate,
  loanTypeAndLoanAmountChecker,
  amountValidate,
};
