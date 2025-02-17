import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Outlet } from "react-router"


const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
