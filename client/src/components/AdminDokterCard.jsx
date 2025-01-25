import React from 'react'
import { man } from '../assets/images'
import { AtSign, Phone } from 'lucide-react'


const AdminDokterCard = ({ nama, spesialisasi, email, nomorTelepon, photo }) => {
  return (
    <div className='w-[350px] h-[150px] bg-transparent  rounded-xl shadow-sm hover:shadow-lg duration-200 ease-in-out p-4 flex justify-start border-[2px] gap-x-4 border-slate-400'>

      <div className='flex flex-col items-center justify-center h-full relative'>
        <img src={photo || man} className='w-16 h-16'/>
        <p className='text-sm bg-blueCard/70 px-4 mt-2 text-slate-700 py-1 rounded-lg font-medium uppercase'>Dokter</p>
      </div>

      <div className='flex-1 flex flex-col  justify-start'>
        <h1 className='text-xl font-semibold text-slate-700'>{nama}</h1>
        <p className='text-slate-600 text-sm mb-7'>{spesialisasi}</p>

        <p className='flex items-center gap-x-1 text-xs text-slate-500'>
          <AtSign className='stroke-slate-900 w-3 h-3' />
          {email}
        </p>

        <p className='flex items-center gap-x-1 text-xs text-slate-500'>
          <Phone className='stroke-slate-900 w-3 h-3' />
          {nomorTelepon || 'Belum ada '}
        </p>
      </div>
      {/* <Link to={`/admin/dokter/test`} className='text-xs rounded-md py-2 text- w-full hover:bg-blueCard cursor-default bg-blueCard/80 font-medium text-slate-600 lowercase text-center'>Lihat Detail</Link> */}
    </div>
  )
}

export default AdminDokterCard