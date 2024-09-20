import React from 'react'

function ChooseUs() {
  return (
    <>
    <div className='w-[100%]' id='chooseUs'>
      <div>
        <img src="./public/Images/main.png" className='mx-auto' alt="main bg" />
      </div>
      <div className='grid lg:grid-cols-12 sm:w-[85%] w-[95%] mx-auto'>
        <div className='col-span-12 lg:col-span-6 lg:text-left text-center'>
          <h3 className='text-2xl font-bold mb-3'>Why Choose Us</h3>
          <h2 className='text-5xl font-extrabold tracking-wide text-wrap mb-5'>Best valued deals you will ever find</h2>
          <p className='text-[15px] font-light text-gray-500 mb-7'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-3 px-7 font-bold text-white registerBtn'>Find Details</button>
        </div>
        <div className='lg:col-span-6 col-span-12 pl-0 sm:pl-7 space-y-6 mt-12 lg:mt-0'>
            <div className='flex items-center space-x-3 sm:mx-12 mx-0 md:mx-28 lg:mx-0'>
              <img src="./public/Images/icon1 (1).png" alt="" />
              <div className=''>
                <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl'>Cross Country Drive</h2>
                <p className='text-[15px] font-light text-gray-500'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>
            <div className='flex items-center space-x-3 sm:mx-12 mx-0 md:mx-28 lg:mx-0'>
              <img src="./public/Images/icon2 (1).png" alt="" />
              <div className=''>
                <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl'>All Inclusive Pricing</h2>
                <p className='text-[15px] font-light text-gray-500'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>
            <div className='flex items-center space-x-3 sm:mx-12 mx-0 md:mx-28 lg:mx-0'>
              <img src="./public/Images/icon3 (1).png" alt="" />
              <div className=''>
                <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl'>No Hidden Charges</h2>
                <p className='text-[15px] font-light text-gray-500'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChooseUs