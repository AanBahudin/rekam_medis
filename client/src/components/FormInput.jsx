import React from 'react'

const FormInput = ({ labelName, inputType, inputName, isFirstinput, showPass }) => {
  return (
    <div className='flex flex-col '>
        <label className='font-medium capitalize my-2' htmlFor={inputName}>{labelName}</label>

        <input 
          required
          type={inputType === "password" ? ( showPass ? 'text' : 'password' ) : inputType}
          name={inputName}
          placeholder='' 
          autoFocus={isFirstinput}
          autoComplete='off'
          className='text-sm px-4 py-2 rounded-md border-[2px] border-greySecondary' />
    </div>
  )
}

export default FormInput