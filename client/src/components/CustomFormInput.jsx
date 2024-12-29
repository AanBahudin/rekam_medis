const CustomFormInput = ({ label, placeholder, name, children, width, isRequired, isFirstItem = false, type='text', inputType = 'input', list = [], defaultValue }) => {
  return (
    <div className={`${width} flex flex-col gap-y-1`}>
        <label htmlFor="" className='text-[14px] font-medium truncate'>{label}</label>
        <div className='flex bg-lightGrey px-2 w-full rounded-md items-center'>
            {children}

            { inputType === 'input' ? (
                <input name id={name} type={type} placeholder={placeholder} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`} autoFocus={isFirstItem} required={isRequired} autoComplete='off'/>
            ) : (

                inputType === 'select' ? (
                    <select name={name} id={name} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}>
                        {list.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                ) : (
                    <textarea name={name} id={name} rows={5} placeholder={placeholder} className={`px-2 py-3 bg-lightGrey ${children ? 'ml-2' : ''} rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px] resize-none`}></textarea>
                )
            ) }
        </div>
    </div>
  )
}

export default CustomFormInput