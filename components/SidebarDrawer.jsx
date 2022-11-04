import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "../store";
import Link from "next/link";
import { AppNavLinks } from "../constants";
import { useRouter } from "next/router";

const SidebarDrawer = () => {
  const dispatch = useDispatch();
  let sidebarSelector = useSelector((state) => state.sidebar);

  // styling of sidebar links
  const linkStyle = {
    light: 'text-slate-700 hover:bg-gradient-to-t hover:from-slate-300 hover:to-slate-200 hover:border-slate-400 active:bg-gradient-to-b active:from-slate-300 active:to-slate-200',
    dark: 'dark:text-slate-400 dark:hover:bg-gradient-to-t dark:hover:from-slate-600 dark:hover:to-slate-700 dark:active:bg-gradient-to-b dark:active:from-slate-600 dark:active:to-slate-700',
    active: {
      light: 'text-sky-500 border-sky-500 bg-gradient-to-r from-sky-100 to-sky-200 active:bg-gradient-to-bl active:from-sky-100 active:to-sky-200 hover:text-sky-700',
      dark: 'dark:bg-gradient-to-r dark:active:bg-gradient-to-tr dark:from-white/5 dark:active:from-white/5 dark:to-sky-400/30 dark:active:to-sky-400/50 dark:hover:to-sky-400/50 dark:hover:text-sky-400'
    }
  }

  const router = useRouter();
  const { asPath, pathname } = router;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => dispatch(sidebarAction.close())}
        className={` ${sidebarSelector.sidebar ? " opacity-100 z-40" : " opacity-0 -z-10"
          } backdrop-blur-sm fixed inset-0 bg-black/20 my-transition md:hidden dark:bg-slate-900/80`}></div>

      {/* Sidebar */}
      <aside
        className={`${sidebarSelector.sidebar ? "translate-x-0" : "-translate-x-full"
          } md:hidden bg-white/80 dark:bg-slate-800 transition duration-500 min-w-min w-80 max-w-[calc(100%-3rem)] shadow-xl shadow-slate-500  fixed top-0 left-0  h-screen z-50`}>

        {/* close button */}
        <div className="flex justify-end mb-2 text-slate-700 dark:text-slate-400 dark:hover:text-white  hover:bg-slate-200 dark:hover:bg-white/20 active:bg-gradient-to-l active:from-transparent active:to-slate-400">
          <button
            className="flex items-center justify-end px-4 py-3 w-full ml-auto"
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
                className={`group font-semibold items-center flex text-slate-700 cursor-pointer rounded-r-full`}>
                <Link href={link.href}>
                  <a
                    onClick={() => dispatch(sidebarAction.close())}
                    className={`${pathname === link.href
                      ? `${linkStyle.active.light} ${linkStyle.active.dark} `
                      : `${linkStyle.light} ${linkStyle.dark} border-transparent `
                      } font-semibold py-3 px-4 w-full rounded-r-full whitespace-nowrap border-l-4 `}>
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
