import React from 'react'
import Search from './search'

function Hero() {
  return (
    <>
    <div className='flex flex-col items-center p-10 py-20 mb-[50px]  gap-6  h-fit w-full bg-[#eef0fc]'>
        <h2 className='text-lg mt-7'>Rent a car and explore the world</h2>
        <h1 className='text-[60px] mb-[30px] font-semibold'>Find Your Dream Sawari</h1>
        <Search/>
        <img src='./tesla.png'/>
      </div>
    </>
  )
}

export default Hero
