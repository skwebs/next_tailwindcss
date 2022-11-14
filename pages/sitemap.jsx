import { useState, useEffect } from "react";
import Head from "next/head";
import OverlayCircularProgress from "../components/OverlayCircularProgress";
import Link from "next/link";

const Sitemap = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8000/api/stu-parent")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <OverlayCircularProgress message="Loading" />;
    if (!data) return <OverlayCircularProgress message="No data found" />;

    const tableColNames = ['S.N.', 'Father\'s Name', 'Father\'s Contact', 'Father\'s Contact 2', 'Father\'s WhatsApp', 'Mother\'s Name', 'Mother\'s Contact', '	Mother\'s Contact 2', '	Mother\'s WhatsApp', 'Action'];
    return (
        <>
            <Head>
                <title>Sitemap Page</title>
                <meta name="theme-color" content="#00f" />
            </Head>
            <div className="w-full my-py">
                <div className='my-container'>
                    <h1>Sitemap</h1>
                    <div className="rounded-lg overflow-hidden border-x">
                        <div className="overflow-x-auto rounded-lg">

                            <div className="w-full">
                                <div className="max-h-[calc(100vh-300px)]">
                                    <table className="w-full table-auto">
                                        <thead className="bg-white border-b sticky top-0">

                                            <tr className="bg-slate-700 whitespace-nowrap">
                                                {tableColNames.map((d, i, r) => (
                                                    <th key={i} scope="col" className={`text-md font-medium text-white px-6 py-4 ${r.length === (i + 1) ? 'text-center' : 'text-left'}`}>
                                                        {d}
                                                    </th>
                                                ))}

                                            </tr>
                                        </thead>
                                        <tbody className="h-96 overflow-y-auto ">
                                            {data.map((d, i) => (
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
                                                    <td className=" whitespace-nowrap px-4">
                                                        <Link href="/edit">
                                                            <a className="mx-1 rounded px-2 py-1 font-medium text-sky-600  hover:ring-[2px] hover:ring-sky-500  active:bg-sky-500 active:text-white dark:hover:ring-sky-600 dark:active:bg-sky-600">
                                                                Edit
                                                            </a>
                                                        </Link>
                                                        <Link href="/delete">
                                                            <a className="mx-1 rounded px-2 py-1 font-medium text-red-500  hover:ring-[2px] hover:ring-red-500  active:bg-red-500 active:text-white dark:hover:ring-red-500  dark:active:bg-red-500">
                                                                Delete
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sitemap
