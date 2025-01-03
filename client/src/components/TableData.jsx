import React from 'react'
import { Link } from 'react-router'

const TableData = ({ _id, nama, jenisKelamin, tujuanBerobat, status="Belum Ditangani", createdAt, nik, statusResiko }) => {
  return (
    <Link to={`/admin/all-data/${_id}`} className='w-full cursor-default flex items-center gap-x-2 py-4 border-t-2 border-greySecondary/20 hover:bg-blue-50 duration-200 ease-in-out'>
        <p className='text-[14px] w-[15%] text-greySecondary truncate'>{_id.slice(0,10)} ...</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate'>{nama}</p>
        <p className='text-[14px] w-[10%] text-greySecondary truncate'>{jenisKelamin}</p>
        <p className='text-[14px] w-[12%] text-greySecondary truncate'>{tujuanBerobat}</p>
        <p className={`text-[14px] w-[10%] text-greySecondary truncate text-center p-1 rounded-full ${ statusResiko === 'Tinggi' ? 'bg-redCard' : ( statusResiko === 'Sedang' ? 'bg-yellowCard' : 'bg-blueCard' ) }`}>{statusResiko}</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate text-center'>{nik}</p>
        <p className='text-[14px] w-[15%] text-greySecondary truncate text-center'>{createdAt}</p>
        <p className={`text-[14px] w-[13%] text-greySecondary truncate text-center p-1 rounded-full ${ status === 'Menunggu' ? 'bg-redCard' : ( status === 'Proses' ? 'bg-yellowCard' : 'bg-blueCard' ) }`}>{status}</p>
    </Link>
  )
}

export default TableData