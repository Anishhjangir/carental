import React from 'react'

function Search() {
  return (
    <>
    <div className='flex border border-gray-400 sm:flex-row flex-col justify-evenly grow w-[80%]  [&>*]:border-r [&>*]:last:border-none bg-blue-100 rounded-2xl p-3'>
        <div className = " text-[12px] font-bold  sm:w-1/3 grid place-item-center">
            <h6 className='ml-4'>Pickup Date</h6><input type="date" name="Picup date" id="" className='border cursor-pointer border-gray-400 m-3 p-2 rounded-2xl' />
        </div>

        <div className = " text-[12px] font-bold  sm:w-1/3 grid place-item-center">
           <h6 className='ml-4'>Drop Date</h6><input type="date" name="Drop date" id="" className='border cursor-pointer border-gray-400 m-3 p-2 rounded-2xl' />
        </div>
    
        <div className = "   sm:w-1/3 text-center pt-[25px]">
        <button className=' rounded-[10px] bg-blue-950 cursor-pointer hover:invert hover:border-gray-500 hover:border transition-all text-white py-1.5 px-3.5'>Find Your Car</button>
        </div>
    </div>
    </>
  )
}

export default Search
