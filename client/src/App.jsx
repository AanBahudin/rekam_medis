import { createBrowserRouter, RouterProvider } from 'react-router'
import { ErrorPage, HomeLayoutPage, LoginPage, RegisterPage } from './pages'
import { AdminDashboardLayout, AddDataPage, AllDataPage, ProfilePage, SingleDataPage, StatsPage } from './pages/Admin'
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