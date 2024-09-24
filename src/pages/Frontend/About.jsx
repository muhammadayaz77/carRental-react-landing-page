import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookBanner from '../../components/BookBanner'
import Quick from '../../components/Quick'
import AboutCompany from '../../components/AboutCompany'
function About() {
  return (
    <>
    <div id='heros-bg'>
    <Navbar></Navbar>
    <div className='ml-[2.5%] mt-16'>
    <h2 className='font-extrabold text-4xl'>About</h2>
    <h3 className='text-black font-semibold mt-4'>Home / About</h3>
    </div>
    </div>
    <AboutCompany />
    <Quick></Quick>
    <BookBanner></BookBanner>
    <Footer></Footer>
    </>
  )
}

export default About