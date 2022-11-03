import Link from 'next/link';
import Brand from './Brand';
import SocialIcons from './SocialIcons';


const Footer = () => {
  return (
    <>
      {/* divider */}
      <div className='my-container'>
        <hr className='w-full dark:border-slate-700' />
      </div>
      {/* footer from here */}
      <div className='w-full my-py'>
        <div className='my-container'>
          <div className=' dark:border-slate-600 '>
            <div>

              <div className=" md:flex md:items-center md:justify-between mx-auto ">
                <span className="flex text-sm text-slate-500 dark:text-slate-300 sm:text-center">  <span className='px-2'>&copy; {new Date().getFullYear()}{" "}</span> <Link href="/"><a><Brand/></a></Link>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-2 sm:justify-center md:mt-0">
                  {<SocialIcons />}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer