import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppNavLinks } from "../constants";
import Brand from './Brand';
import { MdMenu } from 'react-icons/md';


const Navigation = () => {

  const [shadow, setShadow] = useState(false)

  const router = useRouter();
  const { asPath, pathname } = router;
  console.log(router)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 64) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);


  return (
    <>
      <div className={`${shadow ? 'shadow-lg dark:border-b dark:border-slate-600' : ''} w-full border-slate-600 transition-all ease-in-out duration-300 backdrop-blur-md bg-white/75 dark:bg-slate-900/75 dark:text-slate-500 px-4`}>
        <div className='container mx-auto'>
          <div className='w-full'>
            <div className='flex justify-between'>
              {/* left side navigation */}
              <div className="flex items-center h-14">
                <MdMenu onClick={() => setToggle(!toggle)} className=" md:hidden text-5xl p-3 mr-3 hover:bg-slate-100 transition duration-200 rounded-full cursor-pointer" />
                <Link href={`/`}><a><Brand className='text-2xl' /></a></Link>
              </div>
              {/* right side navigation */}
              {/* middle */}
              {/* <div className="flex flex-1 px-4 items-center h-14">
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div> */}

              {/* navigation */}
              <ul className='hidden md:flex items-center'>
                {AppNavLinks.map((link, index) => (
                  <li key={index} className='group' >
                    <Link href={link.href}>
                      <a className={`${pathname === link.href ? "text-sky-500" : " text-slate-700 dark:text-slate-400"} font-semibold px-3 py-2 hover:text-sky-500`}>{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation