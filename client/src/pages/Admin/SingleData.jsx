import React from 'react'
import { Link } from 'react-router'
import { Data } from '../../components'
import { man } from '../../assets/images'

const SingleData = () => {
  return (
    <section className="w-full flex flex-col items-start justify-start bg-white rounded-md mb-6">

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Identitas Pribadi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
          <Data label="nama lengkap" value="Aan Bahudin" />
          <Data label="tanggal lahir" value="10 Desember 1945" />
          <Data label="usia" value="69 tahun" />
          <Data label="jenis kelamin" value="Pria" />
          <Data label="nomor induk keluarga" value="234929324232" />
          <Data label="nomor telepon" value="0812342143" />
          <Data label="status perkawinan" value="Belum Menikah" />
          <Data label="kebangsaan" value="Indonesia" />
          <Data label="agama" value="Islam" />
          <Data label="alamat pasien" value="Jalan Jendral Gatot Subroto" />
          <Data label="kota" value="Baubau" />
          <Data label="kecamatan" value="Wolio" />
          <Data label="kelurahan" value="Bukit Wolio Indah" />
          <Data label="rt" value="001" />
          <Data label="rw" value="006" />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Kontak</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
          <Data label="nama penanggung jawab" value="James Clear" />
          <Data label="hubungan dengan pasien" value="Saudara" />
          <Data label="nomor telepon" value="08347582324" />
          <Data label="alamat penanggung jawab" value="Jl Wall Street" />
          <Data label="kota" value="Baubau" />
          <Data label="kecamatan" value="Murhum" />
          <Data label="kelurahan" value="Batupuaro" />
          <Data label="rt" value="13" />
          <Data label="rw" value="16" />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Umum</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
          <Data label="tekanan darah" value="120/200 mmHg" />
          <Data label="denyut nadi" value="40" />
          <Data label="rate pernapasan" value="15" />
          <Data label="suhu badan" value="36,5" />
          <Data label="tingkat kesadaran" value="13" />
          <Data label="tinggi badan" value="174 cm" />
          <Data label="berat badan" value="68 kg" />
          <Data label="golongan darah" value="A+" />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Keadaan Psikologi dan Psikososial</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
          <Data label="status psikologis" value="stabil" />
          <Data label="status emosional" value="tenang" />
          <Data label="status kesadaran" value="sadar penuh" />
          <Data label="status perilaku" value="kooperatif" />
          <Data label="status kognitif" value="normal" />
          <Data label="status sosial" value="sangat baik" />
          <Data label="hubungan dengan keluarga" value="baik" />
          <Data label="tinggal bersama" value="orang tua" />
          <Data label="status ekonomi" value="sangat baik" />
          <Data label="bahasa sehari hari" value="indonesia" />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Riwayat Kesehatan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-4 gap-x-4 gap-y-4'>
          <Data label="keluhan penyakit" value="Batuk berdahak selama 2 minggu, disertai demam." dataType='complex' />
          <Data label="riwayat penyakit" value="terkena malaria 2 bulan yang lalu" dataType='complex'  />
          <Data label="riwayat penyakit turunan" value="tidak ada" dataType='complex'  />
          <Data label="riwayat operasi" value="tidak ada" dataType='complex'  />
          <Data label="alergi" value="makanan berprotein hewani" dataType='complex'  />
          <Data label="penyakit yang sedang diderita" value="demam dan batuk" dataType='complex'  />
          <Data label="riwayat pengobatan sedang berjalan" value="tidak ada pengobatan" dataType='complex'  />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Penilaian Resiko Jatuh dan Informasi Gizi</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
          <Data label="jalan tidak seimbang" value="terkadang" />
          <Data label="penggunaan alat bantu" value="terkadang" />
          <Data label="penurunan berat badan 6 bulan terakhir" value="tidak" />
          <Data label="penguranan nafsu makan" value="ya" />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Informasi Tambahan</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
          <Data label="Informasi Tambahan 1" value="pasien terkadang merasakan gatal pada malam hari" dataType='complex' />
          <Data label="Informasi Tambahan 2" value="tidak ada" dataType='complex'  />
        </div>
      </div>

      <div className='w-full p-6'>
        <h5 className='text-xl tracking-wide text-greyPrimary mb-4 font-medium  bg-blueCard rounded-md px-4 w-fit py-2'>Administratif</h5>
        <hr className='mb-8 border-[1px] border-solid border-greySecondary/60' />

        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-4'>
          <Data label="resiko pasien" value="Tinggi" bg='bg-redCard' />
          <Data label="resiko infeksi menular" value="rendah" bg='bg-greenCard' />
          <Data label="resiko penyakit kronis" value="sedang" bg='bg-yellowCard' />
          <Data label="resiko penyakit menular" value="sedang" bg='bg-yellowCard' />
          <Data label="tujuan berobat" value="berobat" />
          <Data label="pemeriksaan lanjutan" value="laboratorium" />
          <Data label="identitas pemeriksa" value="Perawat 1" />
        </div>
      </div>

    </section>
  )
}

export default SingleData