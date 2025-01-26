import React, { useState } from 'react'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { InputForm, InputSelect } from '../../components'
import { man } from '../../assets/images'
import { Form, useNavigation } from 'react-router'
import { LoaderCircle } from 'lucide-react'

export const action = async({request}) => {
  const formData = await request.formData()

  const file = formData.get('photo');
  if (file && file.size > 500000) {
    toast.error('Gambar yang anda pilih melebihi 5 MB.')
    return null
  }

  try {
    await customFetch.post('/dokter', formData)
    toast.success('Dokter ditambahkan')
  } catch (error) {
    console.log(error);
    return error
  }
}


const TambahDokter = () => {

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
        Tambah Tenaga Kesehatan
        <button type='submit' disabled={isSubmitting} className='w-[14%] disabled:bg-slate-400 duration-200 ease-in-out text-center px-2 justify-center py-2 rounded-lg bg-blue-300/80 font-normal text-white text-sm flex items-center gap-x-2'>
          {isSubmitting && <LoaderCircle className='stroke-white w-4 h-4 animate-spin' />}
          {isSubmitting ? 'Menyimpan' : 'Simpan'}
        </button>
       </h1>
       <p className='text-slate-600 mt-1'>Silahkan isi informasi dokter yang ingin ditambahkan</p>

       <article className='w-full grid grid-cols-12 mt-10'>
        {/* FORM CONTAINER */}
        <div className='col-span-7 w-full gap-y-2 grid grid-cols-1'>
          <div className='grid grid-cols-2 gap-x-4'>
            <InputForm inputName='nama' label='Nama Lengkap' placeholder='nama dokter beserta gelar' isFocus={true} />
            <InputForm inputName='tanggalLahir' label='Tanggal lahir' inputType='date' />
          </div>
          <InputSelect inputName='jenisKelamin' label='Jenis Kelamin' list={['Pria', 'Wanita']} />
          
          <InputForm inputName='email' label='Email' placeholder='Email dokter'  />
          <InputForm inputName='password' label='password' placeholder='Passoword login dokter' inputType='password'  />
          <div className="grid grid-cols-2 gap-x-4">
            <InputForm inputName='spesialisasi' label='Spesialisasi Dokter' placeholder='Spesialis Radiologi'  />
            <InputForm inputName='nomorTelepon' label='nomor Telepon ' placeholder='0821 xxxx'  />
          </div>
          <InputForm inputName='jabatan' label='jabatan' placeholder='Kepala Laboratorium'  />
        </div>


        {/* PHOTO CONTAINER */}
        <div className='col-span-5 w-full flex flex-col items-center'>
          <h1 className='text-slate-700 font-semibold capitalize text-lg mb-8'>Foto dokter</h1>
          <img src={selectedImage || man} className='w-36 h-36 object-cover rounded-full' />

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

export default TambahDokter