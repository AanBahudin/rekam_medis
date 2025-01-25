import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import customFetch from '../../utils/customFetch'
import { AdminDokterCard } from '../../components'
import { useAdminContext } from './AdminLayout'
import { X } from 'lucide-react'

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
      <article className={`transition-transform duration-200 ease-in-out transform ${showDetail ? 'translate-x-0' : 'translate-x-full'} h-full w-[30%] flex flex-col absolute z-20 right-0 p-4 rounded-xl bg-slate-100  `}>
        <X onClick={() => setShowDetail(false)} />
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