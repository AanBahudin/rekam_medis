import React from 'react'
import { useLoaderData } from 'react-router'
import { useDokterContext } from './DokterLayout'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async({ request }) => {
  const url = new URL(request.url)

  // ambil semua query params
  const params = url.searchParams.toString()
  try {
    const {data} = await customFetch.get(`/medis?${params}`);
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const AntrianDokter = () => {

  const data = useLoaderData();
  const { search } = useLocation();
  const { filter, setFilter, handleFilterChange, handleSearch, removeFilter, handlePageChange } = useDokterContext()

  return (
    <div>AntrianDokter</div>
  )
}

export default AntrianDokter