import { StatusCodes } from 'http-status-codes'
import Admin from '../models/AdminModel.js'
import mongoose, { mongo } from 'mongoose'

export const getCurrentUser = async(req, res) => {
    
    const user = await Admin.findOne({_id: req.user.userId}).select('-password')

    return res.status(StatusCodes.OK).json({msg: 'success', user})
}

export const getAllAdmin = async(req, res) => {
    const activeAdmin = await Admin.find({
        $or: [
            { role : "super admin" },
            { isApproved : true }
        ]
    })
    const requestedAdmin = await Admin.find({isApproved: false})
    return res.status(StatusCodes.OK).json({ requestedAdmin, activeAdmin })
}

export const updateUser = async(req, res) => {

    console.log(req.body);
    
    
    if (req.body.isApproved === 'false') {
        await Admin.findOneAndDelete({_id: req.params.id})
    } else {
       await Admin.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
    }
    return res.status(StatusCodes.OK).json({ msg: 'successfully' })
}