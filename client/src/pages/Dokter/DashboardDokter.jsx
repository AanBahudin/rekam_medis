import React from 'react'
import customFetch from '../../utils/customFetch'
import { redirect, useLoaderData } from 'react-router'

export const loader = async() => {
  try {
    const {data} = await customFetch.get('/dokter/data')
    return data
  } catch (error) {
    console.log(error);
    return redirect('/')
  }
}

const DashboardDokter = () => {

  const data = useLoaderData()
  console.log(data)

  return (
    <div className='flex-1 bg-white h-full'>
      <h1>Dashboard Dokter</h1>
    </div>
  )
}

export default DashboardDokter