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
                            ? "text-sky-500 bg-black/5 rounded"
                            : " text-slate-700 dark:text-slate-400"
                            } font-semibold px-3 py-2 hover:text-sky-500`}>
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ml-2 flex justify-center items-center space-x-2 ">
                <button
                  className="p-[2px] hover:ring-slate-300 rounded-full hover:ring-[2px] hover:ring-offset-2  transition duration-300  dark:hover:ring-slate-700"
                  onClick={() => dispatch(nightModeAction.toggle())}>
                  {nightModeSelector.nightMode ? (
                    <MdOutlineWbSunny className="text-2xl" />
                  ) : (
                    <MdNightlight className="text-2xl -rotate-45" />
                  )}
                </button>

                <button
                  className="bg-slate-200 hover:bg-transparent p-[3px] ring-slate-300 rounded-full hover:ring-[2px] hover:ring-offset-1  transition duration-300 dark:bg-gray-700 dark:hover:ring-slate-700"
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
