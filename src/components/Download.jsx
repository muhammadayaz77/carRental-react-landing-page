import React from 'react'

function Download() {
  return (
    <>
    <div className='grid grid-cols-12 py-32' id='download'>
      <div className='md:col-span-8 lg:col-span-6 col-span-12 mx-10 md:ml-20'>
        <h2 className='h2 leading-10'>Download our app to get most out of it</h2>
        <p className='text-lg font-normal opacity-80 my-10'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div className='flex gap-5'>
        <img src="./public/Images/googleapp.svg" className='w-28 sm:w-36 md:w-60' alt="" />
        <img src="./public/Images/appstore.svg"  className='w-28 sm:w-36 md:w-60' alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Download