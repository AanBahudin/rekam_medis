import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'
import { AdminDashboardLayout, AddDataPage, AllAdminPage, AllDataPage, ProfilePage, SingleDataPage, StatsPage } from './pages/Admin'

import { loader as AdminLayoutLoader } from './pages/Admin/AdminLayout'
import { loader as AdminPageLoader } from './pages/Admin/AllAdmin'
import { loader as statsPageLoader } from './pages/Admin/Stats'
import { loader as allDataPageLoader } from './pages/Admin/AllData'
import { loader as singleDataPageLoader } from './pages/Admin/SingleData'

import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
import { action as addDataAction } from './pages/Admin/AddData'

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
              path: 'all-data/:id',
              element: <SingleDataPage />,
              loader: singleDataPageLoader
            },
            {
              path: 'all-admin',
              loader: AdminPageLoader,
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