import React from 'react'

function Footer() {
  return (
    <div className='text-center bg-blue-950 text-white'>
      <div><h1 className='text-5xl font-bold pt-[60px] mb-[40px] tracking-[5px]'>CARENTAL</h1></div>
      <div><p className='text-center mb-[40px] text-[13px] text-gray-300'>We're here to provide you with the best vehicles and <br /> a seamless rental experience. Stay connect for update, <br /> special offer and more. Drive with confidence.</p></div>
      <div className='list-none flex justify-evenly text-[14px] font-bold mb-[40px] cursor-pointer  [&>li]:tracking-[2px] [&>li]:hover:scale-105 [&>li]:transition-all'>
        <li>Home</li>
        <li>All Vahicals</li>
        <li>Help & Support</li>
      </div>
      <div className='list-none flex justify-center gap-[50px] mb-[40px] cursor-pointer '>
        <li><img src="facebook.png" alt="" height={30} width={30} /></li>
        <li><img src="instagram.png" alt="" height={30} width={30}/></li>
        <li><img src="x.png" alt="" height={30} width={30}/></li>
      </div>
      <div className='text-[13px] font-semibold text-gray-400 pb-[60px]'><p>© Copyright 2025 Usercentrics GmbH</p></div>
    </div>
  )
}

export default Footer
