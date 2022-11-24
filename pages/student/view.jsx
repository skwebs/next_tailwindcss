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

  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(`/api/stu-parent/${id}`, fetcher);

  // if (error) return <div className="w-screen my-10 font-semibold text-2xl text-red-600 flex justify-center items-center"><div className=" bg-red-50 px-4 py-3 border-b-4 border-red-600">failed to load</div></div>;

  // if (!data) return <OverlayCircularProgress message="Loading" />


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
            <div className="bg-slate-50 border shadow-md px-6 py-4 rounded-lg">
              <h2 className="text-center mb-4 bg-slate-500 rounded font-semibold text-white py-1">Parent Details</h2>


              {apiData && "" !== apiData && (
                <>
                  <div className="w-96 md:w-[600px]">
                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-2/3">
                        <table className="table text-left whitespace-nowrap">
                          <tbody>
                            <tr><th className="pr-2 py-2 w-48">Father&rsquo;s Name</th><td>: {apiData.father_name}</td></tr>
                            <tr><th className="pr-2 py-2">Father&rsquo;s Contact</th><td>: {apiData.father_contact}</td></tr>
                            <tr><th className="pr-2 py-2">Father&rsquo;s Qualification</th><td>: {apiData.father_qualification}</td></tr>
                            <tr><th className="pr-2 py-2">Father&rsquo;s Occupation</th><td>: {apiData.father_occupation}</td></tr>
                            <tr><th className="pr-2 py-2">Father&rsquo;s Annual Income</th><td>: {apiData.father_annual_income}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="w-1/3 pl-2 pb-2">
                        <div className="W-full bg-white border rounded h-full min-h-[150px] hover:shadow"></div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-2/3">
                        <table className="table text-left whitespace-nowrap">
                          <tbody>
                            <tr><th className="pr-2 py-2 w-48">Mother&rsquo;s Name</th><td>: {apiData.mother_name}</td></tr>
                            <tr><th className="pr-2 py-2">Mother&rsquo;s Contact</th><td>: {apiData.mother_contact}</td></tr>
                            <tr><th className="pr-2 py-2">Mother&rsquo;s Qualification</th><td>: {apiData.mother_qualification}</td></tr>
                            <tr><th className="pr-2 py-2">Mother&rsquo;s Occupation</th><td>: {apiData.mother_occupation}</td></tr>
                            <tr><th className="pr-2 py-2">Mother&rsquo;s Annual Income</th><td>: {apiData.mother_annual_income}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="w-1/3 pl-2 pb-2">
                        <div className="W-full bg-white border rounded h-full min-h-[150px] hover:shadow"></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default Edit
