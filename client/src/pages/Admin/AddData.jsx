import { useState } from 'react'
import { CustomFormInput } from '../../components'


const AddData = () => {

  return (
    <section className="w-full flex flex-col items-start justify-start bg-white rounded-md">
      
      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Identititas Pribadi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama lengkap' placeholder='nama pasien' width='w-full' isFirstItem={true} name='nama' isRequired={true} />
          <CustomFormInput label='Tanggal Lahir' placeholder='Pria' width='w-full' name='nama' isRequired={true} type='date' />
          <CustomFormInput label='jenis kelamin' placeholder='Pria' width='w-full' name='nama' isRequired={true} inputType='select' list={['Pria', 'Wanita']} />
          <CustomFormInput label='nomor induk keluarga' placeholder='Nomor Induk Pasien' width='w-full' name='nama' isRequired={true} type='number' />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' width='w-full' name='nama' isRequired={true}  type='number'/>
          <CustomFormInput label='status perkawinan' placeholder='usia pasien' width='w-full' name='nama' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']} />
          <CustomFormInput label='Kebangsaan' placeholder='Pria' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='Agama' placeholder='Pria' width='w-full' name='nama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']} />
          <CustomFormInput label='alamat pasien' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kota' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kecamatan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kelurahan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='RT' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='RW' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Kontak  </h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />
        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama penanggung jawab' placeholder='penanggung jawab' width='w-full' isFirstItem={true} name='nama' isRequired={true} />
          <CustomFormInput label='Hubungan dengan pasien' placeholder='Pria' width='w-full' name='nama' isRequired={true} type='date' inputType='select' list={['Suami', 'Istri', 'Saudara', 'Saudari', 'Anak', 'Kerabat']} />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' width='w-full' name='nama' isRequired={true}  type='number'/>
          <CustomFormInput label='alamat penanggung jawab' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kota' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kecamatan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='kelurahan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='RT/RW' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Umum</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='tekanan darah' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} type='number'/>
          <CustomFormInput label='denyut nadi' placeholder='per menit' width='w-full' name='nama' isRequired={true} />
          <CustomFormInput label='RR (Respiratory Rate)' placeholder='per menit' width='w-full' name='nama' isRequired={true} type='number'/>
          <CustomFormInput label='suhu badan (C)' placeholder='celcius' width='w-full' name='nama' type='number'/>
          <CustomFormInput label='tingkat kesadaran (1 - 15)' placeholder='kesadaran' width='w-full' name='nama' type='number' />
          <CustomFormInput label='tinggi badan (cm)' placeholder='tinggi pasien' width='w-full' name='nama' type='number' />
          <CustomFormInput label='berat badan (kg)' placeholder='berat pasien' width='w-full' name='nama' type='number' />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Psikologi dan Psikososial</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='status psikologis' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} inputType='select' list={['stabil', 'cemas', 'depresi', 'agitasi', 'euforia']} />
          <CustomFormInput label='status emosional' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} inputType='select' list={['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut']} />
          <CustomFormInput label='status kesadaran' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} inputType='select' list={['sadar penuh', 'linglung', 'delirium (bingung mendadak)', 'tidak sadar']} />
          <CustomFormInput label='status perilaku' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} inputType='select' list={['kooperatif', 'menarik diri', 'agresif', 'pasif']} />
          <CustomFormInput label='status kognitif' placeholder='mmHg' width='w-full' name='keluhan' isRequired={true} inputType='select' list={['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi']} />
          <CustomFormInput label='status sosial' placeholder='per menit' width='w-full' name='nama' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='hubungan pasien dan keluarga' placeholder='per menit' width='w-full' name='nama' isRequired={true} type='number'  inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='tinggal bersama' placeholder='celcius' width='w-full' name='nama' type='number' inputType='select' list={['orang tua', 'kerabat', 'mengontrak/menumpang', 'sendirian']}/>
          <CustomFormInput label='status ekonomi' placeholder='kesadaran' width='w-full' name='nama' type='number' inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']}  />
          <CustomFormInput label='bahasa sehari hari' placeholder='bahasa sehari hari' width='w-full' name='nama' type='text' />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Riwayat Kesehatan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='keluhan penyakit' placeholder='keluhan pasien' width='w-full' name='keluhan' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit' placeholder='penanggung jawab' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit turunan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat operasi' placeholder='Pria' width='w-full' name='nama' inputType='textarea'/>
          <CustomFormInput label='alergi' placeholder='0823 2402 2150' width='w-full' name='nama' inputType='textarea'/>
          <CustomFormInput label='penyakit yang diderita' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Penilaian Resiko Jatuh dan Informasi Gizi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='keluhan penyakit' placeholder='keluhan pasien' width='w-full' name='keluhan' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit' placeholder='penanggung jawab' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit turunan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat operasi' placeholder='Pria' width='w-full' name='nama' inputType='textarea'/>
          <CustomFormInput label='alergi' placeholder='0823 2402 2150' width='w-full' name='nama' inputType='textarea'/>
          <CustomFormInput label='penyakit yang diderita' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} inputType='textarea' />
        </div>
      </div>

    </section>
  )
}

export default AddData