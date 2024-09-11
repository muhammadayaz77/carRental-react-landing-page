import React from 'react'

function Btns({start,stop,reset,status}) {
  return (
    <div className='mt-9 text-center'>
      {status === 0 && 
      <button className='hover:bg-[#009BAC] bg-white border-2 border-[#009BAC] hover:text-white px-8 transition-all py-2'
      onClick={start}
      >START</button>
}
      {
        status === 1 &&
        <>
        <button className='hover:bg-red-500 bg-white border-2 border-red-500 hover:text-white px-8 transition-all py-2 mr-3'
        onClick={stop}
        >STOP</button>
        <button className='hover:bg-yellow-500 bg-white border-2 border-yellow-500 hover:text-white px-8 transition-all py-2'
        onClick={reset}
        >RESET</button>
        </>
      }
      
      {
        status === 2 && 
        <>
        <button className='hover:bg-[#009BAC] bg-white border-2 border-[#009BAC] hover:text-white px-8 transition-all py-2 mr-3'
      onClick={start}
      >RESUME</button>
      <button className='hover:bg-yellow-500 bg-white border-2 border-yellow-500 hover:text-white px-8 transition-all py-2'
        onClick={reset}
        >RESET</button>
        </>
      }
    </div>
  )
}

export default Btns