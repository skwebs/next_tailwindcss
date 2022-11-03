import Link from "next/link";
import { useRouter } from "next/router";
import { AppNavLinks } from "../constants";
import Brand from "./Brand";
import {
  MdMenu,
  MdNightlight,
  MdOutlineWbSunny,
  MdPerson,
} from "react-icons/md";
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { iconAction, nightModeAction, sidebarAction } from "../store";

const Navigation = () => {
  const dispatch = useDispatch();
  let nightModeSelector = useSelector((state) => state.nightMode);

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
                className=" md:hidden text-5xl p-3 mr-3 hover:bg-slate-100 transition duration-200 rounded-full cursor-pointer dark:hover:bg-white/10"
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
                            ? " text-sky-500 bg-black/5 rounded"
                            : " text-slate-700 dark:text-slate-400"
                            } font-semibold px-3 py-2 hover:underline hover:underline-offset-8 scale-150`}>
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ml-2 flex justify-center items-center space-x-2 ">
                <button title={nightModeSelector.nightMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
                  className="p-2 transition duration-300 rounded-lg hover:bg-slate-700/5 active:bg-slate-700/10 active:text-slate-800 dark:hover:bg-white/10 dark:active:bg-white/20 dark:active:text-slate-300"
                  onClick={() => dispatch(nightModeAction.toggle())}>
                  {nightModeSelector.nightMode ? (<BsSunFill className="text-2xl" />) : (<BsMoonFill className="text-2xl" />)}
                </button>

                <button title="Open user option"
                  className="group p-2 transition duration-300 rounded-full bg-slate-700/5 hover:bg-slate-700/10 active:text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:active:bg-white/20 dark:active:text-slate-300"
                  onClick={() => alert("user")}>
                  <MdPerson className="text-2xl" />
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
