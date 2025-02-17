import React from 'react'

function City() {
  return (
    <div className=' m-[80px]'>
      <div><h2 className='font-bold text-3xl text-center  mb-[50px] '><span className='border-b-2 border-blue-900 p-2'>Why Choose Us?</span></h2></div>
      <div className='grid grid-cols-4 gap-8 [&>div]:border [&>div]:rounded-2xl [&>div]:border-gray-400 [&>div]:p-5'>
        <div>
            <img src="bill.png" alt="" height={50} width={50} />
            <h4 className='font-bold mt-3 mb-3'>Special Finencial Offers</h4>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque, porro minus placeat magnam laboriosam officiis non harum</p>
        </div>
        <div>
            <img src="deal.png" alt="" height={50} width={50} />
            <h4 className='font-bold mt-3 mb-3'>Trusted Car Dealers</h4>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque, porro minus placeat magnam laboriosam officiis non harum</p>
        </div>
        <div>
            <img src="money-banking.png" alt="" height={50} width={50} />
            <h4 className='font-bold mt-3 mb-3'>Transparent Pricing</h4>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque, porro minus placeat magnam laboriosam officiis non harum</p>
        </div>
        <div>
            <img src="search.png" alt="" height={50} width={50} />
            <h4 className='font-bold mt-3 mb-3'>Well maintened Cars</h4>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque, porro minus placeat magnam laboriosam officiis non harum</p>
        </div>
      </div>
    </div>
  )
}

export default City
