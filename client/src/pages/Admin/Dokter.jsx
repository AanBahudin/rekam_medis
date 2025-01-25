import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import customFetch from '../../utils/customFetch'
import { AdminDokterCard, DetailDokterDataContainer } from '../../components'
import { useAdminContext } from './AdminLayout'
import { AtSign, Phone, X } from 'lucide-react'
import { man } from '../../assets/images'

export const loader = async() => {
  try {
    const {data} = await customFetch.get('/dokter');
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const Dokter = () => {

  const { dokter } = useLoaderData()
  const { showDetail, setShowDetail } = useAdminContext()
  

  return (
    <section className='w-full h-full'>

      <article className={`transition-transform duration-200 ease-in-out transform ${showDetail ? 'translate-x-0' : 'translate-x-full'} h-full w-[30%] flex flex-col items-center absolute z-20 right-0 p-6 rounded-xl bg-slate-100  `}>
        {/* CLOSE BUTTON AND TITLE */}
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-slate-700 font-medium text-lg'>Profil Dokter</h1>
          <X onClick={() => setShowDetail(false)} />
        </div>

        {/* CONTENT */}
        <div className='w-full flex flex-col items-center justify-start mt-10'>
          <img src={man} alt="avatar" className='w-28 h-28 rounded-full' />
          <h1 className='mt-4 text-2xl'>Aan Bahudin</h1>
          <p>Spesialis Kandungan</p>

          <div className='w-full flex justify-evenly items-center mt-4'>
            <p className='flex items-center gap-x-1 text-xs text-slate-500'>
              <AtSign className='stroke-slate-900 w-3 h-3' />
              {/* {email} */}
              aanbahudin@gmail.com
            </p>

            <p className='flex items-center gap-x-1 text-xs text-slate-500'>
              <Phone className='stroke-slate-900 w-3 h-3' />
              {/* {nomorTelepon || 'Belum ada '} */}
              0812 3498 0912
            </p>
          </div>
          
          <div className='w-full mt-20 flex flex-col gap-y-8'>
            <DetailDokterDataContainer label='Jenis Kelamin' value='Pria' />
            <DetailDokterDataContainer label='Tempat Tanggal Lahir' value='10 Desember 1990' />
            <DetailDokterDataContainer label='Jabatan' value='Dokter Spesialis' />
            <DetailDokterDataContainer label='Status' value='Cuti' />
          </div>
          
        </div>
      </article>

      <section className='w-full relative h-full  no-scrollbar overflow-y-auto p-10'>
        <h1 className='text-slate-700 font-semibold text-3xl'>Daftar Semua Tenaga Kesehatan</h1>
        <p className='text-slate-600 mt-1'>Informasi lengkap tentang dokter dan spesialisasi mereka.</p>

        <article className='w-full mt-10 flex flex-wrap items-center justify-start gap-4'>
          {dokter.map((item, index) => {
            return <AdminDokterCard key={index} {...item} />
          })}
        </article>
      </section> 
    </section>
  )
}

export default Dokter