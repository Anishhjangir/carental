import React from 'react'


const Items=[
  {
      id:1,
      name:'SUV',
      icon:'https://cdn-icons-png.flaticon.com/128/13584/13584003.png'
  },
  {
      id:2,
      name:'Sedan',
      icon:'https://cdn-icons-png.flaticon.com/128/3202/3202003.png'
  },
  {
      id:3,
      name:'Hatchback',
      icon:'https://cdn-icons-png.flaticon.com/128/5035/5035167.png'
  },
  {
      id:4,
      name:'Electric',
      icon:'https://cdn-icons-png.flaticon.com/128/4564/4564336.png'
  },
  {
      id:5,
      name:'Convertible',
      icon:'https://cdn-icons-png.flaticon.com/128/5035/5035202.png'
  },
  {
      id:5,
      name:'Hybrid',
      icon:'https://cdn-icons-png.flaticon.com/128/3202/3202003.png'
  },
  {
      id:5,
      name:'Coupe',
      icon:'https://cdn-icons-png.flaticon.com/128/4391/4391630.png'
  },
  {
      id:5,
      name:'Van',
      icon:'https://cdn-icons-png.flaticon.com/128/1433/1433678.png'
  },
  {
      id:5,
      name:'Truck',
      icon:'https://cdn-icons-png.flaticon.com/128/5814/5814855.png'
  },

]

function Cetegory() {
  return (
   <>
     <div>
       <h2 className='font-bold text-3xl text-center  mb-5'><span className='border-b-2 border-blue-900 p-2'>Browse By Type</span></h2>
       <div className='grid grid-cols-9 gap-6 px-20 mt-[40px] mb-[40px]'>
      {
        Items?.map((item,id) => {
          return(
            <div key={id} className=' border border-gray-400 rounded-xl p-3 overflow-hidden items-center flex flex-col hover:shadow-lg  hover:scale-105 transition-all cursor-pointer'>
            <img src={item.icon} height={40} width={40} />
            <h5>{item.name}</h5>
           </div>
          )
        })
      }
       </div>
      </div>
   </>
  )
}

export default Cetegory
