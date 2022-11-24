import Head from "next/head";
import Link from "next/link";
import OverlayCircularProgress from "@/components/OverlayCircularProgress";
import axios from "@/lib/axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { occupations, qualifications } from "@/constants/form";



const Edit = () => {

  const router = useRouter();

  const [apiData, setApiData] = useState({
    father_name: "", father_contact: "", father_contact_2: "", father_whatsapp: "", father_email: "", father_qualification: "",
    father_occupation: "", father_annual_income: "", father_photo: "",
    mother_name: "", mother_contact: "", mother_contact_2: "", mother_whatsapp: "", mother_email: "", mother_qualification: "",
    mother_occupation: "", mother_annual_income: "", mother_photo: "",
    updated_by: ""
  });

  const [errors, setErrors] = useState(null);

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const handleChange = e => {
    const { name, value } = e.target;
    setApiData(prev => ({ ...prev, [name]: value }));
    console.log(apiData);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await csrf();

    setErrors([]);
    console.log("apiData.data.id", apiData.id);
    try {
      const { data } = await axios.put(`/api/stu-parent/${apiData.id}`, { ...apiData, updated_by: 3 });
      console.log("response-data:", data);
      router.push('/student');
    } catch (error) {
      // Handle Error Here
      // if (error.response.status !== 422) throw error;
      // setErrors(error.response.data.errors);
      setErrors(error);
      console.log(error)
    }

    setApiData({
      father_name: "", father_contact: "", father_contact_2: "", father_whatsapp: "", father_email: "", father_qualification: "",
      father_occupation: "", father_annual_income: "", father_photo: "",
      mother_name: "", mother_contact: "", mother_contact_2: "", mother_whatsapp: "", mother_email: "", mother_qualification: "",
      mother_occupation: "", mother_annual_income: "", mother_photo: "",
      updated_by: ""
    });
  }


  const [isLoading, setIsLoading] = useState(false)

  const getData = async (id, signal) => {
    console.log("id: ", id)
    try {
      const { data } = await axios.get(`/api/stu-parent/${id}`, {
        signal
      });
      setApiData(data.data);

      setIsLoading(false);
      console.log("data", data);
    } catch (error) {
      if (error.name === 'CanceledError') {
        console.log('Other request successfully aborted.');
      } else {
        setErrors(error)
        console.log("catch-error: ", error);
      }
    }
  }



  useEffect(() => {
    let cancelRequest = false;
    if (cancelRequest) {
      return;
    }
    const controller = new AbortController();
    setIsLoading(true);
    if (!router.isReady) return;

    getData(window.atob(router.query.id), controller.signal);

    return () => {
      if (controller) {
        controller.abort();
        console.log('controller.abort');
      }
      cancelRequest = true;
    };
  }, [router.isReady, router.query.id]);

  if (isLoading && !apiData) return <OverlayCircularProgress message="Loading" />;
  if (!apiData) return <div className="w-screen my-10 font-semibold text-2xl text-red-600 flex justify-center items-center"><div className=" bg-red-50 px-4 py-3 border-b-4 border-red-600">No record found.</div></div>;


  return (
    <>
      <Head>
        <title>Students List</title>
        <meta name="theme-color" content="#00f" />
      </Head>
      <div className="w-full my-py">
        <div className='my-container'>
          <div className="flex justify-center">

            {apiData && "" !== apiData && (
              <div className="max-w-2xl shadow-md p-4 w-full rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700">
                <form onSubmit={handleSubmit}>
                  <h2 className=" text-slate-900 dark:text-slate-500 font-semibold text-xl mb-7">Create Record</h2>

                  {/* father section */}
                  <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-sky-500 mb-6">Father&apos;s Details:</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                      <div className="relative z-0 w-full group md:col-span-2">
                        <input value={apiData.father_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="father_name" id="father_name" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="father_name" className="my-input-float-label">Father&apos;s Name</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_email} onChange={handleChange} type="email" name="father_email" id="father_email" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="father_email" className="my-input-float-label">Father&apos;s E-mail</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_contact} onChange={handleChange} type="tel" pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" name="father_contact" id="father_contact" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="father_contact" className="my-input-float-label">Father&apos;s Contact No.</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_contact_2} onChange={handleChange} type="tel" pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" name="father_contact_2" id="father_contact_2" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="father_contact_2" className="my-input-float-label">Father&apos;s Contact No. 2</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_whatsapp} onChange={handleChange} pattern="^[6-9][\d]{9}$" type="tel" title="Must have 10 digits & should be start from 6,7,8 or 9" name="father_whatsapp" id="father_whatsapp" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="father_whatsapp" className="my-input-float-label">Father&apos;s WhatsApp No.</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_qualification} onChange={handleChange} list="qualification" type="text" name="father_qualification" id="father_qualification" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="father_qualification" className="my-input-float-label">Father&apos;s Qualification</label>
                        <datalist id="qualification">
                          {qualifications.map((o, i) => (
                            <option key={i} value={o.value}  ></option>
                          ))}
                        </datalist>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_occupation} onChange={handleChange} list="occupations" type="text" name="father_occupation" id="father_occupation" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="father_occupation" className="my-input-float-label">Father&apos;s Occupation</label>
                        <datalist id="occupations">
                          {occupations.map((o, i) => (
                            <option key={i} value={o.value} ></option>
                          ))}
                        </datalist>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.father_annual_income} onChange={handleChange} type="number" name="father_annual_income" id="father_annual_income" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="father_annual_income" className="my-input-float-label">Father&apos;s Annual Income</label>
                      </div>

                    </div>

                  </div>
                  {/* end father section */}

                  {/* mother section */}
                  <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-sky-500 mb-6">Mother&apos;s Details:</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 relative z-0 w-full group">
                        <input value={apiData.mother_name} onChange={handleChange} type="text" name="mother_name" pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." id="mother_name" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_name" className="my-input-float-label">Mother&apos;s Name</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_email} onChange={handleChange} type="email" name="mother_email" id="mother_email" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_email" className="my-input-float-label">Mother&apos;s E-mail Id</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_contact} onChange={handleChange} type="tel" name="mother_contact" id="mother_contact" pattern="^[6-9][\d]{9}$" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_contact" className="my-input-float-label">Mother&apos;s Contact No.</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_contact_2} onChange={handleChange} type="tel" name="mother_contact_2" id="mother_contact_2" pattern="^[6-9][\d]{9}$" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_contact_2" className="my-input-float-label">Mother&apos;s Contact No. 2</label>
                      </div>


                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_whatsapp} onChange={handleChange} type="tel" name="mother_whatsapp" id="mother_whatsapp" pattern="^[6-9][\d]{9}$" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_whatsapp" className="my-input-float-label">Mother&apos;s WhatsApp No.</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_qualification} onChange={handleChange} list="qualification" type="text" name="mother_qualification" id="mother_qualification" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_qualification" className="my-input-float-label">Mother&apos;s Qualification</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_occupation} onChange={handleChange} list="occupations" type="text" name="mother_occupation" id="mother_occupation" className="my-input peer" placeholder=" " required />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_occupation" className="my-input-float-label">Mother&apos;s Occupation</label>
                      </div>

                      <div className="relative z-0 w-full group">
                        <input value={apiData.mother_annual_income} onChange={handleChange} type="number" name="mother_annual_income" id="mother_annual_income" className="my-input peer" placeholder=" " />
                        <span className='form-underline'></span>
                        <label htmlFor="mother_annual_income" className="my-input-float-label">Mother&apos;s Annual Income</label>
                      </div>

                    </div>

                  </div>
                  {/* end mother section */}

                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:scale-95 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>
              </div>
            )}


          </div>
        </div>
      </div >
    </>
  )
}

export default Edit
