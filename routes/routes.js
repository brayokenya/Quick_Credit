const express = require ('express');
const ValidateUser = require ('../middleware/ValidateUser');
const AuthenticateUser = require ('../middleware/AuthenticateUser');
const UserController = require ('../controllers/UserController');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit API v1' });
});

/**
 * POST requests for sign up and sign in
 */
router.post(
  '/signup',
  ValidateUser.validateProfileDetails,
  AuthenticateUser.generateToken,
  //UserController.createUser,
);
router.post(
  '/signin',
  ValidateUser.validateLoginDetails,
  AuthenticateUser.generateToken,
  //UserController.loginUser,
);

router.patch(
         '/loans',
   ValidateUser.validateLoginDetails,
  AuthenticateUser.generateToken,
  //UserController.loginUser,
);
 

module.exports = router;
