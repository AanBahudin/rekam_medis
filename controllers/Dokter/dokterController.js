import { StatusCodes } from 'http-status-codes'
import Dokter from '../../models/DokterModel.js'

export const getCurrentDokter = async(req, res) => {
    const dokter = await Dokter.findOne({_id: req.user.userId}).select('-password')
    return res.status(StatusCodes.OK).json({dokter})
}

export const updateProfilDokter = async(req, res) => {
    const {id} = req.params
}