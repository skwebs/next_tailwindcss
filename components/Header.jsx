import React from 'react'
import { useEffect } from 'react';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import { useState } from 'react';

const Header = () => {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 64) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);


  return (
    <>
      <div className={`${shadow ? "shadow-lg dark:shadow-md dark:shadow-slate-700 my-bg-trans" : ""
        } w-full border-slate-600 transition-all ease-in-out duration-300 backdrop-blur-sm  dark:text-slate-500 `}>
        <TopHeader />
        <Navigation />
      </div>
    </>
  )
}

export default Header