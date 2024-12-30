import { StatusCodes } from 'http-status-codes'
import Admin from '../models/AdminModel.js'

export const getCurrentUser = async(req, res) => {
    
    const user = await Admin.findOne({_id: req.user.userId}).select('-password')

    return res.status(StatusCodes.OK).json({msg: 'success', user})
}