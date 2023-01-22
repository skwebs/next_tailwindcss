import { regFormAction } from '@/store'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'


const Register = () => {
  const dispatch = useDispatch()
  const regForm = useSelector((select) => select.regForm);
  useEffect(() => {
    let notLoaded = true;
    if (notLoaded) {
      console.log("regForm: ", regForm.userData);
    }
    return () => {
      notLoaded = false;
    }
  }, [regForm])

  // const handleChange = useCallback(() => dispatch({ type: 'increase-counter' }), []);
  // const handleChange = (e) => {
  //   // dispatch(regFormAction.onchange(e));
  //   console.log()
  // }
  const handleChange = e => {
    const { name, value, pattern, title } = e.target;
    // setUserData(prev => ({ ...prev, [name]: value }));
    dispatch(regFormAction.onchange({ name, value }));
    console.log(e.target.value);
  }

  const handleSubmit = e => {
    console.log(e);
  }

  const getData = () => {
    console.log(secureLocalStorage.getItem("ud"));
  }

  useEffect(() => {
    // secureLocalStorage.setItem("object", {
    //   message: "This is testing of local storage",
    // });
    // secureLocalStorage.setItem("number", 12);
    // secureLocalStorage.setItem("string", "12");
    // secureLocalStorage.setItem("boolean", true);
    // let value = secureLocalStorage.getItem("object");
    // console.log(value)
  }, []);

  return (
    <>
      <Head>
        <title>Register Student</title>
        <meta name="theme-color" content="" />
      </Head>
      <div className="w-full my-py">
        <div className='my-container'>
          <form onSubmit={handleSubmit}>

            <input className='block' onChange={handleChange} value={regForm?.userData?.father_name} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="father_name" id="father_name" required placeholder="Father's Name" />

            <input className='block mt-5' onChange={handleChange} value={regForm?.userData?.mother_name} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="mother_name" id="father_name" required placeholder="Mother's Name" />

            <input className='px-4 py-2 bg-sky-500 rounded text-white block mt-3' type="submit" value={`Submit`} />

          </form>
          <button onClick={() => getData()}>Get Data</button>
          {/* <input type="text" name='name' placeholder='Name' onChange={handleChange} /> */}
        </div>
      </div>
    </>
  )
}

export default Register
