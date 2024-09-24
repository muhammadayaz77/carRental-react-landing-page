import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookBanner from '../../components/BookBanner'
function Contact() {
  return (
    <>
    <div id='heros-bg'>
    <Navbar></Navbar>
    <div className='ml-[2.5%] mt-16'>
    <h2 className='font-extrabold text-4xl'>Contacts</h2>
    <h3 className='text-black font-semibold mt-4'>Home / Contacts</h3>
    </div>
    </div>
    <BookBanner></BookBanner>
    <Footer></Footer>
    </>
  )
}

export default Contact