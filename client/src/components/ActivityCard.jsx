import { man } from '../assets/images'
import { UserPlus } from 'lucide-react'

const ActivityCard = ({ title, desc, user, idPasien, waktu }) => {
  return (
    <article className="w-full flex justify-around rounded-lg hover:shadow-md p-4 duration-200 ease-in-out">
        <img src={man} alt="user" className="w-10 h-10" />

        <div>
            <h4 className='flex gap-x-2 text-sm items-center justify-start text-greyPrimary'>
              <UserPlus size={10} className="my-auto" />
              <span className='my-auto capitalize text-[10px] font-semibold'> {title} </span>
            </h4>
            <h5 className="text-[12px]"> 
                <span className="font-medium">Admin </span>
                {desc}
            </h5>
            <p className="font-medium text-[12px]">{user} - {idPasien}</p>
            <p className="text-[10px] mt-1 italic opacity-75">{waktu}</p>
        </div>
    </article>
  )
}

export default ActivityCard