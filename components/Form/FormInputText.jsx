import React from 'react'

const FormInputText = ({ id, className = "", inputWrapperClass = "", underlineClass = "", label, labelClass = "", wrapperClass = "", ...inputAtt }) => {
  return (
    <>

      <div className={`${wrapperClass} pt-2`}  >
        <div className={`${inputWrapperClass} h-10 relative z-0`}>
          <input {...inputAtt} type="text" id={id} className={`${className} h-full  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`} placeholder=" " />

          <label htmlFor={id} className={`${labelClass} absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:z-10 peer-placeholder-shown:z-50`}>{label}</label>

          <span className={`${underlineClass} peer-focus:scale-x-100 transition-all scale-x-0 duration-300 absolute bottom-0 border-b-2 border-blue-600 w-full`} ></span>
        </div>
      </div>

    </>


    // <div className={`${props?.wrapperClass} 'bg-blue-100 pt-2'`}>
    //   <div class={`${props?.className} relative z-0 h-10`}>
    //     <input type="text" id="floating_standard" class="h-full block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    //     <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{props.label}</label>
    //     <span className={`${props?.underlineClass} absolute bottom-0 w-full border-b-2 border-blue-600 scale-x-0 peer-hover:scale-x-100 transition-all peer-focus:scale-x-100`}></span>
    //   </div>
    // </div >
  )
}

export default FormInputText
