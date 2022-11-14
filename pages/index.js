import { useState, useEffect } from "react";
import Head from "next/head";
// import OverlayCircularProgress from "../components/OverlayCircularProgress";
import Link from "next/link";

export default function Home() {
  //   const [data, setData] = useState(null);
  //   const [isLoading, setLoading] = useState(false);
  //
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("http://localhost:8000/api/stu-parent")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       });
  //   }, []);
  //
  //   if (isLoading) return <OverlayCircularProgress message="Loading" />;
  //   if (!data) return <OverlayCircularProgress message="No data found" />;

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="my-py w-full">
        <div className="my-container">
          <Link href={`/student/list`}>
            <a className="text-blue-500 underline">Go to Student List</a>
          </Link>
        </div>
      </div>
    </>
  );
}
