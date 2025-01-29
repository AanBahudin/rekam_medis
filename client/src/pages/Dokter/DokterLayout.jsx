import React, { useState, createContext, useContext } from 'react'
import { Outlet, useSearchParams, useNavigate } from 'react-router'
import { dokterLink } from '../../utils/constants'
import { BigSidebar, Navbar } from '../../components'

// this loader only to check if user is logged in or they authorized to access this route
export const loader = async() => {
  return null
}

const DokterContext = createContext()

const DokterLayout = () => {

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

  const logoutUser = async() => {
    navigate('/');
    await customFetch.get('/auth/logout');
    handleToast(1, 'Berhasil logout', 'Anda berhasil berhasil logout', 2000)
  }


  return (
    <DokterContext.Provider value={{
      filter,
      setFilter,handleFilterChange,
      handleSearch,
      handlePageChange,
      removeFilter,
      logoutUser
    }}>
      <div className="w-full relative flex h-[100vh] overflow-hidden">
        <BigSidebar links={dokterLink} />

        <div className="flex-1 w-full">
          <Navbar />
          <div className="p-10 flex-1 overflow-y-scroll bg-white h-[90%]">
            <Outlet />
          </div>
        </div>
      </div>
    </DokterContext.Provider>
  )
}

export const useDokterContext = () => useContext(DokterContext)
export default DokterLayout