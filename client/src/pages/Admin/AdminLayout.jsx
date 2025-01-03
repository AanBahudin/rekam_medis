import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router'
import { BigSidebar, Navbar } from '../../components'
import customFetch from '../../utils/customFetch'
import { useState, useContext, createContext } from 'react'
import { toast } from 'react-toastify'


export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get('/admin/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
}

const AdminDashboardContext = createContext();


const AdminLayout = () => {  

  const { user } = useLoaderData()
  const navigate = useNavigate()

  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async() => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  }

  return (

    <AdminDashboardContext.Provider value={{
      user,
      showSidebar,
      toggleSidebar,
      logoutUser
    }}>
      <div className='w-full h-[100vh] flex overflow-hidden'>
        <BigSidebar logoutFunction={logoutUser} />

        <div className='flex-1'>
          <Navbar />
          <div className='p-10 h-full overflow-y-scroll bg-lightGrey'>
            <Outlet />
          </div>
        </div>
      </div>
    </AdminDashboardContext.Provider>
  )
}

export const useAdminContext = () => useContext(AdminDashboardContext)
export default AdminLayout