import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import BookACar from '../../components/BookACar'
import Quick from '../../components/Quick'
import BackToTop from '../../components/BackToTop'
import Banner from '../../components/Banner'
import ChooseUs from '../../components/ChooseUs'
function Home() {
  return (
    <div className="hero-bg">
      <BackToTop></BackToTop>
    <Navbar></Navbar>
    <div className="2xl:w-[65%] w-[95%] mx-auto">
      <Hero></Hero> 
      <BookACar></BookACar>
      <Quick></Quick>
    </div>
      <Banner></Banner>
      <ChooseUs />
    </div>
  )
}

export default Home