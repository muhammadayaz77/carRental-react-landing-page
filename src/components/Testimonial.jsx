import React from 'react'

function Testimonial() {
  return (
    <>
    <div className='bg-[#F8F8F8] py-28'>
      <div className='text-center md:w-[50%] w-[90%] mx-auto'>
        <h3 className='text-xl font-semibold mb-3'>Review by people</h3>
        <h2 className='sm:font-extrabold sm:text-5xl -tracking-tight text-black font-extrabold text-3xl mb-6'>Client's Testimonials</h2>
        <p className='text-gray-500'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>
      <div className='grid gap-7 grid-cols-1 lg:grid-cols-2 sm:w-[80%] w-[90%] mx-auto mt-20'>
        <div className=' p-12 bg-white shadow-lg'>
          <p className='text-2xl font-medium'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
          <div className='flex gap-4 items-center mt-7'>
            <img src="./public/Images/pfp1.jpg" className='w-20 h-20 rounded-[50%]' alt="" />
            <div>
              <h3 className='text-lg font-bold'>Harry Potter</h3>
              <p className='font-medium'>Belgrade</p>
            </div>
          </div>
        </div>
        <div className=' p-12 bg-white shadow-lg'>
          <p className='text-2xl font-medium'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
          <div className='flex gap-4 items-center mt-7'>
            <img src="./public/Images/pfp2.jpg" className='w-20 h-20 rounded-[50%]' alt="" />
            <div>
              <h3 className='text-lg font-bold'>Ron Rizzly</h3>
              <p className='font-medium'>Nov Sad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial