import { useState } from 'react'
import { mainLogo } from '../assets/images'
import { FormInput } from '../components'
import handleErrorMsg from '../utils/handleErrorMessage'
import { Form, redirect, useNavigation } from 'react-router';
import customFetch from '../utils/customFetch'
import { handleToast } from '../utils/handleToast';

export const action = async({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  try {
    const {data : response} = await customFetch.post('/auth/login', data);
    handleToast(1, 'Berhasil Login', 'Selamat datang dihalaman dashboard anda', 2000)
   const role = response.user.role
   if (role === 'Dokter') {
    return redirect('/dokter')
   }
    return redirect('/admin')

  } catch (error) {
    const errMsg = handleErrorMsg(error)
    handleToast(3, 'Terjadi kesalahan', errMsg, 2000)
    return error
  }
}

const Login = () => {

  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className='w-fullScreen h-fullScreen flex p-10 rounded-xl'>
      <section className='h-full w-halfScreen max-w-full flex flex-col items-start justify-center px-20 '>
        <div className='w-[80%] mx-auto'>
          <img className='w-12 h-12' src={mainLogo} />
          <h1 className='text-4xl font-semibold text-greyPrimary mt-8'>Selamat Datang Kembali</h1>
          <p className='text-greySecondary text-md'>Silahkan masuk dengan akun anda</p>


          {/* INPUT */}
          <Form method='POST' className='my-4 w-full] mx-auto odd:mb-10'>

            <FormInput 
              labelName="email"
              inputType="email"
              inputName="email"
              isFirstinput={true}
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

            <button type='submit' disabled={isSubmitting} className='w-full bg-blue-400 text-white font-medium py-[12px] text-sm rounded-lg cursor-default'>{ isSubmitting ? 'Logged in ...' : 'Login' }</button>
          </Form>
        </div>
        
      </section>

      <section className='bg-gradient bg-cover rounded-xl flex flex-col items-start justify-center px-10 h-full w-halfScreen'>
        <h4 className='text-greyPrimary text-2xl font-semibold select-none'>Welcome to</h4>
        <h1 className='text-white text-7xl font-semibold select-none'>Rekam Medis</h1>
      </section>
    </div>
  )
}

export default Login  