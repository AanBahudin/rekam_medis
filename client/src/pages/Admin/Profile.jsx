import React from 'react'
import { Link } from 'react-router'
import { man } from '../../assets/images'
import { useAdminContext } from './AdminLayout'


const Profile = () => {

  const { user, logout } = useAdminContext()

  return (
    <section className='w-full flex flex-col items-center justify-center gap-x-4'>

      <article className='w-full h-fit p-4 rounded-xl bg-white flex justify-between'>

        <div className='flex flex-col flex-1 py-4 px-6 w-[40%]'>
          <img src={man} alt="avatar" className='w-20 mx-auto' />
          <p className='font-semibold text-xl text-center mt-4'>{user.nama}</p>
          <p className='text-sm text-center opacity-60 mt-2'>{user.email}</p>
          <p className='text-sm text-center opacity-60 mt-2'>{user.role}</p>

          <Link className='w-[50%] mx-auto bg-blueCard text-center cursor-default py-2 rounded-lg text-opacity-60 text-sm mt-4'> edit profil </Link>
          <button onClick={logout} className='w-[50%] mx-auto bg-redCard text-center cursor-default py-2 rounded-lg text-opacity-60 text-sm mt-4'> keluar </button>
        </div>
      </article>

    </section>
  )
}

export default Profile