import express from 'express'
import { addDokter, getAllDokter, getSingleDokter, deleteDokter, updateDokter } from '../../controllers/Admin/dokterController.js'
const router = express.Router()

router.route('/')
    .get(getAllDokter)
    .post(addDokter)

router.route('/:id')
    .get(getSingleDokter)
    .patch(updateDokter)
    .delete(deleteDokter)

export default router