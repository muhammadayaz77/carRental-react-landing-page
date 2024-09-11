import React from 'react'

function DisplayContent({time}) {
  return (
    <div>
      <span className='bg-[#009BAC] px-4 py-3 md:px-6 rounded-md text-2xl md:py-4 text-white font-mono'>
        {(time.h >= 10) ? time.h : "0" + time.h}
        </span>&nbsp;:&nbsp;
      <span className='bg-[#009BAC] px-4 py-3 md:px-6 rounded-md text-2xl md:py-4 text-white font-mono'>
        {(time.m >= 10) ? time.m : "0" + time.m}
        </span>&nbsp;:&nbsp;
      <span className='bg-[#009BAC] px-4 py-3 md:px-6 rounded-md text-2xl md:py-4 text-white font-mono'>
        {(time.s >= 10) ? time.s : "0" + time.s}
        </span>&nbsp;:&nbsp; 
      <span className='bg-[#009BAC] px-4 py-3 md:px-6 rounded-md text-2xl md:py-4 text-white font-mono'>
        {(time.ms >= 10) ? time.ms : "0" + time.ms}
        </span>
    </div>
  )
}

export default DisplayContent