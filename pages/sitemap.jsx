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
                </div>
            </div>
        </>
    )
}

export default Sitemap
