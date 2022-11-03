import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SidebarDrawer from './SidebarDrawer';


const Layout = ({ children }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>

        <header className='flex-grow-0 sticky top-0 left-0'>
          <Header />
        </header>

        <main className='flex-1'>
          {children}
        </main>

        <footer className='flex-grow-0'>
          <Footer />
        </footer>

      </div>
      <SidebarDrawer />
    </>
  )
}

export default Layout