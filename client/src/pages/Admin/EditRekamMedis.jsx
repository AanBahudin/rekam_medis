import React from 'react'
import customFetch from '../../utils/customFetch'
import { LoaderCircle } from 'lucide-react';
import { CustomFormInput } from '../../components';
import { Form, redirect, useLoaderData, useNavigation } from 'react-router';
import { toast } from 'react-toastify';

export const action = async({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.patch(`/medis/${params.id}`)
    toast.success('Data berhasil di edit')
    return redirect(`/admin/all-data/${params.id}`)
  } catch (error) {
    console.log(error);
    return error
  }
}

export const loader = async({ params }) => {
  try {
    const {data}  =await customFetch.get(`/medis/${params.id}`)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const EditRekamMedis = () => {

  const { rekamMedis : data } = useLoaderData()
  const isSubmitting = useNavigation().state === 'submitting'
  
  

  return (
    <Form method="post" className="w-full flex flex-col items-start justify-start bg-white rounded-md mb-6">
      
      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Identititas Pribadi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama lengkap *' placeholder='nama pasien' isFirstItem={true} name='nama' isRequired={true} defaultValue={data.nama} />
          <CustomFormInput label='tanggal lahir *' name='tanggalLahir' isRequired={true} type='date' defaultValue={data.tanggalLahir.split('T')[0]} />
          <CustomFormInput label='usia *' placeholder='usia pasien' name='usia' isRequired={true} type='number' defaultValue={data.usia} />
          <CustomFormInput label='jenis kelamin *' name='jenisKelamin' isRequired={true} inputType='select' list={['Pria', 'Wanita']}  defaultValue={data.jenisKelamin}/>
          <CustomFormInput label='nomor induk keluarga *' placeholder='Nomor Induk Pasien' name='nik' isRequired={true} type='number'  defaultValue={data.nik}/>
          <CustomFormInput label='Nomor telepon *' placeholder='0823 2402 2150' name='nomorTelepon' isRequired={true}  type='number'  defaultValue={data.nomorTelepon}/>
          <CustomFormInput label='status perkawinan *' name='statusPernikahan' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']}  defaultValue={data.statusPernikahan}/>
          <CustomFormInput label='Kebangsaan *' placeholder='kebangsaan' name='kebangsaan' isRequired={true}  defaultValue={data.kebangsaan}/>
          <CustomFormInput label='Agama *' name='agama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']}  defaultValue={data.agama}/>
          <CustomFormInput label='alamat pasien *' placeholder='Alamat Pasien' name='alamat' isRequired={true}  defaultValue={data.alamat}/>
          <CustomFormInput label='kota *' placeholder='kota ' name='kota' isRequired={true}  defaultValue={data.kota}/>
          <CustomFormInput label='kecamatan *' placeholder='kecamatan' name='kecamatan' isRequired={true}  defaultValue={data.kecamatan}/>
          <CustomFormInput label='kelurahan *' placeholder='kelurahan' name='kelurahan' isRequired={true}  defaultValue={data.kelurahan}/>
          <CustomFormInput label='RT *' placeholder='nomor RT' name='rt' isRequired={true}  defaultValue={data.rt}/>
          <CustomFormInput label='RW *' placeholder='nomor RW' name='rw' isRequired={true}  defaultValue={data.rw}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Kontak  </h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />
        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomFormInput label='nama penanggung jawab' placeholder='penanggung jawab' name='namaPenanggungJawab' isRequired={true}  defaultValue={data.namaPenanggungJawab}/>
          <CustomFormInput label='Hubungan dengan pasien' name='hubunganPenanggungJawab' isRequired={true} inputType='select' list={['Suami', 'Istri', 'Bapak', 'Ibu', 'Saudara', 'Saudari', 'Anak', 'Kerabat']}  defaultValue={data.hubunganPenanggungJawab}/>
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' name='nomorTeleponPenanggungJawab' isRequired={true}  type='number' defaultValue={data.nomorTeleponPenanggungJawab}/>
          <CustomFormInput label='alamat penanggung jawab' placeholder='Alamat keluarga' name='alamatPenanggungJawab' isRequired={true}  defaultValue={data.alamatPenanggungJawab}/>
          <CustomFormInput label='kota' placeholder='kota' name='kotaPenanggungJawab' isRequired={true}  defaultValue={data.kotaPenanggungJawab}/>
          <CustomFormInput label='kecamatan' placeholder='kecamatan' name='kecamatanPenanggungJawab' isRequired={true}  defaultValue={data.kecamatanPenanggungJawab}/>
          <CustomFormInput label='kelurahan' placeholder='kelurahan' name='kelurahanPenanggungJawab' isRequired={true}  defaultValue={data.kelurahanPenanggungJawab}/>
          <CustomFormInput label='RT' placeholder='nomor rt' name='rtPenanggungJawab' isRequired={true}  defaultValue={data.rtPenanggungJawab}/>
          <CustomFormInput label='RW' placeholder='nomor rw' name='rwPenanggungJawab' isRequired={true}  defaultValue={data.rwPenanggungJawab}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Umum</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='tekanan darah' placeholder='mmHg' name='tekananDarah' isRequired={true}  defaultValue={data.tekananDarah}/>
          <CustomFormInput label='denyut nadi' placeholder='per menit' name='denyutNadi' isRequired={true} type='number' defaultValue={data.denyutNadi}/>
          <CustomFormInput label='RR (Respiratory Rate)' placeholder='per menit' name='RR' isRequired={true} type='number'  defaultValue={data.RR}/>
          <CustomFormInput label='suhu badan (C)' placeholder='celcius' name='suhuBadan' type='number' isRequired={true} defaultValue={data.suhuBadan}/>
          <CustomFormInput label='tingkat kesadaran (1 - 15)' placeholder='kesadaran' name='skalaKesadaran' type='number' isRequired={true}  defaultValue={data.skalaKesadaran}/>
          <CustomFormInput label='tinggi badan (cm)' placeholder='tinggi pasien' name='tinggiBadan' type='number' isRequired={true}  defaultValue={data.tinggiBadan}/>
          <CustomFormInput label='berat badan (kg)' placeholder='berat pasien' name='beratBadan' type='number' isRequired={true}  defaultValue={data.beratBadan}/>
          <CustomFormInput label='golongan darah' name='golonganDarah' inputType='select' list={['A', 'A+', 'A-', 'AB', 'AB+','AB-', 'B', 'B+', 'B-', 'O', 'O+', 'O-',]} isRequired={true} defaultValue={data.golonganDarah} />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Psikologi dan Psikososial</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='status psikologis' name='statusPsikologi' isRequired={true} inputType='select' list={['stabil', 'cemas', 'depresi', 'agitasi', 'euforia']}  defaultValue={data.statusPsikologi}/>
          <CustomFormInput label='status emosional' name='statusEmosional' isRequired={true} inputType='select' list={['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut']} defaultValue={data.statusEmosional}/>
          <CustomFormInput label='status kesadaran' name='statusKesadaran' isRequired={true} inputType='select' list={['sadar penuh', 'linglung', 'delirium', 'tidak sadar']}  defaultValue={data.statusKesadaran}/>
          <CustomFormInput label='status perilaku' name='statusPerilaku' isRequired={true} inputType='select' list={['kooperatif', 'menarik diri', 'agresif', 'pasif']} defaultValue={data.statusPerilaku}/>
          <CustomFormInput label='status kognitif' name='statusKognitif' isRequired={true} inputType='select' list={['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi']} defaultValue={data.statusKognitif}/>
          <CustomFormInput label='status sosial' name='statusSosial' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} defaultValue={data.statusSosial}/>
          <CustomFormInput label='hubungan pasien dan keluarga' name='hubunganDenganKeluarga' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} defaultValue={data.hubunganDenganKeluraga}/>
          <CustomFormInput label='tinggal bersama' name='tinggalBersama' inputType='select' list={['orang tua', 'Berkeluarga', 'kerabat', 'mengontrak/menumpang', 'sendirian']} defaultValue={data.tinggalBersama}/>
          <CustomFormInput label='status ekonomi' name='statusEkonomi' inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} defaultValue={data.statusEkonomi}/>
          <CustomFormInput label='bahasa sehari hari' placeholder='bahasa sehari hari' name='bahasa' defaultValue={data.bahasa}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Riwayat Kesehatan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-3 gap-x-4 gap-y-6'>
          <CustomFormInput label='keluhan penyakit' placeholder='keluhan penyakit' name='keluhanPenyakit' isRequired={true} inputType='textarea' defaultValue={data.keluhanPenyakit}/>
          <CustomFormInput label='riwayat penyakit' placeholder='riwayat penyakit' name='riwayatPenyakit' isRequired={true} inputType='textarea' defaultValue={data.riwayatPenyakit}/>
          <CustomFormInput label='riwayat penyakit turunan' placeholder='riwayat penyakit turunan' name='penyakitTurunan' isRequired={true} inputType='textarea' defaultValue={data.penyakitTurunan}/>
          <CustomFormInput label='riwayat operasi' placeholder='riwayat operasi pasien' name='riwayatOperasi' inputType='textarea' defaultValue={data.riwayatOperasi}/>
          <CustomFormInput label='alergi' placeholder='alergi pasien' name='alergi' inputType='textarea' defaultValue={data.alergi}/>
          <CustomFormInput label='penyakit yang diderita' placeholder='penyakit diderita' name='penyakitDiderita' isRequired={true} inputType='textarea' defaultValue={data.penyakitDiDerita}/>
          <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='pengobatan berjalan' name='pengobatanBerjalan' isRequired={true} inputType='textarea' defaultValue={data.pengobatanBerjalan}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Penilaian Resiko Jatuh dan Informasi Gizi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='jalan tidak seimbang' name='kondisiBerjalan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']}  defaultValue={data.kondisiBerjalan}/>
          <CustomFormInput label='jalan menggunakan alat bantu' name='menggunakanAlatBantu' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} defaultValue={data.menggunakanAlatBantu}/>
          <CustomFormInput label='apakah ada penurunan berat badan yang tidak diinginkan 6 bulan terakhir?' name='penurunanBeratBadan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} defaultValue={data.penurunanBeratBadan}/>
          <CustomFormInput label='apakah ada penurunan nafsu makan?' name='penurunanNafsuMakan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} defaultValue={data.penurunanNafsuMakan}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Tambahan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='informasi tambahan 1' placeholder='informasi tambahan' name='tambahanPertama' isRequired={true} inputType='textarea'  defaultValue={data.tambahanPertama}/>
          <CustomFormInput label='informasi tambahan 2' placeholder='informasi tambahan' name='tambahanKedua' isRequired={true} inputType='textarea' defaultValue={data.tambahanKedua}/>
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium bg-blueCard rounded-md px-4 w-fit py-2'>Administratif</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-6'>
          <CustomFormInput label='Resiko pasien *' name='statusResiko' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah']}  defaultValue={data.statusResiko}/>
          <CustomFormInput label='Resiko infeksi menular *' name='infeksiMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]}  defaultValue={data.infeksiMenular}/>
          <CustomFormInput label='Resiko penyakit kronis *' name='kronis' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]}  defaultValue={data.kronis}/>
          <CustomFormInput label='Resiko penyakit menular *' name='penyakitMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]}  defaultValue={data.penyakitMenular}/>
          <CustomFormInput label='tujuan berobat' name='tujuanBerobat' isRequired={true} inputType='select' list={['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap']}  defaultValue={data.tujuanBerobat}/>
          <CustomFormInput label='pemeriksaan lanjutan *' name='pemeriksaanLanjutan' isRequired={true} inputType='select' list={['Tidak ada', 'Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']}  defaultValue={data.pemeriksaanLanjutan}/>
          <CustomFormInput label='Identitas Pemeriksa *' name='pemeriksa' isRequired={true} inputType='select' list={['Perawat 1', 'Perawat 2', 'Perawat 3']} defaultValue={data.pemeriksa}/>
          {/* <CustomFormInput label='' placeholder='mmHg' name='keluhan' isRequired={true} inputType='select' list={['Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']} /> */}
        </div>
      </div>

      <div className='w-full p-6 flex justify-end'>
        <button type='submit' disabled={isSubmitting} className='bg-blue-500 text-[14px] text-white px-6 py-2 rounded-md flex items-center justify-center gap-x-4'>
          { isSubmitting && <LoaderCircle size={20} className='animate-spin stroke-white' />}
          { isSubmitting ? 'Mengubah ...' : 'Ubah Data' }
        </button> 
      </div>

  </Form>
  )
}

export default EditRekamMedis