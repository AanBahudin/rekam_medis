import React, { createContext, useContext } from 'react'
import { useLoaderData } from 'react-router'

// this loader only to check if user is logged in or they authorized to access this route
export const loader = async() => {
  return null
}

const DokterContext = createContext()

const DokterLayout = () => {
  return (
    <DokterContext.Provider value={{}}>
      <div>DokterLayout</div>
    </DokterContext.Provider>
  )
}

export const useDokterContext = () => useContext(DokterContext)
export default DokterLayout