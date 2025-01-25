import React from 'react'

const DetailDokterDataContainer = ({ label, value }) => {
  return (
    <div className='w-full'>
        <p className='w-full flex items-center text-slate-700 text-sm'>
            <span className=' w-[40%]'>{label}</span>
            <span className='w-[10%]'>:</span>
            <span className={`${label === 'Status' ? 'bg-blueCard px-8 py-1 rounded-lg' : ''} text-sm`}>{value}</span>
        </p>
    </div>
  )
}

export default DetailDokterDataContainer