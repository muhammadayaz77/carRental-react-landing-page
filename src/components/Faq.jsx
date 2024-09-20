import React, { useState } from 'react'

function Faq() {
  let [toggle,setToggle] = useState(false);
  let [toggle2,setToggle2] = useState(false);
  let [toggle3,setToggle3] = useState(false);
  return (
    <>
    <div className='my-20' id='faq'>
      <div className='text-center mb-10'>
        <h3 className='text-2xl font-extrabold tracking-widest'>FAQ</h3>
        <h2 className='h2 mt-2'>Frequently Asked Questions</h2>
        <p className='text-xl font-normal opacity-80 mt-5'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to <br /> Common Concerns and Inquiries.</p>
      </div>
      <div className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto shadow-md'>
        <div className='w-full border-2 overflow-hidden' name="" id="">
         <h2 
         onClick={() => setToggle(!toggle)}
         className={`text-2xl font-semibold px-16 py-5 bg-white ${toggle && 'shadow-lg shadow-[#FF4C30] bg-[#FF4C30] text-white'}`}>1. What is special about comparing rental car deals?</h2>
         <p className={`text-lg opacity-80 font-normal bg-white px-16 py-2 transition-all ${!toggle && 'hidden'}`}>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies. </p>
        </div>
        <div className='w-full border-2 overflow-hidden' name="" id="">
         <h2 
         onClick={() => setToggle2(!toggle2)}
         className={`text-2xl font-semibold px-16 py-5 bg-white ${toggle2 && 'shadow-lg shadow-[#FF4C30] bg-[#FF4C30] text-white'}`}>2. How do I find the car rental deals?</h2>
         <p className={`text-lg opacity-80 font-normal bg-white px-16 py-2 transition-all ${!toggle2 && 'hidden'}`}>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions. </p>
        </div>

        <div className='w-full border-2 overflow-hidden' name="" id="">
         <h2 
         onClick={() => setToggle3(!toggle3)}
         className={`text-2xl font-semibold px-16 py-5 bg-white ${toggle3 && 'shadow-lg shadow-[#FF4C30] bg-[#FF4C30] text-white'}`}>3. How do I find such low rental car prices?</h2>
         <p className={`text-lg opacity-80 font-normal px-16 py-2 transition-all ${!toggle3 && 'hidden'}`}>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices. </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq