import express from 'express';
import { login, register, logout, updatePassword } from '../controllers/authController.js'
import { validateLogin, validateRegister } from '../middleware/validationMiddleware.js'
const router = express.Router();

router.route('/login')
    .post(validateLogin, login)

router.route('/register')
    .post(validateRegister, register)

router.route('/logout')
    .get(logout)

router.route('/update-password')
    .patch(updatePassword)

export default router;