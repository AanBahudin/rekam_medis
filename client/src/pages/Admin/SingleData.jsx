import React from 'react'
import { Plus, Edit, Trash } from 'lucide-react'
import { Data } from '../../components'
import customFetch from '../../utils/customFetch'
import { Form, redirect, useLoaderData } from 'react-router'
import { toast } from 'react-toastify'

export const action = async({request}) => {

  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.delete(`/medis/${data.id}`)
    toast.success('Data dihapus')
    return redirect('/admin/all-data')
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get(`/medis/${params.id}`)
    return data;
  } catch (error) {
    return error
  }
}

const SingleData = () => {

  const { rekamMedis } = useLoaderData()
  const formattedDate = rekamMedis.tanggalLahir.split('T')[0];

  return (
    <div className='w-full flex flex-col items-start justify-start mb-6'>

        <div className='flex gap-x-4 mr-auto w-fit mb-4 justify-end items-center'>
          <button className='text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-blueCard px-4 py-2 rounded-md'> <Plus size={15} className='stroke-greyPrimary' /> Kunjungan </button>
          <button className='text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-blueCard px-4 py-2 rounded-md'> <Edit size={15} className='stroke-greyPrimary' /> Pasien </button>
          <Form method='POST'>
            <input type="hidden" name='id' value={rekamMedis._id} />
            <button className='text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-redCard px-4 py-2 rounded-md'> <Trash size={15} className='stroke-greyPrimary' /> Hapus </button>
          </Form>
        </div>

      <section className="w-full flex flex-col items-start justify-start bg-white rounded-md mb-6">

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-lightGrey rounded-md px-4 w-fit py-2'>Identitas Pribadi</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
            <Data label="no rekam medis" value={rekamMedis._id} />
            <Data label="nama lengkap" value={rekamMedis.nama} />
            <Data label="tanggal lahir" value={formattedDate} />
            <Data label="usia" value={rekamMedis.usia} />
            <Data label="jenis kelamin" value={rekamMedis.jenisKelamin} />
            <Data label="nomor induk keluarga" value={rekamMedis.nik} />
            <Data label="nomor telepon" value={rekamMedis.nomorTelepon || '-'} />
            <Data label="status perkawinan" value={rekamMedis.statusPernikahan} />
            <Data label="kebangsaan" value={rekamMedis.kebangsaan} />
            <Data label="agama" value={rekamMedis.agama} />
            <Data label="alamat pasien" value={rekamMedis.alamat} />
            <Data label="kota" value={rekamMedis.kota} />
            <Data label="kecamatan" value={rekamMedis.kecamatan} />
            <Data label="kelurahan" value={rekamMedis.kelurahan} />
            <Data label="rt" value={rekamMedis.rt} />
            <Data label="rw" value={rekamMedis.rw} />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Informasi Kontak</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
            <Data label="nama penanggung jawab" value={rekamMedis.namaPenanggungJawab} />
            <Data label="hubungan dengan pasien" value={rekamMedis.hubunganPenanggungJawab} />
            <Data label="nomor telepon" value={rekamMedis.nomorTeleponPenanggungJawab} />
            <Data label="alamat penanggung jawab" value={rekamMedis.alamatPenanggungJawab} />
            <Data label="kota" value={rekamMedis.kotaPenanggungJawab} />
            <Data label="kecamatan" value={rekamMedis.kecamatanPenanggungJawab} />
            <Data label="kelurahan" value={rekamMedis.kelurahanPenanggungJawab} />
            <Data label="rt" value={rekamMedis.rtPenanggungJawab} />
            <Data label="rw" value={rekamMedis.rwPenanggungJawab} />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Keadaan Umum</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
            <Data label="tekanan darah" value={rekamMedis.tekananDarah} />
            <Data label="denyut nadi" value={rekamMedis.denyutNadi} />
            <Data label="rate pernapasan" value={rekamMedis.RR} />
            <Data label="suhu badan" value={rekamMedis.suhuBadan + ' Celcius'} />
            <Data label="tingkat kesadaran" value={rekamMedis.skalaKesadaran} />
            <Data label="tinggi badan" value={rekamMedis.tinggiBadan + ' Cm'} />
            <Data label="berat badan" value={rekamMedis.beratBadan + ' Kilogram'} />
            <Data label="golongan darah" value={rekamMedis.golonganDarah} />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Keadaan Psikologi dan Psikososial</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
            <Data label="status psikologis" value={rekamMedis.statusPsikologi} />
            <Data label="status emosional" value={rekamMedis.statusEmosional} />
            <Data label="status kesadaran" value={rekamMedis.statusKesadaran} />
            <Data label="status perilaku" value={rekamMedis.statusPerilaku} />
            <Data label="status kognitif" value={rekamMedis.statusKognitif} />
            <Data label="status sosial" value={rekamMedis.statusSosial} />
            <Data label="hubungan dengan keluarga" value={rekamMedis.hubunganDenganKeluarga} />
            <Data label="tinggal bersama" value={rekamMedis.tinggalBersama} />
            <Data label="status ekonomi" value={rekamMedis.statusEkonomi} />
            <Data label="bahasa sehari hari" value={rekamMedis.bahasa} />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Riwayat Kesehatan</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
            <Data label="keluhan penyakit" value={rekamMedis.keluhanPenyakit} dataType='complex' />
            <Data label="riwayat penyakit" value={rekamMedis.riwayatPenyakit} dataType='complex'  />
            <Data label="riwayat penyakit turunan" value={rekamMedis.penyakitTurunan} dataType='complex'  />
            <Data label="riwayat operasi" value={rekamMedis.riwayatOperasi} dataType='complex'  />
            <Data label="alergi" value={rekamMedis.alergi} dataType='complex'  />
            <Data label="penyakit yang sedang diderita" value={rekamMedis.penyakitDiderita} dataType='complex'  />
            <Data label="riwayat pengobatan sedang berjalan" value={rekamMedis.pengobatanBerjalan} dataType='complex'  />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Penilaian Resiko Jatuh dan Informasi Gizi</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
            <Data label="jalan tidak seimbang" value={rekamMedis.kondisiBerjalan} />
            <Data label="penggunaan alat bantu" value={rekamMedis.menggunakanAlatBantu} />
            <Data label="penurunan berat badan 6 bulan terakhir" value={rekamMedis.penurunanBeratBadan} />
            <Data label="penguranan nafsu makan" value={rekamMedis.penurunanNafsuMakan} />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Informasi Tambahan</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
            <Data label="Informasi Tambahan 1" value={rekamMedis.tambahanPertama || 'Tidak ada'} dataType='complex' />
            <Data label="Informasi Tambahan 2" value={rekamMedis.tambahanKedua || 'Tidak ada'} dataType='complex'  />
          </div>
        </div>

        <div className='w-full p-6'>
          <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-lightGrey rounded-md px-4 w-fit py-2'>Administratif</h5>
          <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
            <Data label="resiko pasien" value="Tinggi" bg='bg-redCard' />
            <Data label="resiko infeksi menular" value={rekamMedis.statusResiko} bg='bg-greenCard' />
            <Data label="resiko penyakit kronis" value={rekamMedis.kronis} bg='bg-yellowCard' />
            <Data label="resiko penyakit menular" value={rekamMedis.penyakitMenular} bg='bg-yellowCard' />
            <Data label="tujuan berobat" value={rekamMedis.tujuanBerobat} />
            <Data label="pemeriksaan lanjutan" value={rekamMedis.pemeriksaanLanjutan} />
            <Data label="identitas pemeriksa" value={rekamMedis.pemeriksa} />
            <Data label="Status Penanganan" value={rekamMedis.status || 'Belum Ditangani'} />
          </div>
        </div>

        </section>
    </div>
    
  )
}

export default SingleData