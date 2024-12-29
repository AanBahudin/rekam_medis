import React from 'react'
import { Link } from 'react-router'
import { Data } from '../../components'
import { man } from '../../assets/images'

const Profile = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-x-4'>

      <article className='w-full h-fit p-4 rounded-xl bg-white flex justify-between'>

        <div className='flex flex-col flex-1 py-4 px-6 w-[40%]'>
          <img src={man} alt="avatar" className='w-20 mx-auto' />
          <p className='font-semibold text-xl text-center mt-4'>Muhammad Ali</p>
          <p className='text-sm italic text-center opacity-60 mt-2'>0823 4369 5417</p>

          <div className='flex gap-x-8 mx-auto mt-4 w-full items-center justify-center'>
            <h2 className='text-lg font-medium text-center flex flex-col'> 47 <span className='text-[10px] opacity-60'>Berat Badan</span> </h2>
            <h2 className='text-lg font-medium text-center flex flex-col'> 21 <span className='text-[10px] opacity-60'>Usia</span> </h2>
            <h2 className='text-lg font-medium text-center flex flex-col'> 150 <span className='text-[10px] opacity-60'>Tinggi Badan</span> </h2>
          </div>

          <Link className='w-full bg-blueCard text-center cursor-default py-2 rounded-lg text-opacity-60 text-sm mt-4'> edit pasien </Link>
        </div>


        <div className='w-[60%] grid grid-cols-3 grid-rows-4 px-6 py-2'>
          <Data label="Gender" value="Wanita" />
          <Data label="Tempat tanggal lahir" value="13 Mei 2003" />
          <Data label="Nomor rekam medis" value="4433595" />
          <Data label="Pekerjaan" value="Pegawai Negeri Sipil" />
          <Data label="Tanggal Registrasi" value="14 Februari 2024" />
          <Data label="NIK" value="747209726348" />
          <Data label="Status Perkawinan" value="Kawin" />
          <Data label="Golongan Darah" value="A" />
          <Data label="Tujuan Kunjungan" value="Berobat" />
          <Data label="Total Kunjungan" value="2" />
          <Data label="Penanggung Jawab" value="Suami" />
          <Data label="Kontak Penanggung Jawab" value="0823 2443 2432" />
        </div>
      </article>

    </section>
  )
}

export default Profile