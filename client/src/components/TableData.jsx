import React from 'react'
import { Link } from 'react-router'

const TableData = ({ id, nama, gender, tujuan, status, tanggal_registrasi, nik, resiko }) => {
  return (
    <Link to='/admin/data/asdfasdfas' className='w-full cursor-default flex items-center gap-x-2 py-4 border-t-2 border-greySecondary/20 hover:bg-blue-50 duration-200 ease-in-out'>
        <p className='text-[14px] w-[15%] text-greySecondary truncate'>{id}</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate'>{nama}</p>
        <p className='text-[14px] w-[10%] text-greySecondary truncate'>{gender}</p>
        <p className='text-[14px] w-[12%] text-greySecondary truncate'>{tujuan}</p>
        <p className={`text-[14px] w-[10%] text-greySecondary truncate text-center p-1 rounded-full ${ resiko === 'Tinggi' ? 'bg-redCard' : ( resiko === 'Sedang' ? 'bg-yellowCard' : 'bg-blueCard' ) }`}>{resiko}</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate text-center'>{nik}</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate text-center'>{tanggal_registrasi}</p>
        <p className={`text-[14px] w-[13%] text-greySecondary truncate text-center p-1 rounded-full ${ status === 'Menunggu' ? 'bg-redCard' : ( status === 'Proses' ? 'bg-yellowCard' : 'bg-blueCard' ) }`}>{status}</p>
    </Link>
  )
}

export default TableData