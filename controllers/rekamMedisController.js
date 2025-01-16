import { StatusCodes } from 'http-status-codes';
import RekamMedis from '../models/PasienModel.js'

export const statsData = async(req, res) => {
    const totalPasien = await RekamMedis.countDocuments()
    const totalResiko = await RekamMedis.aggregate([
        {
            $group: {
                _id: "$statusResiko",
                count: { $sum: 1 }
            }
        }
    ])

    const rasioGender = await RekamMedis.aggregate([
        {
            $group: {
                _id: '$jenisKelamin',
                count: { $sum: 1 }
            }
        }
    ])
    const pasienTerbaru = await RekamMedis.find({}).sort({ createdAt: -1 })
    
    

    return res.status(StatusCodes.OK).json({ totalPasien, totalResiko, rasioGender, pasienTerbaru })
}

export const createData = async(req, res) => {
    req.body.createdBy = req.user.userId;
    await RekamMedis.create(req.body)
    return res.status(StatusCodes.OK).json({ msg: 'pasien di input' })
}

export const getAllData = async(req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const data = await RekamMedis.find({}).skip(skip).limit(limit)
    const countDocument = await RekamMedis.countDocuments()

    const numOfPages = Math.ceil(countDocument / limit)

    return res.status(StatusCodes.OK).json({pasien: data, currentPage: page, numOfPages})
}

export const getSingleData = async(req, res) => {
    const rekamMedis = await RekamMedis.findOne({ _id: req.params.id })

    return res.status(StatusCodes.OK).json({rekamMedis})
}

export const updateData = async(req, res) => {
    const {id} = req.params
    await RekamMedis.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true})
    return res.status(StatusCodes.OK).json({ msg: 'Berhasil diupdate' })
    
}

export const deleteData = async(req, res) => {
    const { id } = req.params
    await RekamMedis.findOneAndDelete({_id: id})
    return res.status(StatusCodes.OK).json({ msg: 'user deleted!' })
}