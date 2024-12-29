import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: String,
    password: String,
})

export default mongoose.model('User', UserSchema);