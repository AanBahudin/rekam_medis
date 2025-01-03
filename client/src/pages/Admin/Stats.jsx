import { StatsCard } from "../../components"
import { activityData } from "../../utils/constants"
import { Link } from 'react-router'
import { ChartNoAxesCombined, Users, ShieldAlert, ShieldMinus, ShieldPlus, UserPlus } from 'lucide-react'
import { BarChart, Bar, Tooltip, YAxis, XAxis, PieChart, Pie, ResponsiveContainer } from 'recharts'
import customFetch from "../../utils/customFetch"
import { toast } from "react-toastify"
import { man } from '../../assets/images'
import { useLoaderData } from "react-router"

export const loader = async() => {
  try {
    const { data } = await customFetch('/medis/stats')
    return data
  } catch (error) {
    toast.error('terjadi kesalahan')
    console.log(error.response.data.msg)
    return error.response.data.msg
  }
}

const Stats = () => {

  const data = useLoaderData()
  console.log(data);
    
  

  const userActivity = [
    {date: 'Senin', activeUser: 149},
    {date: 'Selasa', activeUser: 130},
    {date: 'Rabu', activeUser: 91},
    {date: 'Kamis', activeUser: 171},
    {date: 'Jumat', activeUser: 37},
    {date: 'Sabtu', activeUser: 65},
    {date: 'Minggu', activeUser: 178},
  ]

  const userActivity2 = [
    {date: 'Senin', activeUser: 149},
    {date: 'Selasa', activeUser: 130},
    {date: 'Rabu', activeUser: 91},
    {date: 'Kamis', activeUser: 171},
    {date: 'Jumat', activeUser: 37},
    {date: 'Sabtu', activeUser: 65},
    {date: 'Minggu', activeUser: 178},
  ]

  return (
    <div className="w-full text-greyPrimary">
        
        {/* cards */}
        <section className="w-full grid grid-cols-4 justify-items-center">
          <StatsCard color='bg-blueCard' icon={<Users size={20} />} title="Total Pasien" total={data.totalPasien} />
          <StatsCard color='bg-redCard' icon={<ShieldAlert size={20} />} title="Resiko Tinggi" total={data.totalResiko[0].count} />
          <StatsCard color='bg-yellowCard' icon={<ShieldMinus size={20} />} title="Resiko Sedang" total={data.totalResiko[1]?.count || 0} />
          <StatsCard color='bg-greenCard' icon={<ShieldPlus size={20} />} title="Resiko Rendah" total={data.totalResiko[2]?.count || 0} />
        </section>


        {/* summary */}
        <section className="w-full grid grid-cols-12 mt-6 gap-x-6 text-greyPrimary">
          <div className="w-full h-fit col-span-8 bg-white rounded-2xl flex flex-col items-start justify-center p-10">
            <h4 className='flex gap-x-2 text-sm items-center justify-center mb-6 text-greyPrimary'>
              <ChartNoAxesCombined className="my-auto" />
              <span className='my-auto capitalize text-md font-semibold'> Pertumbuhan Pasien </span>
            </h4>

            <BarChart className="mx-auto" width={700} height={250} data={userActivity}>
              <Tooltip />
              <YAxis dataKey="activeUser"/>
              <XAxis dataKey="date" fontSize={10}/>
              <Bar dataKey='activeUser' fill="#B4E4FF" radius={[10, 10, 0, 0]}>
                
              </Bar>
            </BarChart>

          </div>

          <div className="bg-white flex items-center justify-center col-span-4 rounded-2xl p-6">
            <ResponsiveContainer width= '100%' height='100%'>
              <PieChart width={900} height={250}>
                <Pie data={userActivity} dataKey="activeUser" nameKey="date" cx="50%" cy="50%" outerRadius={50} fill="#F7A4A4" />
                <Pie data={userActivity2} dataKey="activeUser" nameKey="date" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#B4E4FF" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* activity */}
        <section className="w-full grid grid-cols-12 mt-6 mb-20 gap-x-6">
          
          <div className="col-span-4 bg-white rounded-2xl h-[60vh] overflow-auto py-6 no-scrollbar">
            <h4 className="font-semibold text-md mb-6 ml-6">Activity</h4>

            <div className="flex flex-col gap-y-6">
              {data.pasienTerbaru.map((item, index) => {
                return (
                  <article className="w-full flex justify-around rounded-lg hover:shadow-md p-4 duration-200 ease-in-out">
                    <img src={man} alt="user" className="w-10 h-10" />

                    <div>
                        <h4 className='flex gap-x-2 text-sm items-center justify-start text-greyPrimary'>
                          <UserPlus size={10} className="my-auto" />
                          <span className='my-auto capitalize text-[10px] font-semibold'> Pasien Baru </span>
                        </h4>
                        <h5 className="text-[12px]"> 
                            <span className="font-medium">Admin </span>
                            menambahkan pasien baru
                        </h5>
                        <p className="font-medium text-[12px]">{item.nama} - {item._id.slice(0, 10)}...</p>
                        <p className="text-[10px] mt-1 italic opacity-75">{item.createdAt}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="col-span-8 bg-white rounded-2xl h-[60vh] px-6 py-10 overflow-auto no-scrollbar">
              <h4 className="font-semibold text-md mb-6">Pasien Terbaru</h4>

              <div className='w-full flex items-center gap-x-2 mt-8'>
                <p className='text-sm font-medium w-[20%]'>Rekam medis</p>
                <p className='text-sm font-medium w-[20%]'>Nama</p>
                <p className='text-sm font-medium w-[20%]'>Gender</p>
                <p className='text-sm font-medium w-[20%]'>Tujuan</p>
                <p className='text-sm font-medium w-[20%] truncate text-center'>Resiko</p>
              </div>

              {/* isi data */}
              <div className='w-full mt-8 flex flex-col gap-y-1 gap-x-2'>
                {data.pasienTerbaru.map((item, index) => {
                  return (
                    <Link to='/admin/all-data/asdfasdfas' className='w-full cursor-default flex items-center gap-x-2 py-4 border-t-2 border-greySecondary/20 hover:bg-blue-50 duration-200 ease-in-out'>
                      <p className='text-[14px] w-[20%] text-greySecondary truncate'>{item._id.slice(0, 15)}...</p>
                      <p className='text-[14px] w-[20%] text-greySecondary truncate'>{item.nama}</p>
                      <p className='text-[14px] w-[20%] text-greySecondary truncate'>{item.jenisKelamin}</p>
                      <p className='text-[14px] w-[20%] text-greySecondary truncate'>{item.tujuanBerobat}</p>
                      <p className={`text-[14px] w-[20%] text-greySecondary truncate text-center p-1 rounded-full ${ item.statusResiko === 'Tinggi' ? 'bg-redCard' : ( item.statusResiko === 'Sedang' ? 'bg-yellowCard' : 'bg-blueCard' ) }`}>{item.statusResiko}</p>
                    </Link>
                  )
                })}
            </div>
          </div>

        </section>

    </div>
  )
}

export default Stats