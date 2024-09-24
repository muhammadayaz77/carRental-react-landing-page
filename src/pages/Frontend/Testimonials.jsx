import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Testimonial from '../../components/Testimonial'
import BookBanner from '../../components/BookBanner'

function Models() {
  return (
    <>
    <div id='heros-bg'>
    <Navbar></Navbar>
    <div className='ml-[2.5%] mt-16'>
    <h2 className='font-extrabold text-4xl'>Testimonials</h2>
    <h3 className='text-black font-semibold mt-4'>Home / Testimonials</h3>
    </div>
    </div>
    <Testimonial></Testimonial>
    <BookBanner></BookBanner>
    <Footer></Footer>
    </>
  )
}

export default Models