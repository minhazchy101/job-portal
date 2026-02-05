import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../pages/shared/Footer'

const RootLayout = () => {
  return (
    <div className='px-6 sm:px-12 md:px-24 lg:px-32'>
    <Navbar/>
    <main className='min-h-screen'>
        <Outlet/>
    </main>
    <Footer/>
      
    </div>
  )
}

export default RootLayout
