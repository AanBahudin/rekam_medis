import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'

import { AdminDashboardLayout, AddDataPage, AddRiwayat, AllAdminPage, AllDataPage, EditRekamMedis, Kunjungan, ProfilePage, SingleDataPage, StatsPage, adminListPageAction } from './pages/Admin'
import { 
  adminLayoutLoader,
  riwayatPageLoader,
  adminListPageLoader,
  allDataLoader,
  editDataLoader,
  kunjunganLoader,
  detailDataLoader,
  statsPageLoader,
  addDataPageAction,
  riwayatPageAction,
  editDataAction,
  detailDataAction
 } from './pages/Admin'




import { AntrianDokter, DashboardDokter, DetailAntrian, DokterLayout, ProfilDokter } from './pages/Dokter'


import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'

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
              // loader: ,
            },
            {
              path: 'antrian',
              element: <AntrianDokter />,
              // loader: ,
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

  return (
    <div className='h-[100vh] w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App