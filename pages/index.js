import Head from "next/head";
import Link from "next/link";

export default function Home() {

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
