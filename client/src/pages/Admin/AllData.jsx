import { Search, IdCard, CircleUser, ChevronLeft, ChevronRight } from 'lucide-react'
import { TableData } from '../../components'
import { dummyData } from '../../utils/constants'

const AllData = () => {
  return (
    <section className="w-full flex flex-col items-start justify-center pb-20">
      
      <h1 className='text-xl mb-2 font-medium'>Pencarian Rekam Medis</h1>
      <article className='w-full bg-white rounded-lg shadow-lg px-4 py-6'>

        <div className='w-full flex gap-x-4 items-center justify-end'>
          
          <div className='w-[40%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>rekam medis</label>
            <div className='flex bg-lightGrey px-2 w-full rounded-md items-center'>
              <Search size={20} />
              <input type="text" placeholder='468749' className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`} />
            </div>
          </div>

          <div className='w-[25%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>NIK</label>
            <div className='flex bg-lightGrey px-2 w-full rounded-md items-center'>
              <IdCard size={20} />
              <input type="text" placeholder='nomor induk keluarga' className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`} />
            </div>
          </div>

          <div className='w-[25%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>nama</label>
            <div className='flex bg-lightGrey px-2 w-full rounded-md items-center'>
              <CircleUser className='stroke-greyPrimary' size={20} />
              <input type="text" placeholder='nama pasien' className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`} />
            </div>
          </div>


          <div className='w-[10%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium invisible'>Cari data</label>
            <button type="submit" className='text-center text-white text-sm px-2 py-3 rounded-md cursor-default bg-blue-500'>Search</button>
            
          </div>

        </div>

        <div className="w-full flex gap-x-4 items-center justify-between mt-6">
          <div className='w-[20%] flex flex-col gap-y-1 rounded-lg'>
            <label htmlFor="" className='text-[14px] font-medium'>Gender</label>
            <select name="" id="" className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
              <option value="">All</option>
              <option value="">Pria</option>
              <option value="">Wanita</option>
            </select>
          </div>

          <div className='w-[20%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>Tujuan</label>
            <div className='flex bg-lightGrey w-full rounded-md items-center'>
              <select name="" id="" className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
                <option value="">All</option>
                <option value="">Berobat</option>
                <option value="">Konsultasi</option>
                <option value="">Cek Kesehatan</option>
                <option value="">Kontrol</option>
              </select>
            </div>  
          </div>

          <div className='w-[20%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>Status</label>
              <select name="" id="" className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
                <option value="">All</option>
                <option value="">Ditangani</option>
                <option value="">Sedang Ditangani</option>
                <option value="">Belum Ditangani</option>
              </select>
          </div>

          <div className='w-[20%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>Kunjungan Terakhir</label>
            <input type='date' name="" id=""   className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`} />
          </div>

          <div className='w-[20%] flex flex-col gap-y-1'>
            <label htmlFor="" className='text-[14px] font-medium'>Gol Darah</label>
            <select name="" id="" className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
              <option value="">All</option>
              <option value="">A</option>
              <option value="">A+</option>
              <option value="">A-</option>
              <option value="">B</option>
              <option value="">B+</option>
              <option value="">B-</option>
              <option value="">AB</option>
              <option value="">AB+</option>
              <option value="">AB-</option>
              <option value="">O</option>
            </select>
          </div>
        </div>

      </article>

      <article className="w-full bg-white rounded-lg shadow-lg px-4 py-6 mt-6">

          {/* title and info */}
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-xl font-medium tracking-wide'>Data Pasien</h3>
            <h5 className='text-sm tracking-wide text-greySecondary flex gap-x-4 items-center justify-center'>
              <ChevronLeft size={20} className='hover:stroke-blue-500 duration-200 ease-in-out'/>
              <span className='text-blue-500'>1</span> of <span className='text-blue-500'>40</span> 
              <ChevronRight size={20} className='hover:stroke-blue-500 duration-200 ease-in-out' />
            </h5>
          </div>

          {/* table header */}
          <div className='w-full flex items-center gap-x-2 mt-8'>
            <p className='text-sm font-medium w-[15%]'>Rekam medis</p>
            <p className='text-sm font-medium w-[15%]'>Nama</p>
            <p className='text-sm font-medium w-[10%]'>Gender</p>
            <p className='text-sm font-medium w-[12%]'>Tujuan</p>
            <p className='text-sm font-medium w-[10%] truncate text-center'>Resiko</p>
            <p className='text-sm font-medium w-[15%] text-center'>NIK</p>
            <p className='text-sm font-medium w-[15%] text-center'>Registrasi</p>
            <p className='text-sm font-medium w-[13%] text-center'>Status</p>
          </div>

          {/* isi data */}
          <div className='w-full mt-8 flex flex-col gap-y-1'>
            {dummyData.map((item, index) => {
              return (
                <TableData key={index} {...item} />
              )
            })}
          </div>
      </article>

    </section>
  )
}

export default AllData