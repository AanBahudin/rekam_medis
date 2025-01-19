import { CustomFormInput } from '../../components'
import { Form, redirect, useNavigation } from 'react-router'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { LoaderCircle } from 'lucide-react'
import { addDataLinks } from '../../utils/constants'
import { useState } from 'react'

export const action = async({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/medis', data)
    toast.success('Data di input')
    return redirect('.')
  } catch (error) {
    const errorArr = error.response.data.msg
    return toast.error(errorArr.join(", "));
  }


}

const AddData = () => {

  const [activeMenu, setMenu] = useState('first')
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form method='POST' className='w-full max-h-full min-h-full grid grid-cols-12 gap-x-4'>
      <section className='col-span-3 rounded-md overflow-y-auto h-full bg-slate-50'>
        

        {/* LINK CONTAINER */}
        <article className='w-full flex flex-col gap-y-1 py-8'>
          {addDataLinks.map((item, index) => {
            return (
              <h1 key={index} onClick={() => setMenu(item.path)} className={`w-full ${ activeMenu === item.path ? 'bg-blueCard text-slate-800' : null } px-4 py-4 select-none cursor-default text-slate-700 text-sm rounded-md duration-200 ease-in-out`}>{item.title}</h1>
            )
          })}
        </article>

      </section>

      {/* INPUT SECTION */}
      <section className='col-span-9 rounded-md overflow-y-auto max-h-[100%] bg-slate-50 p-6 flex flex-col justify-between'>
        
        <div className={`w-full ${activeMenu === 'first' ? 'grid grid-cols-3' : 'hidden'}  gap-x-4 gap-y-6`}>
          <CustomFormInput label='nama lengkap' placeholder='nama pasien' isFirstItem={true} name='nama' isRequired={true} />
          <CustomFormInput label='tanggal lahir' name='tanggalLahir' isRequired={true} type='date' />
          <CustomFormInput label='usia' placeholder='usia pasien' name='usia' isRequired={true} type='number' />
          <CustomFormInput label='jenis kelamin' name='jenisKelamin' isRequired={true} inputType='select' list={['Pria', 'Wanita']} />
          <CustomFormInput label='nomor induk keluarga' placeholder='Nomor Induk Pasien' name='nik' isRequired={true} type='number' />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' name='nomorTelepon' isRequired={true}  type='number'/>
          <CustomFormInput label='status perkawinan' name='statusPernikahan' isRequired={true} inputType='select' list={['Menikah', 'Belum Menikah', 'Cerai']} />
          <CustomFormInput label='Kebangsaan' placeholder='kebangsaan' name='kebangsaan' isRequired={true} />
          <CustomFormInput label='Agama' name='agama' isRequired={true} inputType='select' list={['Islam', 'Kristen', 'Hindu', 'Buddha', 'Kong Hu Cu']} />
          <CustomFormInput label='alamat pasien' placeholder='Alamat Pasien' name='alamat' isRequired={true} />
          <CustomFormInput label='kota' placeholder='kota ' name='kota' isRequired={true} />
          <CustomFormInput label='kecamatan' placeholder='kecamatan' name='kecamatan' isRequired={true} />
          <CustomFormInput label='kelurahan' placeholder='kelurahan' name='kelurahan' isRequired={true} />
          <CustomFormInput label='RT' placeholder='nomor RT' name='rt' isRequired={true} />
          <CustomFormInput label='RW' placeholder='nomor RW' name='rw' isRequired={true} />
        </div>

        <div className={`w-full ${ activeMenu === 'second' ? 'grid grid-cols-3' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='nama penanggung jawab' placeholder='penanggung jawab' name='namaPenanggungJawab' isRequired={true} />
          <CustomFormInput label='Hubungan dengan pasien' name='hubunganPenanggungJawab' isRequired={true} inputType='select' list={['Suami', 'Istri', 'Bapak', 'Ibu', 'Saudara', 'Saudari', 'Anak', 'Kerabat']} />
          <CustomFormInput label='Nomor telepon' placeholder='0823 2402 2150' name='nomorTeleponPenanggungJawab' isRequired={true}  type='number'/>
          <CustomFormInput label='alamat penanggung jawab' placeholder='Alamat keluarga' name='alamatPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kota' placeholder='kota' name='kotaPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kecamatan' placeholder='kecamatan' name='kecamatanPenanggungJawab' isRequired={true} />
          <CustomFormInput label='kelurahan' placeholder='kelurahan' name='kelurahanPenanggungJawab' isRequired={true} />
          <CustomFormInput label='RT' placeholder='nomor rt' name='rtPenanggungJawab' isRequired={true} />
          <CustomFormInput label='RW' placeholder='nomor rw' name='rwPenanggungJawab' isRequired={true} />
        </div>

        <div className={`w-full ${ activeMenu === 'third' ? 'grid grid-cols-3' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='tekanan darah' placeholder='mmHg' name='tekananDarah' isRequired={true} />
          <CustomFormInput label='denyut nadi' placeholder='per menit' name='denyutNadi' isRequired={true} type='number'/>
          <CustomFormInput label='RR (Respiratory Rate)' placeholder='per menit' name='RR' isRequired={true} type='number'/>
          <CustomFormInput label='suhu badan (C)' placeholder='celcius' name='suhuBadan' type='number' isRequired={true}/>
          <CustomFormInput label='tingkat kesadaran (1 - 15)' placeholder='kesadaran' name='skalaKesadaran' type='number' isRequired={true} />
          <CustomFormInput label='tinggi badan (cm)' placeholder='tinggi pasien' name='tinggiBadan' type='number' isRequired={true} />
          <CustomFormInput label='berat badan (kg)' placeholder='berat pasien' name='beratBadan' type='number' isRequired={true} />
          <CustomFormInput label='golongan darah' name='golonganDarah' inputType='select' list={['A', 'A+', 'A-', 'AB', 'AB+','AB-', 'B', 'B+', 'B-', 'O', 'O+', 'O-',]} isRequired={true} />
        </div>



        <div className={`w-full ${ activeMenu === 'fourth' ? 'grid grid-cols-3' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='status psikologis' name='statusPsikologi' isRequired={true} inputType='select' list={['stabil', 'cemas', 'depresi', 'agitasi', 'euforia']} />
          <CustomFormInput label='status emosional' name='statusEmosional' isRequired={true} inputType='select' list={['tenang', 'mudah tersinggung', 'marah', 'sedih', 'takut']} />
          <CustomFormInput label='status kesadaran' name='statusKesadaran' isRequired={true} inputType='select' list={['sadar penuh', 'linglung', 'delirium', 'tidak sadar']} />
          <CustomFormInput label='status perilaku' name='statusPerilaku' isRequired={true} inputType='select' list={['kooperatif', 'menarik diri', 'agresif', 'pasif']} />
          <CustomFormInput label='status kognitif' name='statusKognitif' isRequired={true} inputType='select' list={['normal', 'gangguan konsentrasi', 'gangguan ingatan', 'gangguan delusi', 'gangguan halusinasi']} />
          <CustomFormInput label='status sosial' name='statusSosial' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='hubungan pasien dan keluarga' name='hubunganDenganKeluarga' isRequired={true} inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']} />
          <CustomFormInput label='tinggal bersama' name='tinggalBersama' inputType='select' list={['orang tua', 'Berkeluarga', 'kerabat', 'mengontrak/menumpang', 'sendirian']}/>
          <CustomFormInput label='status ekonomi' name='statusEkonomi' inputType='select' list={['sangat baik', 'baik', 'cukup baik', 'kurang baik', 'tidak baik']}  />
          <CustomFormInput label='bahasa sehari hari' placeholder='bahasa sehari hari' name='bahasa'/>
        </div>

        <div className={`w-full ${ activeMenu === 'fifth' ? 'grid grid-cols-2' : 'hidden' } gap-x-4 gap-y-6`} >
          <CustomFormInput label='keluhan penyakit' placeholder='keluhan penyakit' name='keluhanPenyakit' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit' placeholder='riwayat penyakit' name='riwayatPenyakit' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat penyakit turunan' placeholder='riwayat penyakit turunan' name='penyakitTurunan' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat operasi' placeholder='riwayat operasi pasien' name='riwayatOperasi' inputType='textarea'/>
          <CustomFormInput label='alergi' placeholder='alergi pasien' name='alergi' inputType='textarea'/>
          <CustomFormInput label='penyakit yang diderita' placeholder='penyakit diderita' name='penyakitDiderita' isRequired={true} inputType='textarea' />
          <CustomFormInput label='riwayat pengobatan sedang berjalan' placeholder='pengobatan berjalan' name='pengobatanBerjalan' isRequired={true} inputType='textarea' />
        </div>

        <div className={`w-full ${ activeMenu === 'sixth' ? 'grid grid-cols-' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='jalan tidak seimbang' name='kondisiBerjalan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='jalan menggunakan alat bantu' name='menggunakanAlatBantu' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='apakah ada penurunan berat badan yang tidak diinginkan 6 bulan terakhir?' name='penurunanBeratBadan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
          <CustomFormInput label='apakah ada penurunan nafsu makan?' name='penurunanNafsuMakan' isRequired={true} inputType='select' list={['ya', 'kadang', 'tidak']} />
        </div>

        <div className={`w-full ${ activeMenu === 'seventh' ? 'grid grid-cols-2' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='informasi tambahan 1' placeholder='informasi tambahan' name='tambahanPertama' isRequired={true} inputType='textarea' />
          <CustomFormInput label='informasi tambahan 2' placeholder='informasi tambahan' name='tambahanKedua' isRequired={true} inputType='textarea' />
        </div>

        <div className={`w-full ${ activeMenu === 'eighth' ? 'grid grid-cols-2' : 'hidden' } gap-x-4 gap-y-6`}>
          <CustomFormInput label='Resiko pasien *' name='statusResiko' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah']} />
          <CustomFormInput label='Resiko infeksi menular *' name='infeksiMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='Resiko penyakit kronis *' name='kronis' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='Resiko penyakit menular *' name='penyakitMenular' isRequired={true} inputType='select' list={['Tinggi', 'Sedang', 'Rendah',]} />
          <CustomFormInput label='tujuan berobat' name='tujuanBerobat' isRequired={true} inputType='select' list={['Berobat', 'Konsultasi', 'Kontrol', 'Rawat Inap']} />
          <CustomFormInput label='pemeriksaan lanjutan *' name='pemeriksaanLanjutan' isRequired={true} inputType='select' list={['Tidak ada', 'Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']} />
          <CustomFormInput label='Identitas Pemeriksa *' name='pemeriksa' isRequired={true} inputType='select' list={['Perawat 1', 'Perawat 2', 'Perawat 3']} />
          {/* <CustomFormInput label='' placeholder='mmHg' name='keluhan' isRequired={true} inputType='select' list={['Labratorium', 'Radiologi', 'Laboratorium dan Radiologi']} /> */}
        </div>


        <button disabled={isSubmitting} className='self-end bg-blueCard/80 w-[10vw] text-sm py-2 rounded-md text-slate-700 flex items-center gap-x-2 justify-center'>
          {isSubmitting && <LoaderCircle size={20} className='animate-spin stroke-white' />}
          { isSubmitting ? 'Menambahkan ...' : 'Selesai' }
        </button>
      </section>
    </Form>
  )
}

export default AddData