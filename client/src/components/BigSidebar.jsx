import { links } from '../utils/constants'
import { NavLink } from 'react-router';
import { useAdminContext } from '../pages/Admin/AdminLayout';

const BigSidebar = () => {

    const {showSidebar, toggleSidebar} = useAdminContext();

  return (
    <div className={` bg-lightGrey ${showSidebar ? 'w-[15%]' : 'w-0'} h-full ease-in-out duration-200 py-10`}>

        <div className={`px-6 ${!showSidebar ? 'hidden' : 'visible'}`}>
            <h2 className={`font-semibold text-md ${ showSidebar ? 'visible' : 'hidden' } duration-200 ease-in-out`}>Bhakti Medika</h2>
        </div>

        <section className={`w-full mt-20 ${showSidebar ? 'visible' : 'hidden'}`}>
            {links.map((item, index) => {
                return <NavLink className={
                    ({ isActive }) => `w-full flex gap-x-8 px-4 py-6 cursor-default border-b-[1px] ease-in-out duration-200 border-transparent hover:bg-[#DCDCDD] ${isActive ? 'bg-blue-400 hover:bg-blue-400' : ''}`
                } to={item.path} end>
                    {item.icon}
                    {item.name}
                </NavLink>
            })}
        </section>
    </div>
  )
}

export default BigSidebar