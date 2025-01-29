import { StatusCodes } from 'http-status-codes'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { BadRequestError, NotAuthenticatedError } from '../middleware/ErrorHandlerMiddleware.js';
import Admin from '../models/AdminModel.js'
import Dokter from '../models/DokterModel.js'
import { createToken } from '../utils/jwt.js';


export const register = async(req, res) => {
    
    const isFirstUser = await Admin.countDocuments();
    if (isFirstUser === 0) {
        req.body.role = "super admin"
    }

    req.body.password = await hashPassword(req.body.password);
    await Admin.create(req.body)

    return res.status(StatusCodes.CREATED).json({ msg: 'Register successfuly' })
}

export const login = async(req, res) => {
    
    const {email} = req.body
    let user;
    if (email.includes('health')) {
        user = await Dokter.findOne({email: req.body.email});
    } else {
        user = await Admin.findOne({email: req.body.email});
    }

    const isPasswordCorrect = await comparePassword(req.body.password, user.password)
    if (!isPasswordCorrect) {
        throw new NotAuthenticatedError('Password yang dimasukan salah!')
    }

    if (user.isApproved === false) {
        throw new BadRequestError('email and password are wrong')
    }

    const payload = {userId: user._id, name: user.nama, role: user.role, email: user.email}
    const token = createToken(payload)

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    });

    delete user.password

    return res.status(StatusCodes.OK).json({msg: 'Login successfully', user})
}

export const logout = async(req, res) => {

    res.cookie('token', 'logout', {
        expires: new Date(Date.now() + 1000)
    });

    return res.status(StatusCodes.OK).json({ msg: 'Successfully logged out!' })
}

export const updatePassword = async(req, res) => {
    res.send('upate password')
}