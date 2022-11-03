import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Link from 'next/link';

const Header = () => {
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

  return (
    <>

      <div className="w-full border-b dark:border-slate-700 py-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-400">
        <div className="my-container">
          <div className="w-full flex md:justify-between md:items-center flex-col justify-start md:flex-row">
            {/* left side */}
            <div className="min-w-[230px] whitespace-nowrap font-semibold border-b dark:border-b-slate-700 md:border-none">
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

            {/* middle */}
            <div></div>

            {/* right side */}
            <div className="w-full md:ml-8">
              <Marquee gradientWidth={100} speed={50} pauseOnHover>
                <div className="flex space-x-10 md:pl-8">
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/about`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                  <Link href={`/`}><a className="text-blue-700 hover:underline">This is a link for notification</a></Link>
                </div>
              </Marquee>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
