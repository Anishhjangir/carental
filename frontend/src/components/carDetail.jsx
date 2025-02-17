import React from 'react'

function CarDetail() {
  return (
    <div className='m-[80px]'>
      <div>
        <div className='w-full mb-2'><h1 className='font-bold text-3xl'>Volvo XC90</h1></div>
        <div className='w-full mb-2'><h4 className=' text-[12px]'>Safest Car in the World</h4></div>
      </div>

      <div className='grid grid-cols-2 gap-7 mt-7'>

        <div>
            <div className='rounded-2xl overflow-hidden border border-gray-400'><img src="car1.jpeg" alt="" className='h-fit' /></div>
            <div className='mt-7 border border-gray-400 rounded-2xl p-5 w-fit'>
                <h3 className='font-bold text-[20px]'>Describtion</h3>
                <p className='text-[13px] font-light mt-3'>Volvo XC90 is a luxury SUV that is known for its safety features and comfortable ride. It has a powerful engine and a smooth transmission.</p>
            </div>
            <div className='mt-7 border border-gray-400 rounded-2xl p-5'>
                <h3 className='font-bold text-[20px]'>Features</h3>

                <div className='grid grid-cols-4 mt-6'>
                <div>
                    <h5 className='font-bold'>Interior</h5>
                <ul className='list-disc ml-5 text-[13px] font-light mt-3'>
                    <li>Heated seats</li>
                    <li>Leather seats</li>
                    <li>Power steering</li>
                    <li>Power windows</li>
                </ul>
                </div>

                <div>
                    <h5 className='font-bold'>Safety</h5>
                <ul className='list-disc ml-5 text-[13px] font-light mt-3'>
                    <li>ABS</li>
                    <li>EBD</li>
                    <li>ADAS</li>
                    <li>Child lock</li>
                </ul>
                </div>

                <div>
                    <h5 className='font-bold'>Exterior</h5>
                <ul className='list-disc ml-5 text-[13px] font-light mt-3'>
                   <li>LED headlights</li>
                   <li>LED taillights</li>
                   <li>Power sunroof</li>
                </ul>
                </div>

                <div>
                    <h5 className='font-bold'>Convenience</h5>
                <ul className='list-disc ml-5 text-[13px] font-light mt-3'>
                    <li>Leather seats</li>
                    <li>Bluethoot</li>
                    <li>harman carden speakers</li>
                </ul>
                </div>
                </div>
               
                
            </div>
        </div>


        <div  className='border rounded-2xl p-7 border-gray-400 h-fit'>

             <div>
                <h3 className='font-bold'>Our Price</h3>
                <h1 className='flex font-bold text-3xl mt-5'><img src="rupee.png" alt="" height={30} width={30}/>  550 / hrs</h1>
             </div>

            <div>
                <ul className='[&>li]:flex justify-between [&>li]:my-7.5 [&>li]:gap-4 [&>li]:text-[13px] [&>li]:border-b [&>li]:p-2 [&>li]:border-gray-400 '>
                    <li><img src="type.png" alt=""  height={20} width={20}/><p> Body Type</p><h5 className='ml-10'> - SUV</h5></li>
                    <li><img src="dashboard.png" alt="" height={20} width={20}/> <p>Mileage</p><h5 className='ml-10'> - 14km/ltr</h5></li>
                    <li><img src="fuel-station.png" alt="" height={20} width={20}/><p> Fuel Type</p><h5 className='ml-10'> - Petrol</h5></li>
                    <li><img src="calendar.png" alt="" height={20} width={20}/><p> Year</p><h5 className='ml-10'> - 2020</h5></li>
                    <li><img src="gearshift.png" alt="" height={20} width={20}/><p> Transmission</p><h5 className='ml-10'> - Automatic</h5></li>
                    <li><img src="steering-wheel.png" alt="" height={20} width={20}/><p> Drive Type</p><h5 className='ml-10'> - All Wheel Drive</h5></li>
                    <li><img src="car-engine.png" alt="" height={20} width={20}/> <p>Engine</p><h5 className='ml-10'> - 2.0L</h5></li>
                    <li><img src="car-door.png" alt="" height={20} width={20}/><p> Doors</p><h5 className='ml-10'> - 5</h5></li>
                    <li><img src="piston.png" alt="" height={20} width={20}/><p> Cylinders</p><h5 className='ml-10'> - 6</h5></li>
                    <li><img src="fill.png" alt="" height={20} width={20}/><p> Color</p><h5 className='ml-10'> - Pearl White</h5></li>
                </ul>
            </div>
        </div>
      </div>

      <div className='border border-gray-400 rounded-2xl w-full mt-5 p-7'>
        <h3 className='font-bold mb-5 text-2xl'>Book Now</h3>
        <form action="" method="post">
            <div className='[&>h2]:my-3 [&>h2]:font-bold [&>h2]:text-gray-500'>
             <h2>Personal Details</h2>   
            <div className='grid grid-cols-2 gap-8 mb-7'>
            <input type="text" name="first name" id="" required placeholder='First name' className='border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
            <input type="text" name="last name" id="" required placeholder='Last name' className='border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
            <input type="number" name="AGE" id=""  placeholder='Age' className='border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
            <span className='[&>*]:m-3.5 text-gray-500 [&>*]:text-[13px] w-full border border-gray-400 rounded-2xl '>
                <label>Select Gender : </label>
                <input type="radio" name="gender" id="" value="male" required className='
                border border-gray-400 rounded-full p-2'/>
                <label for="" className='ml-2'>Male</label>
                <input type="radio" name="gender" value="female" />
                <label for="" className='ml-2'>Female</label>
            </span>
            </div>
            <h2>Documents</h2>
            <div className='[&>*]:mx-3 text-[13px] text-gray-500'>
                <label htmlFor="">Driving License number: </label>
                <input type="text" name="Licence" id="" placeholder='* * * * * * * * *' className='p-2 text-center border border-gray-400 rounded-xl'/>
            </div>
            <h2>Address</h2>
            <div className='grid grid-cols-2 gap-8'>
                <input type="text" name="street" id="" required placeholder='Street' className='
                border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
                <input type="text" name="city" id="" required placeholder='City' className='
                border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
                <input type="text" name="state" id="" required placeholder='State' className='
                border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
                <input type="text" name="pincode" id="" required placeholder='Pincode'
                className='border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
            </div>
            <h2>Contect</h2>
            <div className='grid grid-cols-2 gap-8'>
                <input type="text" name="phone" id="" required placeholder='Phone' className='
                border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
                <input type="email" name="email" id="" required placeholder='Email'
                className='border pl-4 p-2 text-[13px] rounded-xl border-gray-400'/>
            </div>
            </div>
            
            
            <input type="submit" value="BOOK THE CAR" className='border mt-7 border-gray-400 bg-blue-900 rounded-2xl p-2 w-[20%] cursor-pointer hover:text-[15px] transition-all text-white' />
        </form>
      </div>


    </div>
  )
}

export default CarDetail
