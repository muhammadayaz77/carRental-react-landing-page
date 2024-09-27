import React from 'react'

function ContactBg() {
  return (
    <>
    <div id="bg-contact" className='mx-auto w-[98%] sm:w-[90%] pt-16 pb-28'>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-10'>
        <div className='pr-24 mb-10 lg:mb-0'> 
          <div className='text-5xl font-extrabold'>Need additional information?</div>
          <p className='text-base font-normal text-gray-500 my-5'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <p className='text-base font-semibold hover:text-[#FF483C] transition-all'>0331-9090041</p>
          <p className='text-base my-3 font-semibold hover:text-[#FF483C] transition-all'>muhammadayaz22757@gmail.com</p>
          <p className='text-base font-semibold hover:text-[#FF483C] transition-all'>Peshawar, Pakistan</p>
        </div>
        <div>
          <div>
          <h3 className='text-base font-bold tracking-wide'>Full Name<sup className='text-red-600 text-base'>*</sup></h3>
          <input
          className='bg-[#F2F2F2] text-base px-10 py-4 text-black focus:outline-none w-full mt-3'
          type="text" placeholder='E.g: "John Doe"' />
          </div>
          <div className='mt-6'>
          <h3 className='text-base font-bold tracking-wide'>Email<sup className='text-red-600 text-base'>*</sup></h3>
          <input
          className='bg-[#F2F2F2] text-base px-10 py-4 text-black focus:outline-none w-full mt-3'
          type="text" placeholder='E.g: "muhammad@gmail.com"' />
          </div>
          <div className='mt-6'>
          <h3 className='text-base font-bold tracking-wide'>Tell us about it<sup className='text-red-600 text-base'>*</sup></h3>
          <textarea
          rows={3}
          className='bg-[#F2F2F2] text-base px-10 py-4 text-black focus:outline-none w-full mt-3'
          type="text" placeholder='E.g: "Convey Message..."' />
          </div>
          <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn w-full mt-5'>Send Message</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactBg