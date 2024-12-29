import { StatsCard, ActivityCard } from "../../components"
import { statsCardData, activityData, recentPasien } from "../../utils/constants"
import { ChartNoAxesCombined } from 'lucide-react'
import { BarChart, Bar, Tooltip, YAxis, XAxis, PieChart, Pie, ResponsiveContainer } from 'recharts'

const Stats = () => {

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
          {statsCardData.map((item, index) => {
            return <StatsCard key={index} {...item} />
          })}
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
              {activityData.map((item, index) => {
                return <ActivityCard {...item} key={index} />
              })}
            </div>
          </div>

          <div className="col-span-8 bg-white rounded-2xl h-[60vh] px-6 py-10 overflow-auto no-scrollbar">
              <h4 className="font-semibold text-md mb-6">Pasien Terbaru</h4>

              <table className="w-full h-full border-separate border-spacing-y-6  overflow-y-scroll no-scrollbar">
                <thead className="bg-transparent py-2 border-y-[1px] bro">
                  <tr>
                    <th className="text-[14px] font-semibold text-left  opacity-80">ID pasien</th>
                    <th className="text-[14px] font-semibold text-start opacity-80">Nama</th>
                    <th className="text-[14px] font-semibold text-start opacity-80">Gender</th>
                    <th className="text-[14px] font-semibold text-start opacity-80">Usia</th>
                    <th className="text-[14px] font-semibold text-start opacity-80">Resiko</th>
                  </tr>

                  {recentPasien.map((item, index) => {
                    return (
                      <tr>
                        <td className="text-[12px] m-4 font-medium text-start opacity-80">{item.idPasien}</td>
                        <td className="text-[12px] m-4 font-medium text-start opacity-80">{item.user}</td>
                        <td className="text-[12px] m-4 font-medium text-start opacity-80">{item.gender}</td>
                        <td className="text-[12px] m-4 font-medium text-start opacity-80">{item.usia}</td>
                        <td className={`text-[12px] px-2 font-normal text-center opacity-80 w-[30px] rounded-full ${ item.kondisi === "Tinggi" ? "bg-redCard" : ( item.kondisi === "Sedang" ? "bg-yellowCard" : "bg-greenCard" ) }`}>{item.kondisi}</td>
                      </tr>
                    )
                  })}
                </thead>
              </table>
          </div>

        </section>

    </div>
  )
}

export default Stats