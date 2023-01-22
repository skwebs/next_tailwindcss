const FormInputDate = ({ id, className = "", inputWrapperClass = "", underlineClass = "", label, labelClass = "", wrapperClass = "", ...inputAtt }) => {
  return (
    <>
      <div className={`${wrapperClass} pt-2`}  >
        <div className={`${inputWrapperClass} h-10 relative z-0`}>
          <input {...inputAtt} type="date" id={id} className={`${className} h-full  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`} placeholder=" " />

          <label htmlFor={id} className={`${labelClass} absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-hover:text-blue-600 peer-focus:text-blue-600 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:z-10 peer-placeholder-shown:z-50 dark:peer-hover:text-gray-300 dark:peer-placeholder-shown:focus:text-white peer-required:after:content-['*'] peer-required:after:text-red-500 dark:peer-required:after:text-red-700 peer-required:after:font-bold peer-required:after:ml-1`}>{label}</label>

          <span className={`${underlineClass}  peer-hover:scale-x-100 peer-focus:scale-x-100 transition-all scale-x-0 duration-300 absolute bottom-0 border-b-2 border-blue-600 w-full dark:border-gray-300 `} ></span>
        </div>
      </div>
    </>
  )
}

export default FormInputDate
