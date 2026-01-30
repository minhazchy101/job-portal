import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../pages/shared/Footer'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
      
    </>
  )
}

export default RootLayout
