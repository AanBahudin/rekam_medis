import { body, param, validationResult } from 'express-validator'
import { BadRequestError, UnathorizedError } from '../middleware/ErrorHandlerMiddleware.js'

import Admin from '../models/AdminModel.js'

const withValidationErrors = (validateValues) => {  
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessage = errors.array().map((error) => error.msg);
                
                if (errorMessage[0].startsWith('not authrorized')) {
                    throw new UnathorizedError('not authorized to access this route');
                }

                throw new BadRequestError(errorMessage)
            }
            next();
        }
    ]
}

export const validateLogin = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('please provide email')
        .isEmail()
        .withMessage('email is not valid')
        .custom(async (email) => {
            const isEmailExist = await Admin.findOne({email})
            if (!isEmailExist) {
                throw new BadRequestError("email is not found")
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('please provide password')
        .isLength({ min: 3 })
        .withMessage('password is too short')
])

export const validateRegister = withValidationErrors([
    body('nama')
        .notEmpty()
        .withMessage('please provide name')
        .isLength({ min: 3 })
        .withMessage('name is to short'),
    body('email')
        .notEmpty()
        .withMessage('please provide email')
        .isEmail()
        .withMessage('email format is invalid')
        .custom(async (email) => {
            const isEmailAlredyExist = await Admin.findOne({email})

            if (isEmailAlredyExist ) {
                throw new BadRequestError('email already exist')
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('please provide password')
        .isLength({ min: 4 })
        .withMessage('password is to short!')
])

export const validateAddRekamMedis = withValidationErrors([
    body('nama')
        .notEmpty()
        .withMessage('nama tidak boleh kosong')
        .isLength({ min: 3 })
        .withMessage('nama terlalu pendek')
        .trim(),
    body('tanggalLahir')
        .notEmpty()
        .withMessage('tanggal lahir tidak boleh kosong')
        .isDate()
        .withMessage('tanggal lahir tidak valid'),
    body('usia')
        .notEmpty()
        .withMessage('Umur tidak boleh kosong')
        .isNumeric()
        .withMessage('umur harus angka')
        .isInt({ min: 0, max: 150 })
        .withMessage('Umur harus bilangan bulat')
        .isFloat({ min: 0 })
        .withMessage('umur tidak valid'),
    body('jenisKelamin')
        .notEmpty()
        .withMessage('jenis kelamin tidak boleh kosong'),

])