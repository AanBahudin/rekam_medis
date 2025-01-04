import React from 'react'
import customFetch from '../../utils/customFetch';
import { useLoaderData, Form, useNavigation } from 'react-router';
import { toast } from 'react-toastify';

export const action = async({ request }) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      await customFetch.patch(`admin/${data.acceptedId}`, data)
      return toast.success('Successfully')
    } catch (error) {
      toast.error(error.response.data.msg)
      return error
    }
    return data
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get('/admin/data-admin');
    return data;
  } catch (error) {
    console.log(error);
    
    return redirect('/');
  }
}

export const AllAdmin = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center text-center'>
        <h1>Loading</h1>
      </div>
    )
  }

  const data = useLoaderData()
  const { activeAdmin, requestedAdmin }  = data

  return (
    <section className='w-full bg-white rounded-md p-4'>
      
      <article className='w-full h-fit'>

        <h5 className='text-xl font-medium '>Active Admin</h5>
        <div className='w-full grid grid-cols-4 gap-x-6 place-items-start mt-4'>
          {activeAdmin.map((item, index) => {
            return (
              <div key={index} className='w-full bg-lightGrey rounded shadow-md p-4'>
                <h2 className='text-lg font-medium'>{item.nama}</h2>
                <p className='text-[12px]'>{item.email}</p>
                <p className='text-[12px] mt-2'>{item.role}</p>
              </div>
            )
          })}
        </div>
      </article>

      <article className='w-full h-full mt-10'>
        <h5 className='text-xl font-medium '>Requested Admin</h5>
          <div className='w-full grid grid-cols-4 place-items-start mt-4'>
            {requestedAdmin.length === 0 ? (
              <h1>tidak ada permintaan admin</h1>
            ) : (
              <>
                {requestedAdmin.map((item, index) => {
                  return (
                    <div key={index} className='w-full bg-lightGrey rounded shadow-md p-4'>
                      <h2 className='text-lg font-medium'>{item.nama}</h2>
                      <p className='text-[12px]'>{item.email}</p>
                      <p className='text-[12px] mt-2'>{item.role}</p>
                      <Form method="POST">
                        <input type="hidden" value={item._id} name='acceptedId' />
                        <input type="hidden" value={true} name='isApproved' />
                        <button type='submit' className='w-full text-[12px] mt-2 bg-blueCard p-1 rounded-md'>approve</button>
                      </Form>

                      <Form method="POST">
                        <input type="hidden" value={item._id} name='acceptedId' />
                        <input type="hidden" value={false} name='isApproved' />
                        <button type='submit' className='w-full text-[12px] mt-2 bg-redCard p-1 rounded-md'>declined </button>
                      </Form>
                    </div>
                  )
                })}
              </>
            )}
            
          </div>
      </article>
    </section>
  )
}

export default AllAdmin