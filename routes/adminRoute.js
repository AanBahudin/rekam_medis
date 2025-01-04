import express from 'express'
import {getCurrentUser, getAllAdmin, updateUser  } from '../controllers/adminController.js'

const router = express.Router()

router.route('/current-user')
    .get(getCurrentUser)

router.route('/data-admin')
    .get(getAllAdmin)

router.route('/:id')
    .patch(updateUser)

export default router