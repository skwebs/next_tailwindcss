import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "../store";
import Link from "next/link";
import { AppNavLinks } from "../constants";
import { useRouter } from "next/router";

const SidebarDrawer = () => {
  const dispatch = useDispatch();
  let sidebarSelector = useSelector((state) => state.sidebar);

  const router = useRouter();
  const { asPath, pathname } = router;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => dispatch(sidebarAction.close())}
        className={` ${sidebarSelector.sidebar ? " opacity-100 z-40" : " opacity-0 -z-10"
          } backdrop-blur-sm fixed inset-0 bg-black/20 my-transition md:hidden dark:bg-slate-900/80`}></div>
      {/* ${sidebarSelector.sidebar ? 'translate-x-0' : '-translate-x-full'} */}

      {/* Sidebar */}
      <aside
        className={`${sidebarSelector.sidebar ? "translate-x-0" : "-translate-x-full"
          } bg-white/80 dark:bg-slate-800 transition duration-500 w-80 max-w-[calc(100%-3rem)] shadow-xl shadow-slate-500  fixed top-0 left-0  h-screen z-50`}>
        {/* <aside className={`fixed shadow-lg z-40 transform top-0 left-0 h-full overflow-x-hidden  transition my-bg-trans w-80   `}> */}
        {/* close button */}
        <div className="flex justify-end mb-2 text-slate-700 dark:text-slate-400 dark:hover:text-white  hover:bg-slate-200 dark:hover:bg-white/20">
          <button
            className="flex items-center px-4 py-3"
            onClick={() => dispatch(sidebarAction.close())}>
            Close <MdClose className="text-2xl ml-2" />
          </button>
        </div>

        {/* mobile navigation */}
        <nav className="">
          {/* navigation */}
          <ul className="flex flex-col pr-6">
            {AppNavLinks.map((link, index) => (
              <li
                key={index}
                className={`group font-semibold items-center flex text-slate-700 cursor-pointer  rounded-r-full`}>
                <Link href={link.href}>
                  <a
                    className={`${pathname === link.href
                        ? "group text-sky-500 bg-sky-100 border-l-4 border-sky-500 hover:bg-sky-200 hover:border-sky-700 dark:bg-white/10  dark:text-white  dark:border-gray-500      dark:hover:border-slate-400 dark:hover:text-white  dark:hover:bg-white/20"
                        : "border-l-4 text-slate-700 hover:bg-gray-200 hover:border-l-4 hover:border-gray-400 dark:text-slate-400 dark:border-l-4  border-transparent dark:hover:bg-white/5 dark:hover:border-l-4 dark:hover:border-slate-600"
                      } font-semibold py-3 px-4 w-full rounded-r-full`}>
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SidebarDrawer;

// import { MdClose } from "react-icons/md";
// import { useSelector, useDispatch } from "react-redux";
// import { AppNavLinks, SocialIconsList } from "../constants";
// import { sidebarAction } from './../store/index';
// import { Link } from 'next/link';

// const SidebarDrawer = () => {
//   let sidebarSelector = useSelector(state => state.sidebar)

//   const dispatch = useDispatch()

//   const toggleSidebar = () => {
//     dispatch(sidebarAction.sidebarToggle());
//   }

//   return (
//     <>
//       {/* mobile menu sidebar drawer overlay */}
//       <div onClick={() => dispatch(sidebarAction.sidebarToggle())} className={` ${sidebarSelector.sidebar ? ' opacity-100 z-0' : ' opacity-0 -z-10'} backdrop-blur-sm fixed z-0 inset-0 bg-black/20 my-transition md:hidden dark:bg-slate-900/80`}></div>

//       {/* sidebar menu */}
//       <aside className={` translate-x-0 fixed shadow-lg  z-10 transform top-0 left-0 h-full overflow-x-hidden ease-in-out transition-all duration-300 bg-white w-80 max-w-[calc(100%-3rem)]  dark:bg-slate-800`}>
//         {/* header */}
//         <div className='flex justify-between py-2 pl-6'>
//           <div className='w-full text-slate-500 py-2 pl-2'>
//             <h2 className='font-bold text-[1.5rem] text-center uppercase'>Anshu Memorial Academy</h2>
//           </div>
//           <MdClose onClick={dispatch(sidebarAction.sidebarClose())} className='block md:hidden text-2xl mr-2 opacity-70 hover:opacity-100' />
//         </div>
//         {/* mobile navigation */}
//         <nav className=' px-6 pb-2'>
//           <ul className='flex flex-col space-y-2'>
//             {AppNavLinks.map((nav, index) => (
//               <li key={index} >
//                 <Link onClick={() => dispatch(sidebarAction.sidebarClose())} className={` border px-5 py-3 hover:bg-slate-100`} href={nav.link}><a>{nav.name}</a></Link>
//               </li>
//             ))}

//           </ul>
//         </nav>
//         <div className='px-6'>
//           <div className='flex space-x-2 justify-center mt-6'>

//           </div>
//         </div>
//       </aside>

//     </>
//   )
// }

// export default SidebarDrawer
