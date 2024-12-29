import { useState } from 'react'
import { CustomFormInput } from '../../components'


const AddData = () => {

  return (
    <section className="w-full flex flex-col items-start justify-start bg-white rounded-md mb-6">
      
      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Identititas Pribadi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama lengkap *' placeholder='nama pasien' isFirstItem={true} name='nama' isRequired={true} />
          <CustomFormInput label='tanggal lahir *' name='tanggalLahir' isRequired={true} type='date' />
          <CustomFormInput label='usia *' placeholder='usia pasien' name='usia' isRequired={true} type='number' />
          <CustomFormInput label='jenis kelamin *' name='jenisKelamin' isRequired={true} inputType='select' list={['Pria', 'Wanita']} />
          <CustomFormInput label='nomor induk keluarga *' placeholder='Nomor Induk Pasien' name='nik' isRequired={true} type='number' />
          <CustomFormInput label='Nomor telepon *' placeholder='0823 2402 2150' name='nomorTelepon' isRequired={true}  type='number'/>
          <CustomFormInput label='status perkawinan *' name='statusPernikahan' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']} />
          <CustomFormInput label='Kebangsaan *' placeholder='kebangsaan' name='kebangsaan' isRequired={true} />
          <CustomFormInput label='Agama *' name='agama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']} />
          <CustomFormInput label='alamat pasien *' placeholder='Alamat Pasien' name='alamat' isRequired={true} />
          <CustomFormInput label='kota *' placeholder='kota ' name='kota' isRequired={true} />
          <CustomFormInput label='kecamatan *' placeholder='kecamatan' name='kecamatan' isRequired={true} />
          <CustomFormInput label='kelurahan *' placeholder='kelurahan' name='kelurahan' isRequired={true} />
          <CustomFormInput label='RT *' placeholder='nomor RT' name='rt' isRequired={true} />
          <CustomFormInput label='RW *' placeholder='nomor RW' name='rw' isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Kontak  </h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />
        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama penanggung jawab' placeholder='penanggung jawab' name='namaPenanggungJawab' isRequired={true} />
          <CustomFormInput label='Hubungan dengan pasien' name='hubunganPenanggungJawab' isRequired={true} inputType='select' list={['Suami', 'Istri', 'Saudara', 'Saudari', 'Anak', 'Kerabat']} />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' name='nomorTeleponPenanggungJawab' isRequired={true}  type='number'/>
          <CustomFormInput label='alamat penanggung jawab' placeholder='Alamat keluarga' name='alamatPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kota' placeholder='kota' name='kotaPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kecamatan' placeholder='kecamatan' name='kecamatanPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kelurahan' placeholder='kelurahan' name='kelurahanPenanggungJawab' isRequired={true} />
          <CustomFormInput label='RT' placeholder='nomor rt' name='rtPenanggungJawab' isRequired={true} />
          <CustomFormInput label='RW' placeholder='nomor rw' name='rwPenanggungJawab' isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Umum</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='tekanan darah' placeholder='mmHg' name='tekananDarah' isRequired={true} />
          <CustomFormInput label='denyut nadi' placeholder='per menit' name='denyutNadi' isRequired={true} type='number'/>
          <CustomFormInput label='RR (Respiratory Rate)' placeholder='per menit' name='RR' isRequired={true} type='number'/>
          <CustomFormInput label='suhu badan (C)' placeholder='celcius' name='suhuBdan' type='number' isRequired={true}/>
          <CustomFormInput label='tingkat kesadaran (1 - 15)' placeholder='kesadaran' name='skalaKesadaran' type='number' isRequired={true} />
          <CustomFormInput label='tinggi badan (cm)' placeholder='tinggi pasien' name='tinggiBadan' type='number' isRequired={true} />
          <CustomFormInput label='berat badan (kg)' placeholder='berat pasien' name='beratBadan' type='number' isRequired={true} />
          <CustomFormInput label='golongan darah' name='golonganDarah' inputType='select' list={['A', 'A+', 'A-', 'AB', 'AB+','AB-', 'B', 'B+', 'B-', 'O', 'O+', 'O-',]} isRequired={true} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Psikologi dan Psikososial</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='status psikologis' name='statusPsikologi' isRequired={true} inputType='select' list={['stabil', 'cemas', 'depresi', 'agitasi', 'euforia']} />
          <CustomFormInput label='status emosional' name='statusEmosional' isRequired={true} inputType='select' list={['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut']} />
          <CustomFormInput label='status kesadaran' name='statusKesadaran' isRequired={true} inputType='select' list={['sadar penuh', 'linglung', 'delirium', 'tidak sadar']} />
          <CustomFormInput label='status perilaku' name='statusPerilaku' isRequired={true} inputType='select' list={['kooperatif', 'menarik diri', 'agresif', 'pasif']} />
          <CustomFormInput label='status kognitif' name='statusKognitif' isRequired={true} inputType='select' list={['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi']} />
          <CustomFormInput label='status sosial' name='statusSosial' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='hubungan pasien dan keluarga' name='hubunganDenganKeluarga' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='tinggal bersama' name='tinggalBersama' inputType='select' list={['orang tua', 'kerabat', 'mengontrak/menumpang', 'sendirian']}/>
          <CustomFormInput label='status ekonomi' name='statusEkonomi' inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']}  />
          <CustomFormInput label='bahasa sehari hari' placeholder='bahasa sehari hari' name='bahasa'/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Riwayat Kesehatan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='keluhan penyakit' placeholder='keluhan penyakit' name='keluhanPenyakit' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit' placeholder='riwayat penyakit' name='riwayatPenyakit' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit turunan' placeholder='riwayat penyakit turunan' name='penyakitTurunan' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat operasi' placeholder='riwayat operasi pasien' name='riwayatOperasi' inputType='textarea'/>
          <CustomFormInput label='alergi' placeholder='alergi pasien' name='alergi' inputType='textarea'/>
          <CustomFormInput label='penyakit yang diderita' placeholder='penyakit diderita' name='penyakitDiderita' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='pengobatan berjalan' name='pengobatanBerjalan' isRequired={true} inputType='textarea' />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Penilaian Resiko Jatuh dan Informasi Gizi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='jalan tidak seimbang' name='kondisiBerjalan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='jalan menggunakan alat bantu' name='menggunakanAlatBantu' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='apakah ada penurunan berat badan yang tidak diinginkan 6 bulan terakhir?' name='penurunanBeratBadan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='apakah ada penurunan nafsu makan?' name='penurunanNafsuMakan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Tambahan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='informasi tambahan 1' placeholder='informasi tambahan' name='tambahanPertama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='informasi tambahan 2' placeholder='informasi tambahan' name='tambahanKedua' isRequired={true} inputType='textarea' />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Administratif</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='Resiko pasien *' name='statusResiko' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah']} />
          <CustomFormInput label='Resiko infeksi menular *' name='infeksiMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='Resiko penyakit kronis *' name='kronis' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='Resiko penyakit menular *' name='penyakitMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='tujuan berobat' name='tujuanBerobat' isRequired={true} inputType='select' list={['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap']} />
          <CustomFormInput label='pemeriksaan lanjutan *' name='pemeriksaanLanjutan' isRequired={true} inputType='select' list={['Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']} />
          {/* <CustomFormInput label='' placeholder='mmHg' name='keluhan' isRequired={true} inputType='select' list={['Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']} /> */}
        </div>
      </div>

      <div className='w-full p-6 flex justify-end'>
        <button type='submit' className='bg-blue-500 px-6 py-2 rounded-md'>Tambah Pasien</button> 
      </div>

    </section>
  )
}

export default AddData