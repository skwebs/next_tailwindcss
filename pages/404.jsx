import Head from "next/head"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Page not found!</title>
      </Head>
      <div className='w-full bg-white'>
        <div className='container mx-auto'>
          <h1>Page not found!</h1>
        </div>
      </div>
    </>
  )
}

export default NotFound
