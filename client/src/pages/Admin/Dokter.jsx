import React, { useState } from 'react'
import { Form, Link, redirect, useLoaderData, useNavigate } from 'react-router'
import customFetch from '../../utils/customFetch'
import { AdminDokterCard, DetailDokterDataContainer } from '../../components'
import moment from 'moment'
import { AtSign, Edit, Phone, Trash, X, Plus } from 'lucide-react'
import { man } from '../../assets/images'
import errorMsg from '../../utils/handleErrorMessage'
import { handleToast } from '../../utils/handleToast'

export const loader = async() => {
  try {
    const {data} = await customFetch.get('/dokter');
    return data
  } catch (error) {
    const msgErr = errorMsg(error)
    handleToast(3, 'Terjadi Kesalahan', msgErr, 2000)
    return msgErr
  }
}

const Dokter = () => {

  const { dokter } = useLoaderData()
  const [currentData, setCurrentData] = useState(null)
  const [ showDetail, setShowDetail ] = useState(false)
  const navigate = useNavigate()
  

  const handlePopup = (id, condition) => {
    if (condition) {
        const current = dokter.find(item => {
          return item._id === id
        })
        setCurrentData(current)
    }
    setShowDetail(condition)
  }

  const handleDelete = async(id, event) => {
    event.preventDefault()
    try {
      await customFetch.delete(`/dokter/${id}`)
      handleToast(1, 'Data dihapus', 'Data dokter berhasil dihapus!', 2000)
      setCurrentData(null)
      setShowDetail(false)
      return navigate("/admin/dokter", { replace: true });
    } catch (error) {
      const msgError = errorMsg(error)
      setCurrentData(null)
      setShowDetail(false)
      console.log(error);
      handleToast(3, 'Terjadi Kesalahan',msgError , 2000)
      return msgError
    }
  }
  

  return (
    <section className='w-full h-full'>

      {/* POP DETAIL */}
      <article className={`transition-transform duration-200 ease-in-out transform ${showDetail ? 'translate-x-0' : 'translate-x-full'} h-full w-[25%] flex flex-col items-center absolute z-20 right-0 p-6 rounded-xl bg-white border-l-2 border-slate-200  `}>
        {/* CLOSE BUTTON AND TITLE */}
        <div className='w-full flex items-center justify-between'>
          <X onClick={() => handlePopup(' ', false)} />

          <section className='flex gap-x-2 items-center'>
            <Link to={`edit/${currentData?._id}`}>
              <Edit className='stroke-white bg-blueCard p-1 rounded' />
            </Link>
              {/* <input type="hidden" name='id' value={currentData?._id} /> */}
              <button onClick={(event) => handleDelete(currentData?._id, event)} className='m-0 p-0 border-none bg-transparent'>
                <Trash className='stroke-white bg-redCard p-1 rounded'/>
              </button>
          </section>
        </div>

        {/* CONTENT */}
        <div className='w-full flex flex-col items-center justify-start mt-10'>
          <img src={currentData?.photo || man} alt="avatar" className='w-28 h-28 object-cover rounded-full' />
          <h1 className='mt-4 text-2xl'>{currentData?.nama || ''}</h1>
          <p>{currentData?.spesialisasi}</p>

          <div className='w-full flex justify-evenly items-center mt-4'>
            <p className='flex items-center gap-x-1 text-xs text-slate-500'>
              <AtSign className='stroke-slate-900 w-3 h-3' />
              {currentData?.email || ''}
            </p>

            <p className='flex items-center gap-x-1 text-xs text-slate-500'>
              <Phone className='stroke-slate-900 w-3 h-3' />
              {currentData?.nomorTelepon || 'Belum diatur'}
            </p>
          </div>
          
          <div className='w-full mt-20 flex flex-col gap-y-8'>
            <DetailDokterDataContainer label='Jenis Kelamin' value={currentData?.jenisKelamin} />
            <DetailDokterDataContainer label='Tanggal Lahir' value={moment( currentData?.tanggalLahir).format('LL')} />
            <DetailDokterDataContainer label='Jabatan' value={currentData?.jabatan || 'Tidak ada'} />
            <DetailDokterDataContainer label='Status' value={currentData?.status} />
          </div>
          
        </div>
      </article>

      <section className='w-full relative h-full  no-scrollbar overflow-y-auto p-10'>
        <h1 className='text-slate-700 font-semibold text-3xl flex items-center justify-between w-full cursor-default'>
          Daftar Semua Tenaga Kesehatan
          <Link to='/admin/tambah-dokter' className='text-sm font-normal bg-blueCard px-6 py-2 rounded-md flex items-center gap-x-3 group cursor-default '><Plus className='w-3 h-3' /> Dokter</Link>
        </h1>
        <p className='text-slate-600 mt-1'>Informasi lengkap tentang dokter dan spesialisasi mereka.</p>

        <article className='w-full mt-10 flex flex-wrap items-center justify-start gap-4'>

          {dokter.length === 0 ? (
            <h1 className='text-slate-600'>Belum ada data dokter ..</h1>
          ) : (
            dokter.map((item, index) => {
              return <AdminDokterCard key={index} {...item} handlePopup={handlePopup} />
            })
          )}

        </article>
      </section> 
    </section>
  )
}

export default Dokter