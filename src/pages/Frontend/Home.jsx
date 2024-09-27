import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import BookACar from '../../components/BookACar'
import Quick from '../../components/Quick'
import BackToTop from '../../components/BackToTop'
import Banner from '../../components/Banner'
import ChooseUs from '../../components/ChooseUs'
import Testimonial from '../../components/Testimonial'
import Faq from '../../components/Faq'
import Download from '../../components/Download'
import Footer from '../../components/Footer'
function Home() {
  return (
    <div className='relative'>
    <div className="hero-bg absolute top-0 right-0">
      <BackToTop></BackToTop>
    <Navbar></Navbar>
    <div className="2xl:w-[65%] w-[95%] mx-auto">
      <Hero></Hero> 
      <BookACar></BookACar>
      <Quick></Quick>
    </div>
      <Banner></Banner>
      <ChooseUs />
      <Testimonial />
      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Home