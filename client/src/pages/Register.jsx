import { useState } from 'react'
import { mainLogo } from '../assets/images'
import { FormInput } from '../components'
import { toast } from 'react-toastify'
import { Form, redirect, useNavigation } from 'react-router';
import customFetch from '../utils/customFetch'

export const action = async({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Register successfully')
    return redirect('/')

  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Something is wrong');
    return error
  }
}

const Register = () => {

  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className='w-fullScreen h-fullScreen grid grid-cols-2'>

      <section className='bg-gradient bg-cover flex flex-col items-start justify-center px-10 h-full w-halfScreen'>
        <h4 className='text-greyPrimary text-2xl font-semibold select-none'>Welcome to</h4>
        <h1 className='text-white text-7xl font-semibold select-none'>Rekam Medis</h1>

      </section>


      <section className='h-full w-halfScreen max-w-full flex flex-col items-start justify-center px-20'>
        <div className='w-[80%] mx-auto'>
          <img className='w-12 h-12' src={mainLogo} />
          <h1 className='text-5xl font-semibold text-greyPrimary mt-8 mb-4 tracking-wider'>Register</h1>
          <p className='text-greySecondary text-md'>Lorem ipsum dolor sit amet consectetur adipisicing </p>


          {/* INPUT */}
          <Form method='POST' className='my-4 w-full] mx-auto odd:mb-10'>

            <FormInput 
              labelName="nama"
              inputType="text"
              inputName="nama"
              isFirstinput={true}
            />

            <FormInput 
              labelName="email"
              inputType="email"
              inputName="email"
            />

            <FormInput 
              labelName="password"
              inputType="password"
              inputName="password"
              showPass={isChecked}
              isFirstinput={false}
            />


            <div className='flex items-center gap-x-4 mt-4 mb-6'>
              <input className='w-4 h-4 border-1 border-primary my-auto' type="checkbox" name="showPass" id="showPass" onChange={() => setIsChecked(!isChecked)}/>
              <label className='text-sm my-auto font-medium text-greyPrimary outline-none ring-0 border-none' htmlFor="showPass">Show password</label>
            </div>

            <button type='submit' disabled={isSubmitting} className='w-full bg-blue-400 text-white font-medium py-[12px] text-sm rounded-lg cursor-default'>
              { isSubmitting ? 'Submitting ...' : 'Register' }
            </button>
          </Form>
        </div>
        
      </section>
    </div>
  )
}

export default Register  