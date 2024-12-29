import { CustomFormInput } from '../../components'


const AddData = () => {
  return (
    <section className="w-full flex flex-col items-start justify-start bg-white rounded-md">
      
      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium'>Identititas Pribadi</h5>
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
          <CustomFormInput label='RT/RW' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium'>Informasi Kontak  </h5>
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
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium'>Riwayat Kesehatan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama penanggung jawab' placeholder='penanggung jawab' width='w-full' isFirstItem={true} name='nama' isRequired={true} />
          <CustomFormInput label='Hubungan dengan pasien' placeholder='Pria' width='w-full' name='nama' isRequired={true} type='date' inputType='select' list={['Suami', 'Istri', 'Saudara', 'Saudari', 'Anak', 'Kerabat']} />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' width='w-full' name='nama' isRequired={true}  type='number'/>
          <CustomFormInput label='alamat penanggung jawab' placeholder='Alamat Pasien' width='w-full' name='nama' isRequired={true} />
        </div>
      </div>

    </section>
  )
}

export default AddData