import { UserCog } from 'lucide-react';
import { NavLink } from 'react-router';
import { useAppContext } from '../App';

const BigSidebar = ({user, links }) => {

    const {showSidebar} = useAppContext()

    return (
        <div className={` bg-slate-50 ${showSidebar ? 'w-[15%]' : 'w-0'} h-full ease-in-out duration-200 py-10`}>

            <div className={`px-6 ${!showSidebar ? 'hidden' : 'visible'}`}>
                <h2 className={`font-semibold text-md ${ showSidebar ? 'visible' : 'hidden' } duration-200 ease-in-out`}>Bhakti Medika</h2>
            </div>

            <section className={`w-full mt-20 ${showSidebar ? 'visible' : 'hidden'} flex flex-col gap-y-2`}>
                {links.map((item, index) => {
                    return <NavLink key={index} className={
                        ({ isActive }) => `w-full flex gap-x-8 group px-8 rounded-xl text-slate-900 py-4 text-sm cursor-default border-b-[1px] ease-in-out duration-200 border-transparent hover:bg-blueCard/20 ${isActive ? 'bg-blueCard/50 hover:bg-blueCard/80' : ''}`
                    } to={item.path} end>
                        {item.icon}
                        {item.name}
                    </NavLink>
                })}
                
                {
                    user?.role !== 'super admin' ? null : (
                        <NavLink key={5} className={
                            ({ isActive }) => `w-full flex gap-x-8 group px-8 text-slate-800 py-4 text-sm cursor-default border-b-[1px] ease-in-out duration-200 border-transparent hover:bg-blueCard/20 ${isActive ? 'bg-blueCard/80 hover:bg-blueCard' : ''}`
                        } to='all-admin' end>
                                <UserCog  className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' />
                                Admin
                        </NavLink>
                    )
                }
            </section>
        </div>
    )
}

export default BigSidebar