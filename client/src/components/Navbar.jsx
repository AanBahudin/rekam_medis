import { Menu, User } from 'lucide-react';
import { useAppContext } from '../App';

const Navbar = ({user}) => {

  const { toggleSidebar } = useAppContext()

  return (
    <div className='w-full h-[70px] flex items-center justify-between bg-slate-50  px-10'>
        <Menu className='stoke-slate-500 ' onClick={toggleSidebar} />

        <section className='flex items-center justify-center gap-x-2 my-auto'>
            <User className='my-auto stroke-slate-600' size={20} />
            <h5 className='text-sm my-auto text-center'>{user?.nama || 'User'}</h5>
        </section>
    </div> 
  )
}

export default Navbar