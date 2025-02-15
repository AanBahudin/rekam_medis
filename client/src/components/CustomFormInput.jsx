const CustomFormInput = ({ label, placeholder, name, children, width='w-full', isRequired, isFirstItem = false, type='text', inputType = 'input', list = [], defaultValue }) => {
  return (
    <div className={`${width} flex flex-col gap-y-1`}>
        <label htmlFor="" className='text-[14px] font-medium truncate lowercase'>{label}</label>
        <div className='flex bg-lightGrey px-2 w-full rounded-md items-center'>
            {children}

            { inputType === 'input' ? (
                <input name={name} id={name} type={type} placeholder={placeholder} defaultValue={defaultValue} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px] focus:placeholder:text-transparent`} autoFocus={isFirstItem} required={isRequired} autoComplete='off'/>
            ) : (

                inputType === 'select' ? (
                    <select name={name} id={name} defaultValue={defaultValue} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
                        {list.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                ) : (
                    <textarea name={name} id={name} rows={5} placeholder={placeholder} defaultValue={defaultValue} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px] resize-none`}></textarea>
                )
            ) }
        </div>
    </div>
  )
}

export default CustomFormInput