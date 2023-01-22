import { FormInput, FormSelect } from "@/components/Form";
import Head from "next/head"
import Link from "next/link";
import { useState } from "react";


const registration = () => {
  const [isSibling, setIsSibling] = useState(false);

  const [userData, setUserData] = useState({
    name: ""
  })

  const curYear = new Date().getFullYear();

  const handleChange = e => {
    console.log(e);
  }
  return (
    <>
      <Head>
        <title>Student Registration Page</title>
        <meta name="theme-color" content="#00f" />
      </Head>
      <div className="w-full my-py">
        <div className='my-container'>

          <div className="max-w-3xl p-5 bg-amber-50 dark:bg-slate-800 border border-amber-100 dark:border-none mx-auto">
            <h1 className="text-slate-900 text-2xl font-semibold dark:text-slate-400">ONLINE REGISTRATION FORM FOR ADMISSION ({`${curYear}-${curYear + 1}`})</h1>

            <h2 className="mt-5 text-slate-700 dark:text-slate-500">Incomplete form will be rejected without assigning any reason. <Link href={`/`}><a className="hover:text-blue-500 underline">Click here for instructions to fill the online Registration Form</a></Link></h2>

            <div className=" mt-12">
              <form>
                <h2 className="text-slate-700  dark:text-slate-500">PARTICULARS OF THE APPLICANT (applicant/ Mother/Legal Guardian to apply)</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">

                  <div className="relative z-0 w-full group sm:col-span-2 md:col-span-1">
                    <FormInput label="Applicant&apos;s Name" value={userData.applicant_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="applicant_name" id="applicant_name" required />
                  </div>

                  <div className="relative z-0 w-full group">
                    <FormInput label="Applicant&apos;s Mobile" value={userData.applicant_mobile} onChange={handleChange} pattern="^[6-9][0-9]{9}$" title="Must be start with 6,7,8 or 9 and must have 10 digits" type="tel" name="applicant_mobile" id="applicant_mobile" required />

                  </div>

                  <div className="relative z-0 w-full group">
                    <FormInput label="Applicant&apos;s E-Mail" value={userData.applicant_email} onChange={handleChange} title="Enter valid email address." type="email" name="applicant_email" id="applicant_email" />
                  </div>

                </div>

                <h2 className="text-slate-700  dark:text-slate-500">PARTICULARS OF THE CHILD</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">

                  <div className="relative z-0 w-full group  md:col-span-1">
                    <FormInput label="First Name" value={userData.student_first_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="student_first_name" id="student_first_name" required />
                  </div>

                  <div className="relative z-0 w-full group  md:col-span-1">
                    <FormInput label="Middle Name" value={userData.student_mid_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="student_mid_name" id="student_mid_name" />
                  </div>

                  <div className="relative z-0 w-full group  md:col-span-1">
                    <FormInput label="Last Name" value={userData.student_last_name} onChange={handleChange} pattern="^[A-Za-z][A-Za-z\s]{3,30}$" title="Must have minimum 3 characters or maximum 30 characters." type="text" name="student_last_name" id="student_last_name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">

                  {/* <div className="relative z-0 w-full group  ">

<FormSelect label="Gender" name="gender" id="gender" placeholder=" " value={userData.student_gender} onChange={handleChange} title="Must have minimum 3 characters or maximum 30 characters." required pattern="[^\0]">
<option value=""></option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>
</FormSelect>
</div> */}

                  <div className="relative z-0 w-full group  ">
                    <small className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700 after:text-xl mb-1 dark:text-slate-400">Gender</small>
                    <div className="flex relative">
                      <div className="mr-1 relative">
                        <input type="radio" value="Male" name="gender" id="male" className="absolute appearance-none peer/male" required />
                        <label htmlFor="male" className="peer-checked/male:text-white -ml-[1px] peer-checked/male:bg-blue-600 font-semibold mx-1 px-2 py-[2px] border-2 border-blue-600 text-blue-600 rounded-md dark:border-slate-600 dark:text-slate-500 dark:peer-checked/male:bg-slate-600 dark:peer-checked/male:text-slate-300">Male</label>
                      </div>

                      <div className="mr-1 relative">
                        <input type="radio" value="Female" name="gender" id="female" className="absolute appearance-none peer/female" required />
                        <label htmlFor="female" className="peer-checked/female:text-white -ml-[1px] peer-checked/female:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/female:bg-slate-600 dark:peer-checked/female:text-slate-300">Female</label>
                      </div>

                      <div className="mr-1 relative">
                        <input type="radio" value="Other" name="gender" id="other" className="absolute appearance-none peer/other" required />
                        <label htmlFor="other" className="peer-checked/other:text-white -ml-[1px] peer-checked/other:bg-blue-600 font-semibold mx-1 px-2 py-[2px] border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/other:bg-slate-600 dark:peer-checked/other:text-slate-300">Other</label>
                      </div>

                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="relative z-0 w-full group ">
                    <FormInput className="placeholder:text-slate-400" label="Date of Birth" value={userData.student_dob} onChange={handleChange} title="Must have minimum 3 characters or maximum 30 characters." type="date" name="student_dob" id="student_dob" required />

                  </div>

                  <div className="relative z-0 w-full group ">
                    <FormInput label="Age on 1st April" value={userData.student_dob} type="text" name="age" id="age" readOnly />
                  </div>

                  <div className="relative z-0 w-full group ">
                    <FormInput label="Religion" value={userData.student_religion} onChange={handleChange} title="Must have minimum 3 characters or maximum 30 characters." type="text" name="student_religion" id="student_religion" required />
                  </div>

                  <div className="relative z-0 w-full group ">
                    <FormInput label="Aadhaar No." value={userData.student_aadhaar} onChange={handleChange} title="Must have minimum 3 characters or maximum 30 characters." type="text" name="student_aadhaar" id="student_aadhaar" />
                  </div>

                  {/* Category */}
                  <div className="relative z-0 w-full group  ">
                    <small className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700 after:text-xl mb-2 dark:text-slate-400">Category</small>
                    <div className="flex relative">
                      <div className=" relative">
                        <input type="radio" value="General" name="category" id="general" className="absolute appearance-none peer/general" required />
                        <label htmlFor="general" className="peer-checked/general:text-white -ml-[1px] peer-checked/general:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/general:bg-slate-600 dark:peer-checked/general:text-slate-300">Gen.</label>
                      </div>

                      <div className=" relative">
                        <input type="radio" value="BC1" name="category" id="bc1" className="absolute appearance-none peer/bc1" required />
                        <label htmlFor="bc1" className="peer-checked/bc1:text-white -ml-[1px] peer-checked/bc1:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/bc1:bg-slate-600 dark:peer-checked/bc1:text-slate-300">BC1</label>
                      </div>

                      <div className=" relative">
                        <input type="radio" value="BC2" name="category" id="bc2" className="absolute appearance-none peer/bc2" required />
                        <label htmlFor="bc2" className="peer-checked/bc2:text-white -ml-[1px] peer-checked/bc2:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/bc2:bg-slate-600 dark:peer-checked/bc2:text-slate-300">BC2</label>
                      </div>

                      <div className=" relative">
                        <input type="radio" name="category" id="sc" className="absolute appearance-none peer/sc" required />
                        <label htmlFor="sc" className="peer-checked/sc:text-white -ml-[1px] peer-checked/sc:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/sc:bg-slate-600 dark:peer-checked/sc:text-slate-300">SC</label>
                      </div>

                      <div className=" relative">
                        <input type="radio" name="category" id="st" className="absolute appearance-none peer/st" required />
                        <label htmlFor="st" className="peer-checked/st:text-white -ml-[1px] peer-checked/st:bg-blue-600 font-semibold mx-1 px-2 py-[2px] border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/st:bg-slate-600 dark:peer-checked/st:text-slate-300">ST</label>
                      </div>

                    </div>
                  </div>

                  {/* Physically Challenged */}
                  <div className="relative z-0 w-full group  ">
                    <small className="block mb-2 after:content-['*'] after:ml-0.5 after:text-red-500  text-slate-700 after:text-xl dark:text-slate-400">Physically Challenged</small>
                    <div className="flex relative">

                      <div className="mr-1 relative">
                        <input type="radio" value="Yes" name="physically_challenged" id="pc_yes" className="absolute appearance-none peer/pc_yes" required />
                        <label htmlFor="pc_yes" className="peer-checked/pc_yes:text-white -ml-[1px] peer-checked/pc_yes:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/pc_yes:bg-slate-600 dark:peer-checked/pc_yes:text-slate-300">Yes</label>
                      </div>

                      <div className="mr-1 relative">
                        <input type="radio" value="No" name="physically_challenged" id="pc_no" className="absolute appearance-none peer/pc_no" required />
                        <label htmlFor="pc_no" className="peer-checked/pc_no:text-white -ml-[1px] peer-checked/pc_no:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/pc_no:bg-slate-600 dark:peer-checked/pc_no:text-slate-300">No</label>
                      </div>

                    </div>
                  </div>

                  {/* School Transport Required */}
                  <div className="relative z-0 w-full group  ">
                    <small className="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700 after:text-xl dark:text-slate-400">School Transport Required</small>
                    <div className="flex relative">

                      <div className="mr-1 relative">
                        <input type="radio" value="Yes" name="school_transport" id="st_yes" className="absolute appearance-none peer/st_yes" required />
                        <label htmlFor="st_yes" className="peer-checked/st_yes:text-white -ml-[1px] peer-checked/st_yes:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/st_yes:bg-slate-600 dark:peer-checked/st_yes:text-slate-300">Yes</label>
                      </div>

                      <div className="mr-1 relative">
                        <input type="radio" value="No" name="school_transport" id="st_no" className="absolute appearance-none peer/st_no" required />
                        <label htmlFor="st_no" className="peer-checked/st_no:text-white -ml-[1px] peer-checked/st_no:bg-blue-600 font-semibold mx-1 px-2 py-[2px]  border-blue-600 text-blue-600 rounded-md border-2 dark:border-slate-600  dark:text-slate-500 dark:peer-checked/st_no:bg-slate-600 dark:peer-checked/st_no:text-slate-300">No</label>
                      </div>

                    </div>
                  </div>

                </div>
                {/* address */}
                <div className="relative z-0 w-full group  mt-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400">Address</label>
                  <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  " placeholder="Village-Bhatha Dasi,Post-Basra, P.S.-Rajapakar,Dist.-Vaishali, Bihar-844124" />
                </div>

                {/* <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                  </span>
                  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label> */}

                {/* siblings detais */}
                <h2 className="text-slate-700  dark:text-slate-500 mt-4">PARTICULARS OF SIBLING STUDYING IN THE SCHOOL (Cousins will not be considered as siblings)</h2>

                {/* is sibling studying in this school */}

                <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 my-4">

                  <input onChange={(e) => setIsSibling(e.target.checked)} id="bordered-checkbox-1" type="checkbox" name="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="bordered-checkbox-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Is sibling is study in Anshu Memorial Academy</label>
                </div>

                {isSibling ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
                    <div className="relative z-0 w-full group">
                      <FormInput label="Name" name="sibling_name" id="siibling_name" />
                    </div>
                    <div className="relative z-0 w-full group">
                      <FormInput type="number" label="Registration No." name="siibling_reg_no" id="siibling_reg_no" />
                    </div>
                  </div>
                ) : ""}

                <p>
                  <input type="checkbox" name="ideclare" id="ideclare" value="ideclare" required />
                  <label htmlFor="ideclare"> I hereby state that the information provided by me is true and that the onus of any false/incorrect
                    information shall rest entirely on me.
                    I fully understand that on accepting the Registration Form of my ward, the school is not in any way bound to
                    grant admission as the admission is purely based on availability of seats. I also understand that the decision
                    of the Principal regarding admission will be final and binding on me.</label>
                </p>
                <div className="mt-4
                ">
                  <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:scale-95 dark:bg-sky-900 dark:hover:bg-sky-800  focus:scale-95 focus:outline-none font-medium text-sm w-full sm:w-auto text-center  dark:focus:ring-blue-800">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default registration
