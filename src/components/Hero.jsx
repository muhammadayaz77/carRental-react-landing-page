import React from 'react'

function Hero() {
  return (
    <>
    <div className='grid grid-cols-12'>
      <div className='lg:col-span-4 col-span-12 flex justify-center text-center lg:text-start flex-col mt-16'>
        <h5 className='text-3xl font-extrabold'>Plan your trip now</h5>
        <h2 className='text-7xl font-extrabold mt-5 mb-8'>Save <span className='text-[#FF4C30]'>big</span> with our car rental</h2>
        <p className='text-lg opacity-80'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className='mt-9 space-x-4 md:block'>
        <button className='hover:bg-[#FF4D30] bg-[#FF4C30] lg:py-4 xl:px-9 py-3 px-7 text-sm sm:text-lg font-semibold text-white registerBtn '>Book Ride</button>
        <button className='hover:bg-transparent hover:text-black bg-black lg:py-4 xl:px-9 py-3 px-7 text-sm sm:text-lg font-semibold text-white hover:border-2 hover:border-black transition-all'>Learn More</button>
        
        </div>
      </div>
      <div className='lg:col-span-8 col-span-12 p-4'>
        <img className='w-[100%] hidden lg:block' src="./public/Images/main-car.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Hero