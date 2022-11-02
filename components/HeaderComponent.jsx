import React from 'react'
import { useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { useState } from 'react';

const HeaderComponent = () => {
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
        <Header />
        <Navigation />
      </div>
    </>
  )
}

export default HeaderComponent