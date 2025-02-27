import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { IoExit } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import FinishRide from './FinishRide'
import gsap from 'gsap'

function CaptainRiding() {
  const [finishRidePanel,setFinishRidePanel] = useState(false)


  const finishRidePanelRef = useRef(null)


   // gsap for  ride popup panel for captain
   useGSAP(() =>{
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(finishRidePanelRef.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[finishRidePanel]) 



  return (
    <div className=' '>
        <div className=' fixed p-3 top-0  flex items-center justify-between'>
          <img className="w-16 "
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"  />
          <Link to={'/home'}>
              <Button className=" h-10 w-10 cursor-pointer  text-xl"><IoExit  className=' ' /></Button>
          </Link>
        </div>
        <div className='h-4/5  '>
            <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/dnibteoukg7b1.jpg"
          alt=""
        />
        </div>
        <div className='h-1/5 p-6 bg-yellow-400 flex justify-between items-center relative'>
        <h2 className=' font-semibold text-3xl absolute translate-x-[38%]  top-2 text-gray-200 w-full  cursor-pointer'>< MdKeyboardArrowDown/></h2>

        <h4 className='text-lg font-semibold'>4 km away</h4>
        <Button onClick={() => setFinishRidePanel(true)} className="bg-green-700 font-semibold text-md hover:bg-green-800 ">Complete ride</Button>
        </div>

        {/* ride detail panel  */}
        <div ref={finishRidePanelRef} className=' h-full w-full fixed z-10 bottom-0 translate-y-full bg-white  px-3'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}  />
        </div>

    </div>
  )
}

export default CaptainRiding