import { Outlet, redirect, useLoaderData, useNavigate, useSearchParams } from 'react-router'
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
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState({
    _id: "",
    nik: "",
    nama: "",
    jenisKelamin: "",
    tujuanBerobat: "",
    status: "",
    createdAt: "",
    golonganDarah: "",
  });

  const handleFilterChange = (event, filterName) => {
    setFilter((prev) => ({
      ...prev,
      [filterName]: event.target.value,
    }));
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    

    // Tambahkan filter yang tidak kosong ke queryParams
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        queryParams.append(key, filter[key]);
      }
    });

    // Arahkan ke URL baru dengan query params
    navigate(`?${queryParams.toString()}`);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    navigate(`?${params.toString()}`);
  };

  const removeFilter = () => {
    setFilter({
      _id: "",
      nik: "",
      nama: "",
      jenisKelamin: "",
      tujuanBerobat: "",
      status: "",
      createdAt: "",
      golonganDarah: "",
    });

    navigate("/admin/all-data");
  };


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
      filter,
      setFilter,
      showSidebar,
      toggleSidebar,
      handleFilterChange,
      handlePageChange,
      handleSearch,
      removeFilter,
      logoutUser
    }}>
      <div className='w-full relative h-[100vh] flex overflow-hidden'>
        <BigSidebar logoutFunction={logoutUser} />

        <div className='flex-1 w-full'>
          <Navbar />
          <div className='p-10 flex-1 overflow-y-scroll bg-white h-[90%]'>
            <Outlet />
          </div>
        </div>
      </div>
    </AdminDashboardContext.Provider>
  )
}

export const useAdminContext = () => useContext(AdminDashboardContext)
export default AdminLayout