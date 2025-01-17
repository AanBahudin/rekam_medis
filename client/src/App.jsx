import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'
import { AdminDashboardLayout, AddDataPage, AddRiwayat, AllAdminPage, AllDataPage, EditRekamMedis, Kunjungan, ProfilePage, SingleDataPage, StatsPage } from './pages/Admin'

import { loader as AdminLayoutLoader } from './pages/Admin/AdminLayout'
import { loader as AdminPageLoader } from './pages/Admin/AllAdmin'
import { loader as statsPageLoader } from './pages/Admin/Stats'
import { loader as allDataPageLoader } from './pages/Admin/AllData'
import { loader as singleDataPageLoader } from './pages/Admin/SingleData'
import { loader as editDataPageLoader } from './pages/Admin/EditRekamMedis'
import { loader as kunjunganPageLoader } from './pages/Admin/AddRiwayat'

import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
import { action as addDataAction } from './pages/Admin/AddData'
import { action as allAdminAction } from './pages/Admin/AllAdmin'
import { action as singleDataAction } from './pages/Admin/SingleData'
import { action as editDataAction } from './pages/Admin/EditRekamMedis'
import { action as kunjunganAction } from './pages/Admin/AddRiwayat'

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
          loader: AdminLayoutLoader,
          children: [
            {
              index: true,
              element: <StatsPage />,
              loader: statsPageLoader
            },
            {
              path: 'all-data',
              element: <AllDataPage />,
              loader: allDataPageLoader,
            },
            {
              path: 'add-data',
              action: addDataAction,
              element: <AddDataPage />
            },
            {
              path: 'profile',
              element: <ProfilePage />
            },
            {
              path: 'kunjungan/:id',
              element: <Kunjungan />,
              // loader: kunjunganPageLoader,
            },
            {
              path: 'tambah_kunjungan/:id',
              element: <AddRiwayat />,
              loader: kunjunganPageLoader,
              action: kunjunganAction,
            },
            {
              path: 'all-data/:id',
              element: <SingleDataPage />,
              loader: singleDataPageLoader,
              action: singleDataAction
            },
            {
              path: 'edit/:id',
              element: <EditRekamMedis />,
              loader: editDataPageLoader,
              action: editDataAction,
            },
            {
              path: 'all-admin',
              loader: AdminPageLoader,
              action : allAdminAction,
              element: <AllAdminPage />
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