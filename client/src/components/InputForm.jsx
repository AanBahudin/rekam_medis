import React from 'react'

const InputForm = ({ inputType = 'text', label, inputName, defaultValue, placeholder, isRequired = true, isFocus = false }) => {
  return (
    <section className='w-full flex flex-col'>
        <label htmlFor={inputName} className='text-slate-700 font-semibold capitalize text-sm'>{label}</label>
        <input 
        name={inputName}
        id={inputName}
        type={inputType}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete='off'
        required={isRequired}
        autoFocus={isFocus}
        className='bg-transparent border-[2px] border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1 outline-none text-[12px] focus:placeholder:text-transparent'/>

    </section>
  )
}

export default InputForm
