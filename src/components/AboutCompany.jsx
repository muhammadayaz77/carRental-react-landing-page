import React from 'react'

function AboutCompany() {
  return (
    <div className='grid items-center grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[80%] gap-14 mx-auto my-36'>
      <div>
        <img src="./public/Images/about-main.jpg" className='w-full h-full' alt="about main" />
      </div>
      <div>
        <h3 className='text-2xl font-semibold text-center lg:text-left'>About Company</h3>
        <h2 className='h2 my-4 text-center lg:text-left'>You start the engine and your adventure begins</h2>
        <p className='text-lg text-gray-500 text-center lg:text-left'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10'>
          <div className='flex flex-col lg:items-start items-center mb-10 sm:mb-0'>
              <img src="./public/Images/icon1 (2).png" className='w-[55%]' alt="" />
              <div className="flex mt-5 gap-3">
              <h2 className='h2'>20</h2>
              <p className='text-lg text-gray-500 leading-7'>Car <br /> Type</p>
              </div>
          </div>
          <div className='flex flex-col lg:items-start items-center mb-10 sm:mb-0'>
              <img src="./public/Images/icon2 (2).png" className='w-[55%]' alt="" />
              <div className="flex mt-5 gap-3">
              <h2 className='h2'>85</h2>
              <p className='text-lg text-gray-500 leading-7'>Rental <br /> Outlets</p>
              </div>
          </div>
          <div className='flex flex-col lg:items-start items-center mb-10 sm:mb-0'>
              <img src="./public/Images/icon3 (2).png" className='w-[45%]' alt="" />
              <div className="flex mt-5 gap-3">
              <h2 className='h2'>75</h2>
              <p className='text-lg text-gray-500 leading-7'>Repair <br /> Shop</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany