import mongoose from 'mongoose'

const PasienSchema = new mongoose.Schema({
    nama: String,
    tanggalLahir: Date,
    usia: Number,
    jenisKelamin: {
        type: String,
        enum: ['Pria', 'Wanita']
    },
    nik: Number,
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
        enum: ['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']
    },
    alamat: String,
    kota: String,
    kecamatan: String,
    kelurahan: String,
    rt: String,
    rw: String,
    pemeriksa: String,
    status: {
        type: String,
        enum: ['Ditangani', 'Proses', 'Belum Ditangani']
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
    informasiKontak: {
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
        rwPenanggungJawab: String
    },
    keadaanUmum: {
        tekananDarah: String,
        denyutNadi: Number,
        RR: String,
        suhuBadan: Number,
        skalaKesadaran: Number,
        tinggiBadan: Number,
        beratBadan: Number,
        golonganDarah: {
            type: String,
            enum: ['A', 'A+', 'A-', 'AB', 'AB+','AB-', 'B', 'B+', 'B-', 'O', 'O+', 'O-']
        }
    },
    resiko: {
        statusResiko: {
            type: String,
            enum: ['Tinggi', 'Sedang', 'Rendah']
        },
        infeksiMenular: {
            type: String,
            enum: ['Tinggi', 'Sedang', 'Rendah']
        },
        kronis: {
            type: String,
            enum: ['Tinggi', 'Sedang', 'Rendah']
        },
        penyakitMenular: {
            type: String,
            enum: ['Tinggi', 'Sedang', 'Rendah']
        }
    },
    psikologi: {
        statusPsikologi: {
            type: String,
            enum: ['stabil', 'cemas', 'depresi', 'agitasi', 'euforia']
        },
        statusEmosional: {
            type: String,
            enum: ['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut']
        },
        statusKesadaran: {
            type: String,
            enum: ['sadar penuh', 'linglung', 'delirium', 'tidak sadar']
        },
        statusPerilaku: {
            type: String,
            enum: ['kooperatif', 'menarik diri', 'agresif', 'pasif']
        },
        statusKognitif: {
            type: String,
            enum: ['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi']
        },
        statusSosial: {
            type: String,
            enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']
        },
        hubunganDenganKeluarga: {
            type: String,
            enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']
        },
        tinggalBersama: {
            type: String,
            enum: ['orang tua', 'kerabat', 'mengontrak/menumpang', 'sendirian']
        },
        statusEkonomi: {
            type: String,
            enum: ['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']
        },
        bahasa: String
    },
    riwayatKesehatan: {
        keluhanPenyakit: String,
        riwayatPenyakit: String,
        penyakitTurunan: String,
        riwayatOperasi: String,
        alergi: String,
        penyakitDiderita: String,
        pengobatanBerjalaln: String
    },
    resikoJatuhdanGizi: {
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
        }
    },
    additional: {
        tambahanPertama: String,
        tambahanKedua: String
    },
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
})

export default mongoose.model('Pasien', UserSchema);