
const StatsCard = ({ title, icon, total, color }) => {
  return (
    <div className={`w-[90%] ${color} shadow-xl px-6 py-4 rounded-lg text-greyPrimary select-none`}>
      <h4 className='flex gap-x-2 text-sm'>
        {icon}
        <span className='my-auto capitalize text-[12px]'> {title} </span>
      </h4>

      <h1 className='text-center font-semibold text-3xl my-4 tracking-widest'>{total} <span className='text-[12px] opacity-70 tracking-normal -ml-2 font-normal'>orang</span> </h1>
    </div>
  )
}

export default StatsCard