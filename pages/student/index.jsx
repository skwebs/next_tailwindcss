import Head from "next/head";
import Link from "next/link";
import OverlayCircularProgress from "@/components/OverlayCircularProgress";
import axios from "@/lib/axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const List = () => {
    const router = useRouter();

    const [errors, setErrors] = useState(null);

    const [queryString, setQueryString] = useState("");

    const [id, setId] = useState(0);

    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error, mutate } = useSWR(`/api/stu-parent${queryString}`, fetcher);

    console.log("data error", data, error);

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const deleteData = async (id) => {
        await csrf();

        setErrors([]);
        console.log("id", id)
        try {
            const { data } = await axios.delete(`/api/stu-parent/${id}`);
            console.log("response-data:", data);
            mutate();
        } catch (error) {
            // Handle Error Here
            // if (error.response.status !== 422) throw error;
            // setErrors(error.response.data.errors);
            setErrors(error);
            console.log(error)
        }

        console.log(id);
    }


    const encodeBase64 = (data) => {
        return Buffer.from(data).toString('base64');
    }
    const decodeBase64 = (data) => {
        return Buffer.from(data, 'base64').toString('ascii');
    }
    useEffect(() => {
        let cancelRequest = false;
        if (cancelRequest) {
            return;
        }
        if (!router.isReady) return;
        setQueryString(location.search);

        console.log("window.btoa", window.btoa(2))

        return () => {
            cancelRequest = true;
        };
    }, [router.isReady]);


    if (error) return <div className="w-screen my-10 font-semibold text-2xl text-red-600 flex justify-center items-center"><div className=" bg-red-50 px-4 py-3 border-b-4 border-red-600 dark:bg-slate-800 dark:text-red-800 dark:border-red-900">failed to load</div></div>;

    if (!data) return <OverlayCircularProgress message="Loading" />

    const tableColNames = ['S.N.', 'Father\'s Name', 'Father\'s Email', 'Father\'s Contact', 'Father\'s Contact 2', 'Father\'s WhatsApp', 'Father\'s Qualification', 'Father\'s Occupation', 'Father\'s Annual Income', 'Mother\'s Name', 'Mother\'s Contact', '	Mother\'s Contact 2', '	Mother\'s WhatsApp', 'Mother\'s Qualification', 'Mother\'s Occupation', 'Mother\'s Annual Income', 'Action', 'S.N.'];

    return (
        <>
            <Head>
                <title>Students List</title>
                <meta name="theme-color" content="#00f" />
            </Head>
            <div className="w-full my-py">
                <div className='my-container'>



                    <div className="mb-2 flex justify-between">
                        <Link href="/">
                            <a className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                                Go Home
                            </a>
                        </Link>
                        <h1 className="text-xl md:text-2xl font-semibold text-sky-500 underline">Students List</h1>
                        <Link href="/student/create">
                            <a className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                                Create Record
                            </a>
                        </Link>
                    </div>

                    <div className="rounded-lg overflow-hidden border dark:border-slate-600">

                        {data.success ? (
                            <div className="overflow-x-auto rounded-lg">

                                <div className="w-full">
                                    <div className="max-h-[calc(100vh-300px)]">
                                        <table className="w-full table-auto">
                                            <thead className="bg-slate-100 dark:bg-slate-700 sticky top-0">

                                                <tr className=" whitespace-nowrap border-b dark:border-slate-600">
                                                    {tableColNames.map((d, i, r) => (
                                                        <th key={i} scope="col" className={`text-md font-medium dark:text-slate-300 px-6 py-4 ${r.length === (i + 2) ? 'text-center' : 'text-left'}`}>
                                                            {d}
                                                        </th>
                                                    ))}

                                                </tr>
                                            </thead>
                                            <tbody className="h-96 overflow-y-auto ">

                                                {data.data.map((d, i) => (
                                                    <tr
                                                        key={i}
                                                        className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <th
                                                            scope="row"
                                                            className="whitespace-nowrap py-3 px-6 text-center  font-medium md:py-4 "
                                                        >
                                                            {d.id}
                                                        </th>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.father_name}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            <a
                                                                title="Send Mail"
                                                                className="text-blue-500 hover:underline"
                                                                href={`mailto:${d.father_email}`}
                                                            >
                                                                {d.father_email}
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            <a
                                                                title="Call"
                                                                className="text-blue-500 hover:underline"
                                                                href={`tel:${d.father_contact}`}
                                                            >
                                                                {d.father_contact}
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            <a
                                                                title="Call"
                                                                className="text-blue-500 hover:underline"
                                                                href={`tel:${d.father_contact_2}`}
                                                            >
                                                                {d.father_contact_2}
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.father_whatsapp}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.father_qualification}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.father_occupation}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.father_annual_income}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_name}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_contact}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_contact_2}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_whatsapp}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_qualification}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_occupation}
                                                        </td>
                                                        <td className="whitespace-nowrap py-3 px-6 md:py-4">
                                                            {d.mother_annual_income}
                                                        </td>
                                                        <td className=" whitespace-nowrap px-4">
                                                            <Link href={`/student/view/?id=${window.btoa(d.id)}`}>
                                                                <a className="mx-1 rounded px-2 py-1 font-medium text-sky-600  hover:ring-[2px] hover:ring-sky-500  active:bg-sky-500 active:text-white dark:hover:ring-sky-600 dark:active:bg-sky-600">
                                                                    View
                                                                </a>
                                                            </Link>

                                                            <Link href={`/student/edit/?id=${window.btoa(d.id)}`}>
                                                                <a className="mx-1 rounded px-2 py-1 font-medium text-amber-600  hover:ring-[2px] hover:ring-amber-500  active:bg-amber-500 active:text-white dark:hover:ring-amber-600 dark:active:bg-amber-600">
                                                                    Edit
                                                                </a>
                                                            </Link>

                                                            <button onClick={() => deleteData(d.id)} className="mx-1 rounded px-2 py-1 font-medium text-red-500  hover:ring-[2px] hover:ring-red-500  active:bg-red-500 active:text-white dark:hover:ring-red-500  dark:active:bg-red-500">Delete</button>
                                                        </td>
                                                        <th
                                                            scope="row"
                                                            className="whitespace-nowrap py-3 px-6 text-center  font-medium md:py-4 "
                                                        >
                                                            {d.id}
                                                        </th>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <p className="text-center py-5 bg-red-50 text-red-600">{data.error}</p>

                        )}



                    </div>

                </div>
            </div>
        </>
    )
}

export default List
