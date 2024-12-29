import { FormInput } from '../../components'


const AddData = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start">
      
      <article className='flex'>
        <div className=''>
          <FormInput inputName='search' inputType='text' labelName='search'  />
        </div>
      </article>

    </section>
  )
}

export default AddData