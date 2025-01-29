import mongoose from "mongoose";

const DokterSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tanggalLahir: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: 'Dokter'
    },
    jenisKelamin: {
        type: String,
        default: 'Pria',
        enum: ['Pria', 'Wanita']
    },
    spesialisasi: {
        type: String,
        default: 'Dokter Umum'
    },
    nomorTelepon: {
        type: String
    },
    jabatan : {
        type: String,
    },
    status: {
        type: String,
        default : 'Aktif',
        enum: ['Aktif', 'Non Aktif']
    },
    photo: String,
    publicPhotoId: String

})

export default mongoose.model('Dokter', DokterSchema)