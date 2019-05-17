const dotenv = require ('dotenv');
const jwt = require ('jsonwebtoken');
const sk = require('../helper/config')


/**
 * @class AuthenticateUser
 * @description Intercepts and validates a given report for user endpoints
 * @exports AuthenticateUser
 */
class AuthenticateUser {
  /**
   * @method generateToken
   * @description Generates JWT upon user registration or login
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {string} - The token string
   */
  static generateToken(req, res, next) {
    const token = jwt.sign({user: req.body.email}, sk.SECRET_KEY, { expiresIn: '24h' });
      req.token = ` ${token}`;
      return next();
  }

  /**
   * @method verifyToken
   * @description Verifies token provided by the user
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} - JSON response object
   */
  static verifyToken(req, res, next) {
    const bearer = req.headers.authorization;
    if (!bearer) {
      return res.status(403).json({
        status: 403,
        error: 'Unauthorized. Provide token to make request.',
      });
    }

    const token = bearer.split(' ')[1];
    return jwt.verify(token, secretKey, (err) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          error: 'Token provided cannot be authenticated.',
        });
      }
      return next();
    });
  }
}


module.exports = AuthenticateUser
