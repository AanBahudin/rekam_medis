import { createContext, useContext, useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'
import { loginAction, registerAction } from './pages'

import { AdminDashboardLayout, AddDataPage, AddRiwayat, AllAdminPage, AllDataPage, DetailDokterPage, DokterPage, EditRekamMedis, Kunjungan, ProfilePage, SingleDataPage, StatsPage, TambahDokterPage, detailDokterLoader } from './pages/Admin'
import { 
  adminLayoutLoader,
  riwayatPageLoader,
  adminListPageLoader,
  allDataLoader,
  editDataLoader,
  kunjunganLoader,
  detailDataLoader,
  statsPageLoader,
  dokterLoader,
  editDokterLoader,
  addDataPageAction,
  riwayatPageAction,
  editDokterAction,
  editDataAction,
  detailDataAction,
  adminListPageAction,
  tambahDokterAction
 } from './pages/Admin'

import { AntrianDokter, DashboardDokter, DetailAntrian, DokterLayout, ProfilDokter } from './pages/Dokter'
import { dashboardDokterLoader, antrianDokterLoader } from './pages/Dokter'
import EditDokter from './pages/Admin/EditDokter'


const AppContext = createContext()

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LoginPage />,
          action: loginAction
        },
        {
          path: '/register',
          action: registerAction,
          element: <RegisterPage />
        },
        {
          path: '/admin',
          element: <AdminDashboardLayout />,
          loader: adminLayoutLoader,
          children: [
            {
              index: true,
              element: <StatsPage />,
              loader: statsPageLoader
            },
            {
              path: 'all-data',
              element: <AllDataPage />,
              loader: allDataLoader,
            },
            {
              path: 'add-data',
              action: addDataPageAction,
              element: <AddDataPage />
            },
            {
              path: 'dokter',
              element: <DokterPage />,
              loader: dokterLoader
            },
            {
              path: 'dokter/:id',
              element: <DetailDokterPage />,
              loader: detailDokterLoader
            },
            {
              path: 'dokter/edit/:id',
              element: <EditDokter />,
              loader: editDokterLoader,
              action: editDokterAction
            },
            {
              path: 'tambah-dokter',
              element: <TambahDokterPage />,
              action: tambahDokterAction
            },
            {
              path: 'profile',
              element: <ProfilePage />
            },
            {
              path: 'kunjungan/:id/:riwayat',
              element: <Kunjungan />,
              loader: kunjunganLoader,
            },
            {
              path: 'tambah_kunjungan/:id',
              element: <AddRiwayat />,
              loader: riwayatPageLoader,
              action: riwayatPageAction,
            },
            {
              path: 'all-data/:id',
              element: <SingleDataPage />,
              loader: detailDataLoader,
              action: detailDataAction
            },
            {
              path: 'edit/:id',
              element: <EditRekamMedis />,
              loader: editDataLoader,
              action: editDataAction,
            },
            {
              path: 'all-admin',
              loader: adminListPageLoader,
              action : adminListPageAction,
              element: <AllAdminPage />
            }
            
          ]
        },
        {
          path: '/dokter',
          element: <DokterLayout />,
          // loader: ,
          children: [
            {
              index: true,
              element: <DashboardDokter />,
              loader: dashboardDokterLoader,
            },
            {
              path: 'antrian',
              element: <AntrianDokter />,
              loader: antrianDokterLoader,
            },
            {
              path: 'antrian/:id',
              element: <DetailAntrian />,
              // loader: ,
              // action : ,
            },
            {
              path: 'profil',
              element: <ProfilDokter />,
              // loader: ,
              // action: ,
            }
          ]
        }
      ]
    }
  ])

  const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <AppContext.Provider value={{
      showSidebar,
      toggleSidebar
    }}>
      <div className='h-[100vh] w-full'>
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export default App