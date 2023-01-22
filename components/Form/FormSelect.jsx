const FormSelect = ({ children, id, className = "", inputWrapperClass = "", underlineClass = "", label, labelClass = "", wrapperClass = "", ...inputAtt }) => {
  return (
    <>
      <div className={`${wrapperClass} pt-2`}  >
        <div className={`${inputWrapperClass} h-10 relative z-0`}>

          <select {...inputAtt} id={id} className={`${className} h-full  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none dark:text-white focus:outline-none focus:ring-0 peer/select`} placeholder=" " >
            {children}
          </select>

          <label htmlFor={id} className={`${labelClass} absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform  top-3  origin-[0] peer-focus/select:left-0 peer-valid/select:left-0 peer-hover/select:text-blue-600 peer-focus/select:text-blue-600  dark:peer-focus/select:text-gray-300 dark:peer-valid/select:text-gray-300 scale-100 translate-y-0 peer-focus/select:scale-75 peer-valid/select:scale-75 peer-focus/select:-translate-y-6 peer-valid/select:-translate-y-6 peer-focus/select:z-10 peer-valid/select:z-10 z-50 dark:peer-hover/select:text-gray-300 dark:focus:text-white peer-required/select:after:content-['*'] peer-required/select:after:text-red-500 dark:peer-required/select:after:text-red-700 peer-required/select:after:font-bold peer-required/select:after:ml-1 `}>{label}</label>

          <span className={`${underlineClass}  peer-hover/select:scale-x-100 peer-focus/select:scale-x-100 transition-all scale-x-0 duration-300 absolute bottom-0 border-b-2 border-blue-600 w-full dark:border-gray-300 `} ></span>

        </div>
      </div>
    </>
  )
}
// -translate-y-6 scale-75 peer-required/select:after:content-['*'] peer-required/select:after:text-red-500 dark:peer-required/select:after:text-red-700 peer-required/select:after:font-bold
export default FormSelect
