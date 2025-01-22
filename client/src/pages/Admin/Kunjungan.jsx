import React, { useState } from 'react'
import { Data } from '../../components'
import { useLoaderData } from 'react-router'
import customFetch from '../../utils/customFetch'

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get(`/medis/${params.id}`)

    const newData = data.rekamMedis.riwayatKunjungan.find((item) => {
      return item._id === params.riwayat
    })
    return { data : data.rekamMedis, riwayat: newData };
  } catch (error) {
    console.log(error);
    return error
  }
}

const Kunjungan = () => {

  const [activeTab, setActiveTab] = useState('first')
  const {data, riwayat} = useLoaderData()

  return (
    <section className='w-full flex flex-col items-start justify-start mb-6'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-3xl font-semibold text-slate-700'>Detail Kunjungan Pasien</h1>
      </div>
      <p className='text-slate-600 mt-2'>Informasi detail kunjungan pasien {data.nama}.</p>

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
          <Data label='nama lengkap *' placeholder='nama pasien' isFirstItem={true} name='nama' isRequired={true} value={data.nama} />
          <Data label='tanggal lahir *' name='tanggalLahir' isRequired={true} type='date' value={data.tanggalLahir.split('T')[0]} />
          <Data label='usia *' placeholder='usia pasien' name='usia' isRequired={true} type='number' value={data.usia} />
          <Data label='jenis kelamin *' name='jenisKelamin' isRequired={true} inputType='select' list={['Pria', 'Wanita']}  value={data.jenisKelamin}/>
          <Data label='nomor induk keluarga *' placeholder='Nomor Induk Pasien' name='nik' isRequired={true} type='number'  value={data.nik}/>
          <Data label='Nomor telepon *' placeholder='0823 2402 2150' name='nomorTelepon' isRequired={true}  type='number'  value={data.nomorTelepon}/>
          <Data label='status perkawinan *' name='statusPernikahan' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']}  value={data.statusPernikahan}/>
          <Data label='Kebangsaan *' placeholder='kebangsaan' name='kebangsaan' isRequired={true}  value={data.kebangsaan}/>
          <Data label='Agama *' name='agama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']}  value={data.agama}/>
          <Data label='alamat pasien *' placeholder='Alamat Pasien' name='alamat' isRequired={true}  value={data.alamat}/>
          <Data label='kota *' placeholder='kota ' name='kota' isRequired={true}  value={data.kota}/>
          <Data label='kecamatan *' placeholder='kecamatan' name='kecamatan' isRequired={true}  value={data.kecamatan}/>
          <Data label='kelurahan *' placeholder='kelurahan' name='kelurahan' isRequired={true}  value={data.kelurahan}/>
          <Data label='RT *' placeholder='nomor RT' name='rt' isRequired={true}  value={data.rt}/>
          <Data label='RW *' placeholder='nomor RW' name='rw' isRequired={true}  value={data.rw}/>
        </article>

        {/* SECOND TAB */}
        <article className={`${activeTab !== 'second' ? 'hidden' : 'grid grid-cols-4 gap-x-4  gap-y-6'}  w-full`}>
          <Data label='tekanan darah' value={data.tekananDarah}/>
          <Data label='denyut nadi' value={data.denyutNadi}/>
          <Data label='RR (Respiratory Rate)' value={data.RR} />
          <Data label='suhu badan (C)' value={data.suhuBadan}/>
          <Data label='tinggi badan (cm)' value={data.tinggiBadan}/>
          <Data label='berat badan (kg)'  value={data.beratBadan}/>
        </article>

        {/* THRID TAB */}
        <article className={`${activeTab !== 'third' ? 'hidden' : null}  w-full`}>
          <div className='w-full col-span-4 grid grid-cols-2 gap-x-4'>
            <Data label='tujuan kunjungan' value={riwayat.perihalKunjungan} />
            <Data label='Resiko pasien *' value={riwayat.statusResiko} />
          </div>

          <div className='w-full grid grid-cols-3 gap-x-4 mt-4'>
            <Data label='riwayat pengobatan sedang berjalan' dataType='complex' value={riwayat.pengobatanBerjalan}/>
            <Data label='keluhan penyakit' dataType='complex' value={riwayat.keluhanPenyakit} />
            <Data label='riwayat penyakit' dataType='complex' value={riwayat.riwayatPenyakit} />
          </div>
        </article>


      </div>
    </section>
  )
}

export default Kunjungan