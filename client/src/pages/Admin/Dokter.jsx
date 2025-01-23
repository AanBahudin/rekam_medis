import React from 'react'
import { Link } from 'react-router'
import { man } from '../../assets/images'


export const loader = async() => {
  return null
}

const Dokter = () => {
  return (
    <section className='w-fullh-full  no-scrollbars'>
      <h1 className='text-slate-700 font-semibold text-3xl'>Daftar Semua Tenaga Kesehatan</h1>
      <p className='text-slate-600 mt-1'>Informasi lengkap tentang dokter dan spesialisasi mereka.</p>

      <article className='w-full mt-10'>
        <div className='w-[350px] h-[170px] bg-slate-100/70 rounded-xl shadow-sm hover:shadow-lg duration-200 ease-in-out p-4 flex flex-col items-center justify-between border-t-4 border-blueCard/80'>
          

            {/* <Link to={`/admin/dokter/test`} className='text-xs rounded-md py-2 text- w-full hover:bg-blueCard cursor-default bg-blueCard/80 font-medium text-slate-600 lowercase text-center'>Lihat Detail</Link> */}
        </div>
      </article>
    </section>
  )
}

export default Dokter