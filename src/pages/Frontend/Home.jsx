import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import BookACar from '../../components/BookACar'
import Quick from '../../components/Quick'
import BackToTop from '../../components/BackToTop'
function Home() {
  return (
    <div className="hero-bg">
      <BackToTop></BackToTop>
    <Navbar></Navbar>
    <div className="w-[95%] mx-auto">
      <Hero></Hero> 
      <BookACar></BookACar>
      <Quick></Quick>
    </div>
    </div>
  )
}

export default Home