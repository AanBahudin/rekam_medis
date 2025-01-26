import { StatusCodes } from "http-status-codes"
import Dokter from '../../models/DokterModel.js'
import cloudinary from 'cloudinary'
import { hashPassword } from '../../utils/passwordUtils.js'
import { promises as fs } from 'fs'

export const getAllDokter = async(req, res) => {
    const dokter = await Dokter.find()
    return res.status(StatusCodes.OK).json({msg: 'success', dokter, total: dokter.length})
}

export const addDokter = async(req, res) => {
    
    req.body.password = await hashPassword(req.body.password)

    if(req.file) {
        const response = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path)

        req.body.photo = response.secure_url
        req.body.publicPhotoId = response.public_id
    }

    const dokter = await Dokter.create(req.body);
    return res.status(StatusCodes.CREATED).json({msg: 'success', data: dokter})
}

export const getSingleDokter = async(req, res) => {
    const dokter = await Dokter.findOne({_id: req.params.id})
    return res.status(StatusCodes.OK).json({msg: 'ok', dokter})
}

export const updateDokter = async(req, res) => {
    const {id} = req.params

    if(req.file) {
        const response = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path)

        req.body.photo = response.secure_url
        req.body.publicPhotoId = response.public_id
    }
    const updatedDokter = await Dokter.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true})
    return res.status(StatusCodes.OK).json({msg: 'ok', updatedDokter})
}

export const deleteDokter = async(req, res) => {
    const {id} = req.params
    await Dokter.findOneAndDelete({_id: id})
    return res.status(StatusCodes.OK).json({msg: 'successfully deleted'})
}