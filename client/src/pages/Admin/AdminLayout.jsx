import { Outlet } from 'react-router'
import { BigSidebar, Navbar } from '../../components'
import { useState, useContext, createContext } from 'react'


const AdminDashboardContext = createContext();

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const AdminLayout = () => {

  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (

    <AdminDashboardContext.Provider value={{
      showSidebar,
      toggleSidebar
    }}>
      <div className='w-full h-[100vh] flex overflow-hidden'>
        <BigSidebar />

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