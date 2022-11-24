import Head from "next/head"
import { useState } from 'react';
import axios from '@/lib/axios';
import { clazz, occupations, qualifications } from '@/constants/form'
import { FormInput } from "@/components/Form";
import Link from "next/link";



const Create = () => {
    const [errors, setErrors] = useState(null);
    const [userData, setUserData] = useState({
        father_name: "", father_contact: "", father_contact_2: "", father_whatsapp: "", father_email: "", father_qualification: "",
        father_occupation: "", father_annual_income: "", father_photo: "",
        mother_name: "", mother_contact: "", mother_contact_2: "", mother_whatsapp: "", mother_email: "", mother_qualification: "",
        mother_occupation: "", mother_annual_income: "", mother_photo: "",
        created_by: ""
    });

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const handleChange = e => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));

        console.log(userData);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await csrf();

        setErrors([]);

        try {
            const { data } = await axios.post("/api/stu-parent", { ...userData, created_by: 2 });
            console.log(data);
        } catch (error) {
            // Handle Error Here
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
            console.log("Error:", error)
        }

        setUserData({
            father_name: "", father_contact: "", father_contact_2: "", father_whatsapp: "", father_email: "", father_qualification: "",
            father_occupation: "", father_annual_income: "", father_photo: "",
            mother_name: "", mother_contact: "", mother_contact_2: "", mother_whatsapp: "", mother_email: "", mother_qualification: "",
            mother_occupation: "", mother_annual_income: "", mother_photo: "",
            created_by: ""
        });

        console.log("userData:", userData);
        console.log("error-state:", errors)
    }

    return (
        <>
            <Head>
                <title>Create Record</title>
                <meta name="theme-color" content="" />
            </Head>
            <div className="w-full my-py">
                <div className='my-container'>
                    <div className="flex justify-center">

                        <div className="max-w-2xl shadow-md p-4 w-full rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700">
                            <form onSubmit={handleSubmit}>
                                <div className="flex justify-between mb-4">
                                    <h2 className=" text-slate-900 dark:text-slate-500 font-semibold text-xl ">Create Record</h2>
                                    <Link href="/student">
                                        <a className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:scale-95 dark:bg-sky-900 dark:hover:bg-sky-800">
                                            Student List
                                        </a>
                                    </Link>
                                </div>
                                {/* father section */}
                                <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-sky-500 mb-6">Father&apos;s Details:</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                                        <div className="relative z-0 w-full group md:col-span-2">
                                            <FormInput label="Father&apos;s Name" value={userData.father_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="father_name" id="father_name" required />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Father&apos;s E-mail" value={userData.father_email} onChange={handleChange} type="email" name="father_email" id="father_email" />
                                        </div>
                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_contact`} value={userData.father_contact} label="Father Contact&apos;s No." onChange={handleChange} name="father_contact" required pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_contact_2`} value={userData.father_contact_2} label="Father&apos;s Contact No. 2" onChange={handleChange} name="father_contact_2" pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_whatsapp`} value={userData.father_whatsapp} label="Father&apos;s WhatsApp No." onChange={handleChange} name="father_whatsapp" pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" />
                                        </div>
                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_qualification`} value={userData.father_qualification} label="Father&apos;s Qualification" onChange={handleChange} name="father_qualification" list="qualification" required title="Father's Qualification is required field!" />
                                            <datalist id="qualification">
                                                {qualifications.map((o, i) => (
                                                    <option key={i} value={o.value}  ></option>
                                                ))}
                                            </datalist>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_occupation`} value={userData.father_occupation} label="Father&apos;s Occupation" onChange={handleChange} name="father_occupation" list="occupations" required title="Father's occupation is required field!" />
                                            <datalist id="qualification">
                                                {occupations.map((o, i) => (
                                                    <option key={i} value={o.value}  ></option>
                                                ))}
                                            </datalist>
                                        </div>
                                        <div className="relative z-0 w-full group">
                                            <FormInput id={`father_annual_income`} value={userData.father_annual_income} label="Father&apos;s Annual Income" onChange={handleChange} name="father_annual_income" required title="Father's annual income is required field!" />
                                        </div>

                                    </div>


                                </div>
                                {/* end father section */}

                                {/* mother section */}
                                <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-sky-500 mb-6">Mother&apos;s Details:</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <div className="md:col-span-2 relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Name" value={userData.mother_name} onChange={handleChange} type="text" name="mother_name" pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." id="mother_name" required />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s E-mail Id" value={userData.mother_email} onChange={handleChange} type="email" name="mother_email" id="mother_email" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Contact No." value={userData.mother_contact} onChange={handleChange} type="tel" name="mother_contact" id="mother_contact" pattern="^[6-9][\d]{9}$" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Contact No. 2" value={userData.mother_contact_2} onChange={handleChange} type="tel" name="mother_contact_2" id="mother_contact_2" pattern="^[6-9][\d]{9}$" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s WhatsApp No." value={userData.mother_whatsapp} onChange={handleChange} type="tel" name="mother_whatsapp" id="mother_whatsapp" pattern="^[6-9][\d]{9}$" />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Qualification" value={userData.mother_qualification} onChange={handleChange} list="qualification" type="text" name="mother_qualification" id="mother_qualification" required />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Occupation" value={userData.mother_occupation} onChange={handleChange} list="occupations" type="text" name="mother_occupation" id="mother_occupation" required />
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <FormInput label="Mother&apos;s Annual Income" value={userData.mother_annual_income} onChange={handleChange} type="number" name="mother_annual_income" id="mother_annual_income" />
                                        </div>

                                    </div>

                                </div>
                                {/* end mother section */}

                                <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:scale-95 dark:bg-sky-900 dark:hover:bg-sky-800  focus:scale-95 focus:outline-none font-medium text-sm w-full sm:w-auto text-center  dark:focus:ring-blue-800">Submit</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Create
