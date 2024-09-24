import React from 'react'

function TeamCard() {
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-20'>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/1.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Luke Millter</h2>
        <p className='text-base text-gray-500'>Salesman</p>
      </div>
      </div>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/2.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Mr Harry</h2>
        <p className='text-base text-gray-500'>Sr. Developer</p>
      </div>
      </div>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/3.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Martin Suton</h2>
        <p className='text-base text-gray-500'>Accountant</p>
      </div>
      </div>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/4.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Luke Millter</h2>
        <p className='text-base text-gray-500'>Salesman</p>
      </div>
      </div>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/5.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Luke Guptill</h2>
        <p className='text-base text-gray-500'>Customer</p>
      </div>
      </div>
      <div id='teamCard'>
      <div className='bg-[#F6F6F6]'>
         <img src="./public/Images/6.png" className='mx-auto' alt="" />
      </div>
      <div className='text-center border-[1px] border-t-0 py-8'>
        <h2 className='text-xl font-bold'>Mr Handsome</h2>
        <p className='text-base text-gray-500'>Tester</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default TeamCard