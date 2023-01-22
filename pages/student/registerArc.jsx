import Head from "next/head"
import Link from "next/link";



const Register = () => {
    const curYear = new Date().getFullYear();

    return (
        <>
            <Head>
                <title>Student Register Page</title>
                <meta name="theme-color" content="#00f" />
            </Head>
            <div className="w-full my-py">
                <div className='my-container'>
                    <div className="max-w-3xl p-5 bg-amber-50/50 border border-amber-100/50 mx-auto">
                        <h1 className="text-slate-900 text-2xl font-semibold">ONLINE REGISTRATION FORM FOR ADMISSION ({`${curYear}-${curYear + 1}`})</h1>
                        <h2 className="mt-5 text-slate-700">Incomplete form will be rejected without assigning any reason. <Link href={`/`}><a className="hover:text-blue-500 underline">Click here for instructions to fill the online Registration Form</a></Link></h2>

                        <div className=" mt-12">
                            <form>
                                <h2 className="text-slate-700">PARTICULARS OF THE APPLICANT (applicant/ Mother/Legal Guardian to apply)</h2>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register
