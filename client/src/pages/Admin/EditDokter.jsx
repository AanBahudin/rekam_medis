import React, {useState} from 'react'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { InputForm, InputSelect } from '../../components'
import { man } from '../../assets/images'
import { Form, redirect, useLoaderData, useNavigation } from 'react-router'
import { LoaderCircle } from 'lucide-react'
import { handleToast } from '../../utils/handleToast'
import handleErrormsg from '../../utils/handleErrorMessage'

export const loader = async({ params }) => {
  try {
    const {data} = await customFetch.get(`/dokter/${params.id}`)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

export const action = async({request, params}) => {
  const formData = await request.formData()

  const file = formData.get('photo')
  if (file && file.size > 500000) {
    return handleToast(2, 'Peringatan', 'Gambar yang dipilih tidak boleh lebih dari 5 MB', 2000)
  }

  try {
    await customFetch.patch(`/dokter/${params.id}`, formData)
    handleToast(1, 'Berhasil Diperbaharui', 'Silahkan cek menu dokter', 2000)
    return redirect('/admin/dokter')
  } catch (error) {
    const errMsg = handleErrormsg(error)
    return handleToast(3, 'Terjadi Kesalahan', errMsg, 2000)
  }
}

const EditDokter = () => {

  const {dokter} = useLoaderData()
  const [selectedImage, setSelectedImage] = useState(null)
  const isSubmitting = useNavigation().state === 'submitting'
  
  const imageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }
  

  return (
    <Form method="POST" encType='multipart/form-data' className='w-full h-full overflow-y-auto p-10'>
       <h1 className='text-slate-700 font-semibold text-3xl flex items-center justify-between w-full cursor-default'>
        Ubah Data Tenaga Kesehatan
        <button type='submit' disabled={isSubmitting} className='w-[14%] disabled:bg-slate-400 duration-200 ease-in-out text-center px-2 justify-center py-2 rounded-lg bg-blue-300/80 font-normal text-white text-sm flex items-center gap-x-2'>
          {isSubmitting && <LoaderCircle className='stroke-white w-4 h-4 animate-spin' />}
          {isSubmitting ? 'Mengubah ...' : 'Ubah'}
        </button>
       </h1>
       <p className='text-slate-600 mt-1'>Silahkan isi informasi dokter yang ingin diperbaharui</p>

       <article className='w-full grid grid-cols-12 mt-10'>
        {/* FORM CONTAINER */}
        <div className='col-span-7 w-full gap-y-2 grid grid-cols-1'>
          <div className='grid grid-cols-2 gap-x-4'>
            <InputForm inputName='nama' label='Nama Lengkap' placeholder='nama dokter beserta gelar' isFocus={true} defaultValue={dokter.nama} />
            <InputForm inputName='tanggalLahir' label='Tanggal lahir' inputType='date' defaultValue={dokter.tanggalLahir.split('T')[0]} />
          </div>
          <InputSelect inputName='jenisKelamin' label='Jenis Kelamin' list={['Pria', 'Wanita']} defaultValue={dokter.jenisKelamin}/>
          <InputSelect inputName='status' label='Status Keaktifan' list={['Aktif', 'Non Aktif']} defaultValue={dokter.status} />
          
          <InputForm inputName='email' label='Email' placeholder='Email dokter' defaultValue={dokter.email} />
          <div className="grid grid-cols-2 gap-x-4">
            <InputForm inputName='spesialisasi' label='Spesialisasi Dokter' placeholder='Spesialis Radiologi' defaultValue={dokter.spesialisasi}  />
            <InputForm inputName='nomorTelepon' label='nomor Telepon ' placeholder='0821 xxxx' defaultValue={dokter.nomorTelepon} />
          </div>
          <InputForm inputName='jabatan' label='jabatan' placeholder='Kepala Laboratorium' defaultValue={dokter.jabatan} />
        </div>


        {/* PHOTO CONTAINER */}
        <div className='col-span-5 w-full flex flex-col items-center'>
          <h1 className='text-slate-700 font-semibold capitalize text-lg mb-8'>Foto dokter</h1>
          <img src={selectedImage || dokter.photo || man} className='w-36 h-36 object-cover rounded-full' />

          <div className='flex items-center justify-center gap-x-4 mt-8 w-full'>
            <input type="file" className='hidden' accept='image/*' name='photo' id='photo' onChange={imageUpload} />
            <label htmlFor="photo" className='bg-blue-300 text-white px-3  capitalize py-2 rounded-md w-[40%] text-center'>Pilih Gambar</label>
            {/* <button>Hapus</button> */}
          </div>
          <p className='text-slate-500 text-center text-sm w-[80%] mt-6'>Harap gunakan foto yang jernih agar mudah dilihat. dan ukuran foto tidak lebih dari 5MB.</p>
        </div>

       </article>
    </Form>
  )
}

export default EditDokter