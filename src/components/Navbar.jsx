import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";
function Navbar() {
  let [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <div className='w-full'>
      <div className='flex w-[95%] mx-auto py-6 justify-between text-black items-center'>
        <a href="#">
          <img src="./public/logo.png" className='w-40 hover:scale-105 transition-all' alt="tailwind-css" />
        </a>
        <ul className='hidden xl:flex text-base font-semibold space-x-4'>
          <li className='hover:text-[#FF4C30] rounded-md transition-all cursor-pointer pl-3'>Home</li>
          <li className='hover:text-[#FF4C30] rounded-md transition-all cursor-pointer pl-3'>About</li>
          <li className='hover:text-[#FF4C30] rounded-md transition-all cursor-pointer pl-3'>Contact</li>
          <li className='hover:text-[#FF4C30] rounded-md transition-all cursor-pointer pl-3'>Products</li>
        </ul>
        <div className='relative hidden xl:flex justify-center items-center gap-3'>
         <button className='font-semibold hover:text-[#FF4C30] transition-all'>Sign in</button>
         <button className='hover:bg-[#FF4D30] bg-[#FF4C30] py-4 px-9 font-semibold text-white registerBtn'>Register</button>
        </div>
        {!isMenuOpen ? 
        <RiMenu3Fill onClick={() => setIsMenuOpen(!isMenuOpen)} className='block xl:hidden text-4xl cursor-pointer transition-all' />
        :
        <ImCross onClick={() => setIsMenuOpen(!isMenuOpen)} className='block xl:hidden text-2xl cursor-pointer' />
        }
          <div className={`absolute xl:hidden top-[73px] md:top-[93px] left-0 w-full bg-white flex flex-col itemscen
          gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition : 'transform 0.3s ease,opacity 0.3s ease'}}>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Products</li>
            
          </div>
      </div>
    </div>
  )
}

export default Navbar