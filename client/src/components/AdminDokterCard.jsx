import React from 'react'
import { man } from '../assets/images'
import {Link} from 'react-router'
import { AtSign, Phone } from 'lucide-react'


const AdminDokterCard = ({ _id, nama, spesialisasi, email, nomorTelepon, photo, handlePopup }) => {

  return (
    <div className='w-[290px] h-[150px] bg-transparent  rounded-xl shadow-sm hover:shadow-lg duration-200 ease-in-out p-2 flex justify-start border-[2px] gap-x-4 border-slate-400'>

      <div className='flex flex-col items-start justify-start h-full relative'>
        <img src={photo || man} className='w-16 h-16 mt-2'/>
      </div>

      <div className='flex-1 flex flex-col justify-start mt-2'>
        <h1 className='text-md font-semibold text-slate-700 flex items-center gap-x-4'>
          <span className='h-3 w-3 bg-lime-300 rounded-full'></span>
          {nama}
        </h1>
        <p className='text-slate-600 text-xs mb-2'>{spesialisasi}</p>

        <p className='flex items-center gap-x-1 text-xs text-slate-500'>
          <AtSign className='stroke-slate-900 w-3 h-3' />
          {email}
        </p>

        <p className='flex items-center gap-x-1 text-xs text-slate-500'>
          <Phone className='stroke-slate-900 w-3 h-3' />
          {nomorTelepon || 'Belum ada '}
        </p>
        <button onClick={() => handlePopup(_id, true)} className='text-xs rounded-md py-1 mt-3 text- w-full hover:bg-blueCard cursor-default bg-slate-200 font-medium text-slate-600 text-center'>Detail</button>
      </div>
    </div>
  )
}

export default AdminDokterCard