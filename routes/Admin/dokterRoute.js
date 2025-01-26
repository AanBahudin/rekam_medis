import express from 'express'
import { addDokter, getAllDokter, getSingleDokter, deleteDokter, updateDokter } from '../../controllers/Admin/dokterController.js'
import { validateAddDokter, validateIdParams, validateUpdateDokter } from '../../middleware/ADMIN/dokterValidationMiddleware.js'
import upload from '../../middleware/multerMiddleware.js'

const router = express.Router()

router.route('/')
    .get(getAllDokter)
    .post(upload.single('photo'), validateAddDokter, addDokter)

router.route('/:id')
    .get(validateIdParams, getSingleDokter)
    .patch(validateIdParams, validateUpdateDokter, updateDokter)
    .delete(validateIdParams, deleteDokter)

export default router