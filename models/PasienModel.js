import mongoose from 'mongoose'

const PasienSchema = new mongoose.Schema({
    nama: {
        type: String,
        default: 'Tanpa nama'
    },
    tanggalLahir: Date,
    usia: Number,
    jenisKelamin: {
        type: String,
        enum: ['Pria', 'Wanita'],
        default: 'Pria'
    },
    nik: {
        type: String,
        unique: true
    },
    statusPernikahan: {
        type: String,
        enum: ['Menikah', 'Belum Menikah', 'Cerai']
    },
    kebangsaan: {
        type: String,
        default: 'Indonesia'
    },
    agama: {
        type: String,
        enum: ['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu'],
        default: 'Islam'
    },
    alamat: String,
    kota: String,
    kecamatan: String,
    kelurahan: String,
    rt: String,
    rw: String,
    pemeriksa: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    status: {
        type: String,
        enum: ['Ditangani', 'Proses', 'Belum Ditangani'],
        default: 'Belum Ditangani'
    },
    nomorTelepon: {
        type: String
    },
    kontrol: {
        type: String,
        enum: ['Ya', 'Tidak']
    },
    tujuanBerobat: {
        type: String,
        enum: ['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap']
    },
    pemeriksaanLanjutan: {
        type: String,
        enum: ['Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']
    },
    namaPenanggungJawab: String,
    hubunganPenanggungJawab: {
        type: String,
        enum: ['Suami', 'Istri', 'Saudara', 'Saudari', 'Anak', 'Kerabat']
    },
    nomorTeleponPenanggungJawab: String,
    alamatPenanggungJawab: String,
    kotaPenanggungJawab: String,
    kecamatanPenanggungJawab: String,
    kelurahanPenanggungJawab: String,
    rtPenanggungJawab: String,
    rwPenanggungJawab: String,
    tekananDarah: String,
    denyutNadi: Number,
    RR: String,
    suhuBadan: Number,
    skalaKesadaran: Number,
    tinggiBadan: Number,
    beratBadan: Number,
    golonganDarah: {
        type: String,
        enum: ['A', 'A+', 'A-', 'AB', 'AB+','AB-', 'B', 'B+', 'B-', 'O', 'O+', 'O-'],
        default: 'A'
    },
    statusResiko: {
        type: String,
        enum: ['Tinggi', 'Sedang', 'Rendah'],
        default: 'Rendah'
    },
    infeksiMenular: {
        type: String,
        enum: ['Tinggi', 'Sedang', 'Rendah'],
        default: 'Rendah'
    },
    kronis: {
        type: String,
        enum: ['Tinggi', 'Sedang', 'Rendah'],
        default: 'Rendah'
    },
    penyakitMenular: {
        type: String,
        enum: ['Tinggi', 'Sedang', 'Rendah'],
        default: 'Rendah'
    },
    statusPsikologi: {
        type: String,
        enum: ['stabil', 'cemas', 'depresi', 'agitasi', 'euforia'],
        default: 'stabil'
    },
    statusEmosional: {
        type: String,
        enum: ['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut'],
        default: 'tenang'
    },
    statusKesadaran: {
        type: String,
        enum: ['sadar penuh', 'linglung', 'delirium', 'tidak sadar'],
        default: 'sadar penuh'
    },
    statusPerilaku: {
        type: String,
        enum: ['kooperatif', 'menarik diri', 'agresif', 'pasif'],
        default: 'kooperatif'
    },
    statusKognitif: {
        type: String,
        enum: ['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi'],
        default: 'normal'
    },
    statusSosial: {
        type: String,
        enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik'],
        default: 'sangat baik'
    },
    hubunganDenganKeluarga: {
        type: String,
        enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik'],
        default: 'sangat baik'
    },
    tinggalBersama: {
        type: String,
        enum: ['orang tua', 'kerabat', 'mengontrak/menumpang', 'sendirian'],
        default: 'orang tua'
    },
    statusEkonomi: {
        type: String,
        enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik'],
        default: 'sangat baik'
    },
    bahasa: String,
    keluhanPenyakit: String,
    riwayatPenyakit: String,
    penyakitTurunan: String,
    riwayatOperasi: String,
    alergi: String,
    penyakitDiderita: String,
    pengobatanBerjalan: String,
    kondisiBerjalan: {
        type: String,
        enum: ['ya', 'kadang', 'tidak']
    },
    menggunakanAlatBantu: {
        type: String,
        enum: ['ya', 'kadang', 'tidak']
    },
    penurunanBeratBadan: {
        type: String,
        enum: ['ya', 'kadang', 'tidak']
    },
    penurunanNafsuMakan: {
        type: String,
        enum: ['ya', 'kadang', 'tidak']
    },
    tambahanPertama: String,
    tambahanKedua: String,
    riwayatPemeriksaan: [
        {
            idRiwayat: {
                type: mongoose.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId()
            },
            tanggalPemeriksaan: Date,
            subjektif: String,
            objektif: String,
            assessment: String,
            planning: String,
            tindakan: {
                type: String,
                enum: ['Pengobatan secara berkala', 'Kontrol']
            },
            catatan: String
        }
    ],
    riwayatKunjungan: [
        {
            idRiwayatKunjungan: {
                type: mongoose.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId()
            },
            tanggalKunjungan: Date,
            perihalKunjungan: {
                type: String,
                enum: ['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap', 'Pemeriksaan Laboratorium', 'Pemeriksaan Radiologi', 'Pengambilan Obat']
            }
            
        }
    ]
}, { timestamps: true })

export default mongoose.model('Pasien', PasienSchema);