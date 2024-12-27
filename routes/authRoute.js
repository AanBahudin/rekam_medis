import express from 'express';
import { login, register, logout, updatePassword } from '../controllers/authController.js'
const router = express.Router();

router.route('/login')
    .post(login)

router.route('/register')
    .post(register)

router.route('/logout')
    .get(logout)

router.route('/update-password')
    .patch(updatePassword)

export default router;