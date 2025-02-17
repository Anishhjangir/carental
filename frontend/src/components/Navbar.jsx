import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <div className='flex justify-between items-center shadow-sm p-5 h-14 w-full bg-blue-100'>
       <div className='w-20% h-10 font-bold text-[21px] '><h1 className='tracking-[3px]'>CARENTAL</h1></div>
       <div className='hidden md:flex gap-16  [&>li]:tracking-[1px] '>
        <li className='font-medium hover:scale-105 hover:text-blue-950 transition-all cursor-pointer hover:text-primary list-none'><NavLink to={'/'}>Home</NavLink></li>
        <li className='font-medium hover:scale-105 hover:text-blue-950 transition-all cursor-pointer hover:text-primary list-none' > <NavLink to={'AllVehicles'}> All Vehicals</NavLink></li>
        <li className='font-medium hover:scale-105 hover:text-blue-950 transition-all cursor-pointer hover:text-primary list-none'>Help & Support</li>
       </div>
       <div>
        <button className='rounded-[10px] bg-blue-950 cursor-pointer hover:invert hover:border hover:border-gray-500 transition-all text-white py-1.5 px-3.5'>Log In</button>
       </div>
    </div>
    </div>
  )
}

export default Navbar
