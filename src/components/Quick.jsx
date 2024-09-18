import React from 'react'

function Quick() {
  return (
    <>
    <div className='my-20'>
      <div className='text-center'>
        <p className='para'>Plan your trip now</p>
        <h2 className='h2'>Quick & easy car rental</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
        <div className='text-center mx-14'>
          <img src="./public/Images/icon1.png" className='mx-auto' alt="icon1" />
          <h3 className='text-[28px] font-extrabold'>Select Car</h3>
          <p className='text-balance font-semibold text-gray-500 mt-3 text-lg'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className='text-center mx-14 mt-10 md:mt-0'>
          <img src="./public/Images/icon2.png" className='mx-auto' alt="icon1" />
          <h3 className='text-[28px] font-extrabold'>Select Car</h3>
          <p className='text-balance font-semibold text-gray-500 mt-3 text-lg'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className='text-center mx-14 mt-10 lg:mt-0'>
          <img src="./public/Images/icon3.png" className='mx-auto' alt="icon1" />
          <h3 className='text-[28px] font-extrabold'>Select Car</h3>
          <p className='text-balance font-semibold text-gray-500 mt-3 text-lg'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Quick