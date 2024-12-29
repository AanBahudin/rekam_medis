import React from 'react'

const Data = ({ label, value }) => {
  return (
    <div className='flex flex-col gap-y-1'>
      <h5 className='text-md text-greySecondary/70 truncate text-[14px]'>{label}</h5>
      <p className='text-sm'>{value}</p>
    </div>
  )
}

export default Data