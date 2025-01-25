import React from 'react'
import customFetch from '../../utils/customFetch'
import {useLoaderData} from 'react-router'
import { man } from '../../assets/images'

export const loader = async({ params }) => {
  try {
    const {data} = await customFetch.get(`/dokter/${params.id}`)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const DetailDokter = () => {

  const { dokter } = useLoaderData()
  return (
    <section className='w-full h-full flex flex-col'>
  
      {/* BREADCRUMBS */}
      <article className='w-full flex items-center gap-x-4'>
        <p className='text-slate-500 font-medium text-lg'>Dokter</p>
        <p className='text-slate-500 font-medium text-lg'>/</p>
        <p className='text-slate-900 font-medium text-lg'>{dokter.nama}</p>
      </article>

      {/* MAIN CONTAINER */}
      <article className='w-full rounded-xl h-full mt-6 shadow-sm'>
        
        {/* COVER BACKGROUND */}
        <div className='w-full h-[30%] bg-slate-500 rounded-xl'></div>

        <div className='w-full flex px-4 gap-x-6'>
          <img src={man} alt="avatar" className='w-28 h-28 -mt-16 rounded-full' />
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold text-slate-700'>{dokter.nama}</h1>
            <button className='bg-blueCard rounded-md text-xs py-2 text-slate-500'>Perbaharui</button>

          </div>
        </div> 

      </article> 
    </section>
  )
}

export default DetailDokter