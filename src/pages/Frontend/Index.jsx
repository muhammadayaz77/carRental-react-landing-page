import React from 'react'
import Home from './Home'
import About from './About'
import { Route,Routes } from 'react-router-dom'
import Models from './Models'
import Testimonials from './Testimonials'
import OurTeam from './OurTeam'
import Contact from './Contact'
function Index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/models' element={<Models />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/team' element={<OurTeam />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Index