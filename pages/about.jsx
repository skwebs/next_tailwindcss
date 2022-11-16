import Ripple from "material-ripple-effects"
import Head from "next/head"

const About = () => {
  const ripple = new Ripple();
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="theme-color" content="#00f" />
      </Head>
      <div className="w-full my-py">
        <div className='my-container'>
          <h1>About</h1>
          <button className="px-3 py-2 rounded-md" onMouseUp={(e) => ripple.create(e, 'dark')} onMouseDown={(e) => ripple.create(e, 'dark')}> Material Ripple</button>
        </div>
      </div>
    </>
  )
}

export default About
