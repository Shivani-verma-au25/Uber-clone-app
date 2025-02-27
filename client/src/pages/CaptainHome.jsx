import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FcMoneyTransfer } from 'react-icons/fc'
import { MdHomeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoExit } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";
import { MdNoteAlt } from "react-icons/md";
import CaptainDetails from '@/components/CaptainDetails'
import RidePopus from '@/components/RidePopus'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '@/components/ConfirmRidePopup'




function CaptainHome() {
  const [ridePopupPanel ,setRidePopupPanel] = useState(true)
  const [confirmRidePopup ,setConfirmRidePopup] = useState(false)



  const ridePopusPanleRef = useRef(null)
  const confirmridePopusPanleRef = useRef(null)


  // gsap for  ride popup panel for captain
   useGSAP(() =>{
      if (ridePopupPanel) {
        gsap.to(ridePopusPanleRef.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(ridePopusPanleRef.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[ridePopupPanel]) 


  // gsap for  confirm ride popup panel for captain
   useGSAP(() =>{
      if (confirmRidePopup) {
        gsap.to(confirmridePopusPanleRef.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(confirmridePopusPanleRef.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[confirmRidePopup]) 

  return (
    <div className='h-screen '>
        <div className='w-full fixed p-3 top-0  flex items-center justify-between'>
          <img className="w-16 "
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"  />
          <Link to={'/home'}>
              <Button className=" h-10 w-10 cursor-pointer  text-xl"><IoExit  className=' ' /></Button>
          </Link>
        </div>
        <div className='h-3/5 w-full '>
            <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/dnibteoukg7b1.jpg"
          alt=""
        />
        </div>
        <div className='h-2/5 p-4'>
          <CaptainDetails />
        </div>

        {/* ride popup panel  */}
        <div ref={ridePopusPanleRef}  className=' fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
          <RidePopus  setRidePopupPanel={setRidePopupPanel} setConfirmRidePopup={setConfirmRidePopup} />
        </div>

         {/* ride detail panel  */}
        <div ref={confirmridePopusPanleRef} className=' h-screen w-full fixed z-10 bottom-0 translate-y-full bg-white  px-3'>
          <ConfirmRidePopup setConfirmRidePopup={setConfirmRidePopup}  setRidePopupPanel={setRidePopupPanel} />
        </div>

    </div>
  )
}

export default CaptainHome