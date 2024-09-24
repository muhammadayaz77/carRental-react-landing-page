import React from 'react'

function ModelCard() {
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-20'>
      <div className='border-2'>
          <img src="./public/Images/audi-box.png" className='w-full h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>Audi A1</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>Audi</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Manual</p>
            <p>Diesel</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
      <div className='border-2'>
          <img src="./public/Images/audia1.jpg" className='w-full border-2 h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>Audia</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>Benz</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Auto</p>
            <p>Petrol</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
      <div className='border-2'>
          <img src="./public/Images/benz-box.png" className='w-full h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>Benz</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>Benz</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Manual</p>
            <p>Diesel</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
      <div className='border-2'>
          <img src="./public/Images/benz.jpg" className='w-full h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>Benz A1</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>Benz</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Manual</p>
            <p>Diesel</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
      <div className='border-2'>
          <img src="./public/Images/bmw-box.png" className='w-full h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>BMW A1</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>BMW</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Manual</p>
            <p>Diesel</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
      <div className='border-2'>
          <img src="./public/Images/bmw320.jpg" className='w-full h-[250px]' alt="" />
          <div className='flex justify-between px-5 items-center mt-5'>
            <h2 className='text-3xl font-bold'>BMW</h2>
            <div>
              <h2 className='text-3xl font-bold'>$45</h2>
              <p>per day</p>
            </div>
          </div>
          <div className='mx-16 mt-5 text-xl text-gray-500'>
          <div className='flex justify-between'>
            <p>BMW</p>
            <p>4/5</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Manual</p>
            <p>Diesel</p>
          </div>
          <hr className='my-5 h-[2px] bg-gray-400' />
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mb-5'>Book Ride</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ModelCard