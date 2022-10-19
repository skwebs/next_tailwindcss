import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from './Brand';

const Navigation = () => {

  const [shadow, setShadow] = useState(false)
  const navList = [
    {
      'name': 'Home',
      'href': '/'
    },
    {
      'name': 'About',
      'href': '/about'
    },
    {
      'name': 'Contact',
      'href': '/contact'
    },
    {
      'name': 'Register',
      'href': '/register'
    },
    {
      'name': 'Login',
      'href': '/login'
    },
  ]

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
      <div className={`${shadow ? 'shadow-lg dark:border-b dark:border-slate-600' : ''} w-full border-slate-600 transition-all ease-in-out duration-300 backdrop-blur-md bg-white/75 dark:bg-slate-900/75 dark:text-slate-500 p-4`}>
        <div className='container mx-auto'>
          <div className='w-full'>
            <div className='flex justify-between'>
              {/* left side navigation */}
              <div>

                <Brand className='text-2xl' />
              </div>
              {/* right side navigation */}
              {/* navigation */}
              <ul className='hidden md:flex items-center'>
                {navList.map((link, index) => (
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