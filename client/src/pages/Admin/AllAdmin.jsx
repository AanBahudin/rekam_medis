import React from 'react'

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get('/admin/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
}

export const AllAdmin = () => {
  return (
    <div>AllAdmin</div>
  )
}

export default AllAdmin