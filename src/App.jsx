import DisplayContent from './DisplayContent'
import Btns from './Btns'
import './App.css'
import { useState } from 'react'
function App() {
  let [status,setStatus] = useState(0);
  let [interv,setInterv] = useState()
  let [time,setTime] = useState(
    {ms:0,s:0,m:0,h:0}
  )
  let updateH = time.h,updateM = time.m,updateS = time.s,updateMS = time.ms;
  let start = () => {
    setStatus(1);
    setInterv(setInterval(run,10))
  }
  let stop = () => {
    clearInterval(interv);
    setStatus(2);
  }
  let reset = () => {
    clearInterval(interv);
    setTime({ms:0,s:0,m:0,h:0})
    setStatus(0);
  }

  let run = () => {
    if(updateM === 60){
      updateH++;
      updateM = 0;
    }
    else if(updateS === 60){
      updateM++;
      updateS = 0;
    }else if(updateMS === 100){
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ms:updateMS,s:updateS,m:updateM,h:updateH})
  }
  return (
    <>
    <div className='h-screen w-[100%] bg-[#283D4F] flex justify-center'>
      <div className="bg-white w-[100%] mx-10 md:mx-0 md:w-[400px] h-fit p-5 mt-10 pt-14 flex flex-col items-center">
        <DisplayContent time={time}></DisplayContent>
        <Btns start={start} stop={stop} reset={reset} status={status}></Btns>
      </div>

    </div>
    </>
  )
}

export default App
