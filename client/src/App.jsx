import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'
import { AdminDashboardLayout, AddDataPage, AllAdminPage, AllDataPage, ProfilePage, SingleDataPage, StatsPage } from './pages/Admin'

import { loader as AdminLayoutLoader } from './pages/Admin/AdminLayout'
import { loader as AdminPageLoader } from './pages/Admin/AllAdmin'

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
          loader: AdminLayoutLoader,
          children: [
            {
              index: true,
              element: <StatsPage />
            },
            {
              path: 'all-data',
              element: <AllDataPage />
            },
            {
              path: 'add-data',
              element: <AddDataPage />
            },
            {
              path: 'profile',
              element: <ProfilePage />
            },
            {
              path: 'all-data/:id',
              element: <SingleDataPage />
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