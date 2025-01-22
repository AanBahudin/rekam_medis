import React, { createContext, useContext } from 'react'
import { Outlet, useLoaderData } from 'react-router'
import { dokterLink } from '../../utils/constants'
import { BigSidebar, Navbar } from '../../components'

// this loader only to check if user is logged in or they authorized to access this route
export const loader = async() => {
  return null
}

const DokterContext = createContext()

const DokterLayout = () => {
  return (
    <DokterContext.Provider value={{}}>
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