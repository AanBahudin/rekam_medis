import express from 'express'
import { addDokter, getAllDokter, getSingleDokter, deleteDokter, updateDokter } from '../../controllers/Admin/dokterController.js'
import { validateAddDokter, validateIdParams } from '../../middleware/ADMIN/dokterValidationMiddleware.js'

const router = express.Router()

router.route('/')
    .get(getAllDokter)
    .post(validateAddDokter, addDokter)

router.route('/:id')
    .get(validateIdParams, getSingleDokter)
    .patch(validateIdParams, updateDokter)
    .delete(validateIdParams, deleteDokter)

export default router