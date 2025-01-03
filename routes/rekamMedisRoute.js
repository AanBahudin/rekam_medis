import express from 'express';
import { statsData, createData, getAllData, getSingleData, updateData, deleteData } from '../controllers/rekamMedisController.js';
import { validateAddRekamMedis } from '../middleware/validationMiddleware.js'

const router = express.Router();

router.route('/')
    .get(getAllData)
    .post(validateAddRekamMedis, createData)
router.route('/stats')
    .get(statsData)
router.route('/:id')
    .get(getSingleData)
    .patch(updateData)
    .delete(deleteData)
    
export default router;