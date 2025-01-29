import express from 'express'
import { getCurrentDokter, updateProfilDokter } from '../../controllers/Dokter/dokterController.js'


const router = express.Router()

router.route('/')
    .get(getCurrentDokter)

router.route('/:id')
    .patch(updateProfilDokter)

export default router