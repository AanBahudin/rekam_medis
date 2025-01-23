import { body, param, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError, UnathorizedError } from '../ErrorHandlerMiddleware.js'
import  Dokter from '../../models/DokterModel.js'
import mongoose from 'mongoose'

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

export const validateAddDokter = withValidationErrors([
    body('nama')
        .notEmpty()
        .withMessage('Nama tidak boleh kosong')
        .isLength({min: 3})
        .withMessage('Nama terlalu singkat'),
    body('email')
        .notEmpty()
        .withMessage('Email tidak boleh kosong')
        .isEmail()
        .withMessage('Format email tidak benar')
        .custom(async(email) => {
            const isEmailExist = await Dokter.findOne({email: email})
            if (isEmailExist) {
                throw new BadRequestError('Email sudah digunakan')
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('Password tidak boleh kosong')
        .isLength({min: 6, max: 12})
        .withMessage('Password harus 6 sampai 12 karakter')
])

export const validateIdParams = withValidationErrors([
    param('id')
        .custom(async(id) => {
            const isValidId = mongoose.Types.ObjectId.isValid(id)
            if (!isValidId) {
                throw new BadRequestError('Terjadi Kesalahan !')
            }

            const isDokterExist = await Dokter.findOne({_id: id})
            if (!isDokterExist) {
                throw new BadRequestError('Terjadi kesalahan')
            }
        })
])