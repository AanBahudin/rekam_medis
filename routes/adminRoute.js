import express from 'express'
import {getCurrentUser  } from '../controllers/adminController.js'

const router = express.Router()

router.route('/current-user')
    .get(getCurrentUser)

export default router