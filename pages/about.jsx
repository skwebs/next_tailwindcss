import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="theme-color" content="#00f" />
      </Head>
      <div className='w-full bg-white p-4'>
        <div className='container mx-auto'>
          <h1>About</h1>
        </div>
      </div>
    </>
  )
}

export default About