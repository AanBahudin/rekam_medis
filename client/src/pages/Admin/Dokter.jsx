import React from 'react'
import { useLoaderData } from 'react-router'
import customFetch from '../../utils/customFetch'
import { AdminDokterCard } from '../../components'

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
  

  return (
    <section className='w-fullh-full  no-scrollbar'>
      <h1 className='text-slate-700 font-semibold text-3xl'>Daftar Semua Tenaga Kesehatan</h1>
      <p className='text-slate-600 mt-1'>Informasi lengkap tentang dokter dan spesialisasi mereka.</p>

      <article className='w-full mt-10 flex flex-wrap items-center justify-start gap-4'>
        {dokter.map((item, index) => {
          return <AdminDokterCard key={index} {...item} />
        })}
      </article>
    </section>
  )
}

export default Dokter