const express = require ('express');
const ValidateUser = require ('../middleware/ValidateUser');
const AuthenticateUser = require ('../middleware/AuthenticateUser');
const UserController = require ('../controllers/UserController');
const routes = require ('../routes/routes')

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit API v1' });
});

/**
 * POST /auth requests
 */
router.post(
  '/auth/signup',
  ValidateUser.validateProfileDetails,
  AuthenticateUser.generateToken,
  UserController.createUser,
);
router.post(
  '/auth/signin',
  ValidateUser.validateLoginDetails,
  AuthenticateUser.generateToken,
  UserController.loginUser,
);

module.exports = router;
