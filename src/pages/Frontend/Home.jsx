import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import BookACar from '../../components/BookACar'
function Home() {
  return (
    <div className="hero-bg">
    <Navbar></Navbar>
    <div className="w-[95%] mx-auto">
      <Hero></Hero>
      <BookACar></BookACar>
    </div>
    </div>
  )
}

export default Home