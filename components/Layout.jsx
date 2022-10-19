import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header className='flex-grow-0'>
          <Header />
        </header>
        <nav className='sticky top-0 left-0'>
          <Navigation />
        </nav>
        <main className='flex-1 py-8'>
          {children}
        </main>
        <footer className='flex-grow-0'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout