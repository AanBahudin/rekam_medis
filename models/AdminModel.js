import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    nama: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'admin'
    },
    isApproved: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Admin', AdminSchema)