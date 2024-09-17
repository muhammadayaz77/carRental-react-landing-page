import React from 'react'

function BookACar() {
  return (
    <>
    <div className='w-[100%] shadow-xl border-2 my-14' id='bookACar' > 
      <div className='w-[95%] mx-auto grid grid-cols-12 gap-y-7 gap-6 py-10'>
          <div className='col-span-12'>
            <h2 className='font-extrabold text-3xl'>Book a car</h2>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6'>
            <form class="w-[100%]">
            <h3 className='font-semibold text-xl mb-3'>Select Your Car Type <sup className='text-lg text-red-600'>*</sup></h3>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-[17px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-500">
    <option selected>Select your car type</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select> 
</form>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6'>
            <form class="w-[100%]">
            <h3 className='font-semibold text-xl mb-3'>Pick-up <sup className='text-lg text-red-600'>*</sup></h3>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-[17px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-500">
    <option selected>Select pick up location</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6'>
            <form class="w-[100%]">
            <h3 className='font-semibold text-xl mb-3'>Drop-off <sup className='text-lg text-red-600'>*</sup></h3>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-[17px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-500">
    <option selected>Select drop off location</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6'>
            <form class="w-[100%]">
            <h3 className='font-semibold text-xl mb-3'>Pick-up <sup className='text-lg text-red-600'>*</sup></h3>
  <input type='date' id="countries" class="bg-gray-50 border border-gray-300 text-[17px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-500">
    
  </input>
</form>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6'>
            <form class="w-[100%]">
            <h3 className='font-semibold text-xl mb-3'>Drop-off <sup className='text-lg text-red-600'>*</sup></h3>
  <input type='date' id="countries" class="bg-gray-50 border border-gray-300 text-[17px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-500">
    
  </input>
</form>
          </div>
          <div className='lg:col-span-4 col-span-12 md:col-span-6 mt-16 md:mt-0 relative'>
  <button id="countries" class="bg-[#FF4C30] text-[17px] block w-full p-[17px] dark:border-gray-600 text-white dark:focus:ring-blue-500 font-semibold text-lg mt-auto absolute bottom-0 shadow-md shadow-[#FF4C30] registerBtn">
    Search
  </button>
          </div>
      </div>
    </div>
    </>
  )
}

export default BookACar