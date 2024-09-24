import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookBanner from '../../components/BookBanner'
import ModelCard from '../../components/ModelCard'
function Models() {
  return (
    <>
    <div id='heros-bg'>
    <Navbar></Navbar>
    <div className='ml-[2.5%] mt-16'>
    <h2 className='font-extrabold text-4xl'>Vehicle Models</h2>
    <h3 className='text-black font-semibold mt-4'>Home / Vehicle Models</h3>
    </div>
    </div>
    <ModelCard></ModelCard>
    <BookBanner></BookBanner>
    <Footer></Footer>
    </>
  )
}

export default Models