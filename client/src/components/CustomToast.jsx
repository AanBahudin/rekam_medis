import React from 'react'
import { Check } from 'lucide-react'

const CustomToast = ({type, title, description}) => {
  return (
    <div className='w-full flex items-center gap-x-4'>
        <Check className='w-6 h-6 stroke-[#4BB543]' />

        <div className='flex-1'>
            <h1 className='font-semibold text-slate-700'>{title}</h1>
            <p className='text-slate-500 text-xs'>{description}</p>
        </div>
    </div>
  )
}

export default CustomToast