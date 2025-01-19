import React from 'react'

const InputSelect = ({ inputName, label, defaultValue, list }) => {
  return (
    <section className='w-full flex flex-col'>
        <label htmlFor={inputName} className='text-slate-700 font-semibold capitalize text-sm'>{label}</label>

        <select name={inputName} id={inputName} required className='bg-transparent border-[2px] border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1 outline-none text-[12px] focus:placeholder:text-transparent'>
            {list.map((item, index) => {
                return <option value={item}>{item}</option>
            })}
        </select>
    </section>
  )
}

export default InputSelect
