import Link from 'next/link';
import Brand from './Brand';
import SocialIcons from './SocialIcons';


const Footer = () => {
  return (
    <>
      <div className='w-full p-4 '>
        <div className='container mx-auto'>
          <div className='p-4  border-t dark:border-slate-600'>
            <div className="py-6  md:flex md:items-center md:justify-between container mx-auto">
              <span className="flex text-sm text-slate-500 dark:text-slate-300 sm:text-center">  <span className='px-2'>&copy; {new Date().getFullYear()}{" "}</span> <Link href="/"><a className='hover:underline' ><Brand /></a></Link>. All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-2 sm:justify-center md:mt-0">
                {<SocialIcons />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer