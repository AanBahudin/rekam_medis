import { body, param, validationResult } from 'express-validator'
import { BadRequestError, UnathorizedError } from '../middleware/ErrorHandlerMiddleware.js'
import  RekamMedis from '../models/PasienModel.js'

import Admin from '../models/AdminModel.js'

const withValidationErrors = (validateValues) => {  
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessage = errors.array().map((error) => error.msg);
                
                if (errorMessage[0].startsWith('not authrorized')) {
                    throw new UnathorizedError('not authorized to access this route');
                }

                throw new BadRequestError(errorMessage)
            }
            next();
        }
    ]
}

export const validateLogin = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('Email tidak boleh kosong')
        .isEmail()
        .withMessage('Email tidak benar')
        .custom(async (email) => {
            const isEmailExist = await Admin.findOne({email})
            if (!isEmailExist) {
                throw new BadRequestError("Email salah, silahkan coba lagi")
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('please provide password')
        .isLength({ min: 3 })
        .withMessage('password is too short')
])

export const validateRegister = withValidationErrors([
    body('nama')
        .notEmpty()
        .withMessage('please provide name')
        .isLength({ min: 3 })
        .withMessage('name is to short'),
    body('email')
        .notEmpty()
        .withMessage('please provide email')
        .isEmail()
        .withMessage('email format is invalid')
        .custom(async (email) => {
            const isEmailAlredyExist = await Admin.findOne({email})

            if (isEmailAlredyExist ) {
                throw new BadRequestError('email already exist')
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('please provide password')
        .isLength({ min: 4 })
        .withMessage('password is to short!')
])

export const validateAddRekamMedis = withValidationErrors([
    body('nama')
        .notEmpty()
        .withMessage('nama tidak boleh kosong')
        .isLength({ min: 3 })
        .withMessage('nama terlalu pendek')
        .trim(),
    body('tanggalLahir')
        .notEmpty()
        .withMessage('tanggal lahir tidak boleh kosong')
        .isDate()
        .withMessage('tanggal lahir tidak valid'),
    body('usia')
        .notEmpty()
        .withMessage('Umur tidak boleh kosong')
        .isNumeric()
        .withMessage('umur harus angka')
        .isInt({ min: 0, max: 150 })
        .withMessage('Umur harus bilangan bulat')
        .isFloat({ min: 0 })
        .withMessage('umur tidak valid'),
    body('jenisKelamin')
        .notEmpty()
        .withMessage('jenis kelamin tidak boleh kosong')
        .isIn(['Pria', 'Wanita'])
        .withMessage('Jenis kelamin tidak valid'),
    body('nik')
        .notEmpty()
        .withMessage('jenis kelamin tidak boleh kosong')
        .isLength({min: 16, max: 16})
        .withMessage('NIK terdiri dari 16 karakter')
        .custom(async (nik) => {
            const isAlreadyExist = await RekamMedis.findOne({nik})

            if (isAlreadyExist) { 
                throw new BadRequestError('NIK sudah terdaftar')
            }
        }),
    body('statusPernikahan')
        .notEmpty()
        .withMessage('status pernikahan tidak boleh kosong')
        .isIn(['Menikah', 'Belum Menikah', 'Cerai'])
        .withMessage('Plihan tidak ada'),
    body('kebangsaan')
        .notEmpty()
        .withMessage('kebangsaan tidak boleh kosong'),
    body('agama')
        .notEmpty()
        .withMessage('Agama tidak boleh kosong')
        .isIn(['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']),
    body('alamat')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('kota')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('kecamatan')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('kelurahan')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('rt')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('rw')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('pemeriksa')
        .notEmpty()
        .withMessage('Alamat tidak boleh kosong'),
    body('tujuanBerobat')
        .notEmpty()
        .withMessage('kontrol tidak boleh kosong')
        .isIn(['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap'])
        .withMessage('pilihan tidak ada'),
    // body('pemeriksaanLanjutan')
    //     .notEmpty()
    //     .withMessage('kontrol tidak boleh kosong')
    //     .isIn(['Tidak ada', 'Labratorium', 'Radiologi', 'Laboratorium dan Radiologi'])
    //     .withMessage('tidak ada pilihan'),
    body('namaPenanggungJawab')
        .notEmpty()
        .withMessage('nama penanggung jawab tidak boleh kosong'),
    body('hubunganPenanggungJawab')
        .notEmpty()
        .withMessage('nama penanggung jawab tidak boleh kosong')
        .isIn(['Suami', 'Istri', 'Bapak', 'Ibu', 'Saudara', 'Saudari', 'Anak', 'Kerabat'])
        .withMessage('pilihan hubungan penanggung jawab tidak ada'),
    body('nomorTeleponPenanggungJawab')
        .notEmpty()
        .withMessage('tujuan berobat tidak boleh kosong'),
    body('alamatPenanggungJawab')
        .notEmpty()
        .withMessage('nomor telepon penanggung jawab tidak boleh kosong'),
    body('kotaPenanggungJawab')
        .notEmpty()
        .withMessage('kota penanggung jawab tidak boleh kosong'),
    body('kecamatanPenanggungJawab')
        .notEmpty()
        .withMessage('kecamatan penanggung jawab tidak boleh kosong'),
    body('kelurahanPenanggungJawab')
        .notEmpty()
        .withMessage('kelurahan penanggung jawab tidak boleh kosong'),
    body('rtPenanggungJawab')
        .notEmpty()
        .withMessage('rt penanggung jawab tidak boleh kosong'),
    body('rwPenanggungJawab')
        .notEmpty()
        .withMessage('rw penanggung jawab tidak boleh kosong'),
    body('tekananDarah')
        .notEmpty()
        .withMessage('tekanan darah tidak boleh kosong'),
    body('denyutNadi')
        .notEmpty()
        .withMessage('denyut nadi tidak boleh kosong'),
    body('RR')
        .notEmpty()
        .withMessage('respiratory rate tidak boleh kosong'),
    body('suhuBadan')
        .notEmpty()
        .withMessage('suhu badan tidak boleh kosong'),
    body('skalaKesadaran')
        .notEmpty()
        .withMessage('skala kesadaran tidak boleh kosong'),
    body('tinggiBadan')
        .notEmpty()
        .withMessage('tinggi badan tidak boleh kosong'),
    body('beratBadan')
        .notEmpty()
        .withMessage('berat badan tidak boleh kosong'),
    body('golonganDarah')
        .notEmpty()
        .withMessage('golongan darah tidak boleh kosong'),
    body('statusResiko')
        .notEmpty()
        .withMessage('status resiko tidak boleh kosong')
        .isIn(['Tinggi', 'Sedang', 'Rendah'])
        .withMessage('pilihan status resiko pasien tidak ada'),
    body('infeksiMenular')
        .notEmpty()
        .withMessage('infeksi menular tidak boleh kosong'),
    body('kronis')
        .notEmpty()
        .withMessage('status kronis tidak boleh kosong'),
    body('penyakitMenular')
        .notEmpty()
        .withMessage('penyakit menular tidak boleh kosong'),
    body('statusPsikologi')
        .notEmpty()
        .withMessage('status psikologi tidak boleh kosong'),
    body('statusEmosional')
        .notEmpty()
        .withMessage('status emosional tidak boleh kosong'),
    body('statusKesadaran')
        .notEmpty()
        .withMessage('status kesadaran tidak boleh kosong'),
    body('statusPerilaku')
        .notEmpty()
        .withMessage('status perilaku tidak boleh kosong'),
    body('statusKognitif')
        .notEmpty()
        .withMessage('status kognitif tidak boleh kosong'),
    body('statusSosial')
        .notEmpty()
        .withMessage('status sosial boleh kosong'),
    body('hubunganDenganKeluarga')
        .notEmpty()
        .withMessage('hubungan dengan keluarga tidak boleh kosong'),
    body('tinggalBersama')
        .notEmpty()
        .withMessage('status tinggal tidak boleh kosong'),
    body('statusEkonomi')
        .notEmpty()
        .withMessage('status ekonomi tidak boleh kosong'),
    body('bahasa')
        .notEmpty()
        .withMessage('bahasa tidak boleh kosong'),
    body('keluhanPenyakit')
        .notEmpty()
        .withMessage('keluhan penyakit tidak boleh kosong'),
    body('riwayatPenyakit')
        .notEmpty()
        .withMessage('riwayat penyakit tidak boleh kosong'),
    body('penyakitTurunan')
        .notEmpty()
        .withMessage('penyakit turunan tidak boleh kosong'),
    body('riwayatOperasi')
        .notEmpty()
        .withMessage('riwayat operasi tidak boleh kosong'),
    body('alergi')
        .notEmpty()
        .withMessage('alergi tidak boleh kosong'),
    body('penyakitDiderita')
        .notEmpty()
        .withMessage('penyakit diderita tidak boleh kosong'),
    body('pengobatanBerjalan')
        .notEmpty()
        .withMessage('status pengobatan tidak boleh kosong'),
    body('kondisiBerjalan')
        .notEmpty()
        .withMessage('kondisi saat jalan tidak boleh kosong'),
    body('menggunakanAlatBantu')
        .notEmpty()
        .withMessage('penggunaan alat bantu tidak boleh kosong'),
    body('penurunanBeratBadan')
        .notEmpty()
        .withMessage('penurunan berat badan tidak boleh kosong'),
    body('penurunanNafsuMakan')
        .notEmpty()
        .withMessage('penurunan nafsu makan tidak boleh kosong')])