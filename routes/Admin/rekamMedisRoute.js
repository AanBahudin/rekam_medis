import express from 'express';
import { statsData, createData, getAllData, getSingleData, updateData, deleteData, addKunjungan } from '../../controllers/Admin/rekamMedisController.js';
import { validateAddRekamMedis } from '../../middleware/validationMiddleware.js'

const router = express.Router();

router.route('/')
    .get(getAllData)
    .post(validateAddRekamMedis, createData)
router.route('/stats')
    .get(statsData)

router.route('/kunjungan/:id')
    .post(addKunjungan)

router.route('/:id')
    .get(getSingleData)
    .patch(updateData)
    .delete(deleteData)
    
export default router;