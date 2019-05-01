import express from 'express';
import ValidateUser from '../middleware/ValidateUser';
import AuthenticateUser from '../middleware/AuthenticateUser';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit API v1' });
});

/**
 * POST /auth requests
 */
router.post(
  '/auth/signup',
  // ValidateUser.validateLoginDetails,
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

export default router;
