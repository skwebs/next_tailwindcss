import Link from "next/link";
import { useRouter } from "next/router";
import { AppNavLinks } from "../constants";
import Brand from "./Brand";
import { MdMenu } from "react-icons/md";
import { BsSunFill, BsMoonFill, BsFillPersonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { nightModeAction, sidebarAction } from "../store";

const Navigation = () => {
  const dispatch = useDispatch();
  let nightModeSelector = useSelector((state) => state.nightMode);

  const navBtnStyle = 'group p-2 text-slate-600 bg-slate-700/10 hover:bg-transparent hover:outline outline-2 outline-slate-300  active:outline-slate-500 dark:bg-white/10 dark:hover:outline-slate-700 dark:active:outline-slate-400';

  const router = useRouter();
  const { asPath, pathname } = router;
  console.log(router);

  return (
    <>
      <div className="w-full">
        <div className="my-container mx-auto">
          <div className="flex justify-between">
            {/* left side */}
            <div className="flex items-center h-14">
              <MdMenu
                onClick={() => dispatch(sidebarAction.toggle())}
                className=" md:hidden text-5xl p-3 mr-3 hover:bg-slate-100 active:text-slate-600 active:bg-slate-200 rounded-full cursor-pointer  dark:hover:bg-white/10 dark:active:text-slate-300 dark:active:bg-white/20"
              />
              <Link href={`/`}>
                <a>
                  <Brand className="text-2xl" />
                </a>
              </Link>
            </div>

            {/* right side */}
            <div className="flex items-center">
              {/* navigation */}
              <nav>
                <ul className="hidden md:flex items-center">
                  {AppNavLinks.map((link, index) => (
                    <li key={index} className="group">
                      <Link href={link.href}>
                        <a
                          className={`${pathname === link.href
                            ? " text-sky-500 active:bg-sky-500/5 dark:active:bg-sky-600/10"
                            : " text-slate-700 dark:text-slate-400 active:bg-slate-600/5 dark:active:bg-slate-100/5"
                            } rounded-md font-semibold px-3 py-2 hover:underline hover:underline-offset-8 whitespace-nowrap `}>
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ml-2 flex justify-center items-center space-x-2 ">
                <button title={nightModeSelector.nightMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
                  className={`${navBtnStyle} rounded-md`}
                  onClick={() => dispatch(nightModeAction.toggle())}>
                  {nightModeSelector.nightMode ? (<BsSunFill className="text-2xl" />) : (<BsMoonFill className="text-2xl" />)}
                </button>

                <button title="Open user option"
                  className={`${navBtnStyle} rounded-full`}
                  onClick={() => console.log("user clicked!")}>
                  <BsFillPersonFill className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
