const userDB = require ('../models/mock-users');
const loanDb = require ('../models/loanDb')

/**
 * @class UserController
 * @description specifies which method handles a request for a specific endpoint
 * @exports UserController
 */
class UserController {
  /**
   * @method createUser
   * @description Registers a user if details are valid
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static createUser(req, res) {
    const {
      firstname, lastname, address, email, password,
    } = req.body;
    const { token } = req;
    const id = userDB.length + 1;
    const userData = {
      id,
      firstname,
      lastname,
      address,
      email,
      password,
      status: 'unverified',
    };

    userDB.push(userData);
    res.status(201).json({
      status: 201,
      data: {
        token,
        id,
        firstname,
        lastname,
        email,
        password,
        message: 'registration successful',
      },
    });
  }

  /**
   * @method loginUser
   * @description Logs in a user if details are valid
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static loginUser(req, res) {
    const { token } = req;

    res.status(200).json({
      status: 200,
      data: {
        token,
        email: req.body.email,
        password: req.body.password,
        message: 'login successful!',
      },
    });
  }
}

    



module.exports = UserController
