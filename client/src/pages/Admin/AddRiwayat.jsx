import React, { useState } from 'react'
import { Form, redirect, useLoaderData } from 'react-router'
import { CustomFormInput } from '../../components'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async({ params }) => {
  try {
    const {data} = await customFetch.get(`/medis/${params.id}`)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

export const action = async({request, params}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('', data)
    toast.success('Kunjungan ditambahkan')
    return redirect(`/admin/all-data/${params.id}`)
  } catch (error) {
    console.log(error);
    return error;
  }
}

const AddRiwayat = () => {

  const [activeTab, setActiveTab] = useState('first')
  const { rekamMedis : data } = useLoaderData()
  console.log(data);
  

  return (
    <Form method='POST' className='w-full flex flex-col items-start justify-start mb-6'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-3xl font-semibold text-slate-700'>Tambah Kunjungan Pasien</h1>
        <button className='bg-blueCard/80 hover:bg-blueCard duration-200 ease-in-out cursor-default px-5 py-2 rounded-md text-xs'>Tambah Kunjungan</button>
      </div>
      <p className='text-slate-600 mt-2'>Catat kunjungan baru pasien dengan detail seperti tanggal, tujuan, keluhan, dan tindakan medis untuk melengkapi riwayat kesehatan mereka.</p>

      {/* TABS */}
      <div className='w-[60%] mx-auto flex items-center justify-center mt-10'>

        <article onClick={() => setActiveTab('first')} className={`w-[33%] flex-1 border-b-[2px] ${activeTab === 'first' ? 'border-slate-400/60' : 'border-transparent'} cursor-default duration-200 ease-in-out`}>
          <h1 className='font-medium text-slate-600 py-2 text-center'>Identitas</h1>
        </article>

        <article onClick={() => setActiveTab('second')} className={`w-[33%] flex-1 border-b-[2px] ${activeTab === 'second' ? 'border-slate-400/60' : 'border-transparent'} cursor-default duration-200 ease-in-out`}>
          <h1 className='font-medium text-slate-600 py-2 text-center'>Kondisi</h1>
        </article>

        <article onClick={() => setActiveTab('third')} className={`w-[33%] flex-1 border-b-[2px] ${activeTab === 'third' ? 'border-slate-400/60' : 'border-transparent'} cursor-default duration-200 ease-in-out  `}>
          <h1 className='font-medium text-slate-600 py-2 text-center'>Perihal</h1>
        </article>
      </div>

      {/* MAIN CONTAINER */}
      <div className='my-10 flex w-full p-4'>

        {/* FIRST TAB */}
        <article className={`${activeTab !== 'first' ? 'hidden' : 'grid grid-cols-4 gap-x-4  gap-y-6'}  w-full`}>
          <CustomFormInput label='nama lengkap *' placeholder='nama pasien' isFirstItem={true} name='nama' isRequired={true} defaultValue={data.nama} />
          <CustomFormInput label='tanggal lahir *' name='tanggalLahir' isRequired={true} type='date' defaultValue={data.tanggalLahir.split('T')[0]} />
          <CustomFormInput label='usia *' placeholder='usia pasien' name='usia' isRequired={true} type='number' defaultValue={data.usia} />
          <CustomFormInput label='jenis kelamin *' name='jenisKelamin' isRequired={true} inputType='select' list={['Pria', 'Wanita']}  defaultValue={data.jenisKelamin}/>
          <CustomFormInput label='nomor induk keluarga *' placeholder='Nomor Induk Pasien' name='nik' isRequired={true} type='number'  defaultValue={data.nik}/>
          <CustomFormInput label='Nomor telepon *' placeholder='0823 2402 2150' name='nomorTelepon' isRequired={true}  type='number'  defaultValue={data.nomorTelepon}/>
          <CustomFormInput label='status perkawinan *' name='statusPernikahan' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']}  defaultValue={data.statusPernikahan}/>
          <CustomFormInput label='Kebangsaan *' placeholder='kebangsaan' name='kebangsaan' isRequired={true}  defaultValue={data.kebangsaan}/>
          <CustomFormInput label='Agama *' name='agama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']}  defaultValue={data.agama}/>
          <CustomFormInput label='alamat pasien *' placeholder='Alamat Pasien' name='alamat' isRequired={true}  defaultValue={data.alamat}/>
          <CustomFormInput label='kota *' placeholder='kota ' name='kota' isRequired={true}  defaultValue={data.kota}/>
          <CustomFormInput label='kecamatan *' placeholder='kecamatan' name='kecamatan' isRequired={true}  defaultValue={data.kecamatan}/>
          <CustomFormInput label='kelurahan *' placeholder='kelurahan' name='kelurahan' isRequired={true}  defaultValue={data.kelurahan}/>
          <CustomFormInput label='RT *' placeholder='nomor RT' name='rt' isRequired={true}  defaultValue={data.rt}/>
          <CustomFormInput label='RW *' placeholder='nomor RW' name='rw' isRequired={true}  defaultValue={data.rw}/>
        </article>

        {/* SECOND TAB */}
        <article className={`${activeTab !== 'second' ? 'hidden' : 'grid grid-cols-4 gap-x-4  gap-y-6'}  w-full`}>
          <CustomFormInput label='tekanan darah' placeholder='mmHg' name='tekananDarah' isRequired={true}/>
          <CustomFormInput label='denyut nadi' placeholder='per menit' name='denyutNadi' isRequired={true} type='number'/>
          <CustomFormInput label='RR (Respiratory Rate)' placeholder='per menit' name='RR' isRequired={true} type='number'/>
          <CustomFormInput label='suhu badan (C)' placeholder='celcius' name='suhuBadan' type='number' isRequired={true} />
          <CustomFormInput label='tinggi badan (cm)' placeholder='tinggi pasien' name='tinggiBadan' type='number' isRequired={true}  defaultValue={data.tinggiBadan}/>
          <CustomFormInput label='berat badan (kg)' placeholder='berat pasien' name='beratBadan' type='number' isRequired={true}  defaultValue={data.beratBadan}/>
        </article>

        {/* THRID TAB */}
        <article className={`${activeTab !== 'third' ? 'hidden' : null}  w-full`}>
          <div className='w-full col-span-4 grid grid-cols-2 gap-x-4'>
            <CustomFormInput label='tujuan kunjungan' name='perihalKunjungan' isRequired={true} inputType='select' list={['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap', 'Pemeriksaan Laboratorium', 'Pemeriksaan Radiologi', 'Pengambilan Obat']} />
            <CustomFormInput label='Resiko pasien *' name='statusResiko' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah']} />
          </div>

          <div className='w-full grid grid-cols-3 gap-x-4 mt-4'>
            <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='pengobatan berjalan' name='pengobatanBerjalan' isRequired={true} inputType='textarea' defaultValue={data.pengobatanBerjalan}/>
            <CustomFormInput label='keluhan penyakit' placeholder='keluhan penyakit' name='keluhanPenyakit' isRequired={true} inputType='textarea' />
            <CustomFormInput label='riwayat penyakit' placeholder='riwayat penyakit' name='riwayatPenyakit' isRequired={true} inputType='textarea' />
          </div>
        </article>


      </div>
    </Form>

  )
}

export default AddRiwayat