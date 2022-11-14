import Head from "next/head"
import { useState } from 'react';
import axios from './../../lib/axios';
import useSWR from 'swr'
// import Select from "react-tailwindcss-select";
import { clazz, occupations, qualifications } from './../../constants/form'


const Create = () => {
    const [userData, setUserData] = useState({
        "father_name": "",
        "father_contact": "",
        "father_contact_2": "",
        "father_whatsapp": "",
        "father_email": "",
        "father_qualification": "",
        "father_occupation": "",
        "father_annual_income": "",
        "father_photo": "",

        "mother_name": "",
        "mother_contact": "",
        "mother_contact_2": "",
        "mother_whatsapp": "",
        "mother_email": "",
        "mother_qualification": "",
        "mother_occupation": "",
        "mother_annual_income": "",
        "mother_photo": "",

        "created_by": 2
    });

    const [errors, setErrors] = useState(null);

    const { data: user, error, mutate } = useSWR('/api/stu-parent', () =>
        axios
            .get('/api/stu-parent')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const createStuParent = async () => {
        await csrf();

        setErrors([]);

        // try {
        //     const { data } = await axios.post("/api/stu-parent", userData);
        //     // mutate();
        //     console.log(data);
        // } catch (err) {
        //     // Handle Error Here
        //     console.error(err);
        // }

        console.log("clicked");
        // console.log(staticUserData);
        axios
            // .post("/api/stu-parent", userData)
            .post("/api/stu-parent", staticUserData)
            .then((res) => console.log(res.data))
            .catch((error) => {
                if (error.response.status !== 422) throw error;
                setErrors(error.response.data.errors);
                console.warn(error)
            });
    };
    const staticUserData1 = {
        "father_name": "test",
        "father_contact": "6973757920",
        "father_qualification": "matric",
        "father_occupation": "teacher",
        "father_annual_income": 0,
        "mother_name": "test devi",
        "mother_qualification": "inter",
        "mother_occupation": "inter",
        "created_by": 2
    };

    const staticUserData = {
        "father_name": "test",
        "father_contact": "6973757920",
        "father_contact_2": "9973757920",
        "father_whatsapp": "9973757920",
        "father_email": "00satish2015@gmail.com",
        "father_qualification": "isc",
        "father_occupation": "teacher",
        "father_annual_income": 0,
        "father_photo": "image.jpg",

        "mother_name": "test",
        "mother_contact": "6973757920",
        "mother_contact_2": "9973757920",
        "mother_whatsapp": "9973757920",
        "mother_email": "00satish2015@gmail.com",
        "mother_qualification": "isc",
        "mother_occupation": "teacher",
        "mother_annual_income": 0,
        "mother_photo": "image.jpg",

        "created_by": 2
    };

    const gender = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
    ];

    const handleChange = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        console.log(userData);
    }

    const [records, setRecords] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        await csrf();

        setErrors([]);

        console.log("clicked");
        createStuParent();
        // axios
        //     .post("/api/stu-parent", userData)
        //     .then(() => mutate())
        //     .catch((error) => {
        //         if (error.response.status !== 422) throw error;
        //         setErrors(error.response.data.errors);
        //         console.warn(error)
        //     });
        const newRecord = { ...userData, id: Date.now() };

        setRecords([...records, newRecord]);
        console.log(records);
        setUserData({
            "father_name": "",
            "father_contact": "",
            "father_contact_2": "",
            "father_whatsapp": "",
            "father_email": "",
            "father_qualification": "",
            "father_occupation": "",
            "father_annual_income": "",
            "father_photo": "",

            "mother_name": "",
            "mother_contact": "",
            "mother_contact_2": "",
            "mother_whatsapp": "",
            "mother_email": "",
            "mother_qualification": "",
            "mother_occupation": "",
            "mother_annual_income": "",
            "mother_photo": "",

            "created_by": ""
        });

        console.log(records);
        console.log(userData);
    }


    return (
        <>
            <Head>
                <title>Create Record</title>
                <meta name="theme-color" content="#00f" />
            </Head>
            <div className="w-full my-py">
                <div className='my-container'>
                    <div className="flex justify-center">

                        <div className="max-w-2xl shadow-md p-4 w-full rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700">
                            <form onSubmit={handleSubmit}>
                                <h2 className=" text-slate-900 dark:text-slate-500 font-semibold text-xl mb-7">Create Record</h2>

                                {/* father section */}
                                <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-sky-500 mb-6">Father's Details:</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                                        <div className="relative z-0 w-full group md:col-span-2">
                                            <input value={userData.father_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="father_name" id="father_name" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_name" className="my-input-float-label">Father's Name</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_email} onChange={handleChange} type="email" name="father_email" id="father_email" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_email" className="my-input-float-label">Father's E-mail</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_contact} onChange={handleChange} type="tel" pattern="^[6-9][\d]{9}$" title="Must have 10 digits & should be start from 6,7,8 or 9" name="father_contact" id="father_contact" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_contact" className="my-input-float-label">Father's Contact No.</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_whatsapp} onChange={handleChange} pattern="^[6-9][\d]{9}$" type="tel" title="Must have 10 digits & should be start from 6,7,8 or 9" name="father_whatsapp" id="father_whatsapp" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_whatsapp" className="my-input-float-label">Father's WhatsApp No.</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_qualification} onChange={handleChange} list="qualification" type="text" name="father_qualification" id="father_qualification" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_qualification" className="my-input-float-label">Father's Qualification</label>
                                            <datalist id="qualification">
                                                {qualifications.map((o, i) => (
                                                    <option key={i} value={o.value}  ></option>
                                                ))}
                                            </datalist>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_occupation} onChange={handleChange} list="occupations" type="text" name="father_occupation" id="father_occupation" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_occupation" className="my-input-float-label">Father's Occupation</label>
                                            <datalist id="occupations">
                                                {occupations.map((o, i) => (
                                                    <option key={i} value={o.value} ></option>
                                                ))}
                                            </datalist>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.father_annual_income} onChange={handleChange} type="number" name="father_annual_income" id="father_annual_income" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="father_annual_income" className="my-input-float-label">Father's Annual Income</label>
                                        </div>

                                    </div>

                                </div>
                                {/* end father section */}

                                {/* mother section */}
                                <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-sky-500 mb-6">Mother's Details:</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <div className="md:col-span-2 relative z-0 w-full group">
                                            <input value={userData.mother_name} onChange={handleChange} type="text" name="mother_name" pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." id="mother_name" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_name" className="my-input-float-label">Mother's Name</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_email} onChange={handleChange} type="email" name="mother_email" id="mother_email" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_email" className="my-input-float-label">Mother's E-mail Id</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_contact} onChange={handleChange} type="tel" name="mother_contact" id="mother_contact" pattern="^[6-9][\d]{9}$" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_contact" className="my-input-float-label">Mother's Contact No.</label>
                                        </div>


                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_whatsapp} onChange={handleChange} type="tel" name="mother_whatsapp" id="mother_whatsapp" pattern="^[6-9][\d]{9}$" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_whatsapp" className="my-input-float-label">Mother's WhatsApp No.</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_qualification} onChange={handleChange} list="qualification" type="text" name="mother_qualification" id="mother_qualification" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_qualification" className="my-input-float-label">Mother's Qualification</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_occupation} onChange={handleChange} list="occupations" type="text" name="mother_occupation" id="mother_occupation" className="my-input peer" placeholder=" " required />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mother_occupation" className="my-input-float-label">Mother's Occupation</label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input value={userData.mother_annual_income} onChange={handleChange} type="number" name="mother_annual_income" id="mid_name" className="my-input peer" placeholder=" " />
                                            <span className='form-underline'></span>
                                            <label htmlFor="mid_name" className="my-input-float-label">Mother's Annual Income</label>
                                        </div>

                                    </div>

                                </div>
                                {/* end mother section */}

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:scale-95 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                            </form>
                            <button onClick={() => createStuParent()} type="submit" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:scale-95 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>

                        </div>

                        {/* <Select />
            <SelectBottomLine /> */}


                    </div>
                </div>
            </div >
        </>
    )
}

export default Create
