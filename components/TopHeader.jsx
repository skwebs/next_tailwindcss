import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Link from 'next/link';

const TopHeader = () => {
  const [dateState, setDateState] = useState(new Date());
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    const intervalId = setInterval(() => {
      console.log("watching");
      setDateState(new Date());
    }, 1000);
    return function cleanUp() {
      clearInterval(intervalId);
    };
  }, []);

  const marqueeLinkStyle = 'dark:hover:text-slate-300 hover:underline active:text-sky-500 dark:active:text-sky-500';

  return (
    <>
      <div className="w-full py-1 bg-slate-50 dark:bg-slate-800">
        <div className="my-container">
          <div className="relative w-full flex md:justify-between md:items-center flex-col justify-start md:flex-row">
            {/* left side */}
            <div className="min-w-[230px] whitespace-nowrap font-semibold border-b dark:border-b-slate-700 md:border-none ">
              {domLoaded
                ? dateState.toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })
                : ""}
            </div>

            {/* right side */}
            <div className="w-full md:ml-8">
              <Marquee gradient={false} speed={50} pauseOnHover>
                <div className="space-x-10 md:pl-8">
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                  <Link href={`/`}><a className={`${marqueeLinkStyle}`}>This is a link for notification</a></Link>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
