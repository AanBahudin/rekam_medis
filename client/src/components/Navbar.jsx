import { Menu, User } from 'lucide-react';
import { useAdminContext } from '../pages/Admin/AdminLayout'

const Navbar = () => {

    const { toggleSidebar } = useAdminContext()

  return (
    <div className='w-full h-[70px] flex items-center justify-between bg-lightGrey px-10'>
        <Menu size={30} onClick={toggleSidebar} />

        <section className='flex items-center justify-center gap-x-2 my-auto'>
            <User className='my-auto' size={20} />
            <h5 className='text-sm my-auto text-center'>Admin</h5>
        </section>
    </div> 
  )
}

export default Navbar