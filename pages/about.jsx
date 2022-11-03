import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="theme-color" content="#00f" />
      </Head>
      <div className="w-full my-py">
        <div className='my-container'>
          <h1>About</h1>
          <marquee>This is marquee</marquee>
        </div>
      </div>
    </>
  )
}

export default About