import { StatusCodes } from "http-status-codes"

export const getAllDokter = async(req, res) => {
    return res.status(StatusCodes.OK).json({msg: 'success'})
}

export const addDokter = async(req, res) => {
    return res.status(StatusCodes.OK).json({msg: 'ok'})
}

export const getSingleDokter = async(req, res) => {
    return res.status(StatusCodes.OK).json({msg: 'ok'})
}

export const updateDokter = async(req, res) => {
    return res.status(StatusCodes.OK).json({msg: 'ok'})
}

export const deleteDokter = async(req, res) => {
    return res.status(StatusCodes.OK).json({msg: 'ok'})
}