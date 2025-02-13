import { Input } from '@/components/ui/input';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MdKeyboardArrowDown } from "react-icons/md";
import LocationSearchPanel from '@/components/LocationSearchPanel';
import { useGSAP } from '@gsap/react';
import { FaUser } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import VehiclePanel from '@/components/VehiclePanel';
import ConformedRide from '@/components/ConformedRide';
import LookingForDeriver from '@/components/LookingForDeriver';
import WaitingForDriver from '@/components/WaitingForDriver';


function Home() {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [yourLocation, setYourLocation] = useState('');
  const [openPanel, setOpenPanel] = useState(false);
  const [vehiclePanel ,setVehiclePanel] = useState(false)
  const [conformedRidePanel,setConformedRidePanel] = useState(false)
  const [lookingForDriverPanel ,setLookingForDriver] = useState(false)

  const openPanelRef = useRef(null);
  const closePanelRef = useRef(null);
  const vehiclePanleRef = useRef(null)
  const conformedVehilcePanelRef = useRef(null)
  const lookingForDriver = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // GSAP animation for panel
  useGSAP(() => {
    if (openPanel) {
      gsap.to(openPanelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out',
        padding : 20
      });
      gsap.to(closePanelRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(openPanelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.in',
        padding : 20
      });
      gsap.to(closePanelRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [openPanel]);


  // gsap for vehicle panel
   useGSAP(() =>{
      if (vehiclePanel) {
        gsap.to(vehiclePanleRef.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(vehiclePanleRef.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[vehiclePanel])

  // gsap for conformed vehicle panel
   useGSAP(() =>{
      if (conformedRidePanel) {
        gsap.to(conformedVehilcePanelRef.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(conformedVehilcePanelRef.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[conformedRidePanel]) 


  // gsap for Looking for driver panel
   useGSAP(() =>{
      if (lookingForDriverPanel) {
        gsap.to(lookingForDriver.current ,{
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(lookingForDriver.current ,{
          transform : 'translateY(100%)'
        })
      }
   },[lookingForDriverPanel])  

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt=""
      />
      <div className="h-screen w-screen"
        onClick={()=>{setVehiclePanel(false)}}
      >
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/dnibteoukg7b1.jpg"
          alt=""
        />
      </div>

      <div className="h-screen flex flex-col justify-end absolute top-0 w-full">
        <div className="bg-white h-[30%] p-5">
          <h2
            ref={closePanelRef}
            onClick={() => setOpenPanel(false)}
            className="font-bold text-3xl  cursor-pointer opacity-0"
          >
            <MdKeyboardArrowDown />
          </h2>
          <h4 className="text-2xl font-semibold px-5">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <Input
              onClick={() => setOpenPanel(true)}
              value={pickUpLocation}
              onChange={(e) => setPickUpLocation(e.target.value)}
              className="bg-[#eeee] px-8 py-5 text-md mt-4"
              type="text"
              placeholder="Add a pick up location"
            />
            <Input
              onClick={() => setOpenPanel(true)}
              value={yourLocation}
              onChange={(e) => setYourLocation(e.target.value)}
              className="bg-[#eeee] px-8 py-5 text-md mt-4"
              type="text"
              placeholder="Enter your location"
            />
          </form>
        </div>
        <div
          ref={openPanelRef}
          className="bg-white h-0 overflow-hidden ">
            <LocationSearchPanel vehiclePanel={vehiclePanel} setOpenPanel={setOpenPanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      {/* cars moto auto */}
      <div ref={vehiclePanleRef} className=' fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConformedRidePanel={setConformedRidePanel} />
      </div>

      {/* conformed ride */}
      <div ref={conformedVehilcePanelRef} className=' fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <ConformedRide setLookingForDriver={setLookingForDriver} setVehiclePanel={setVehiclePanel} setConformedRidePanel={setConformedRidePanel} 
        
          />
      </div>

      {/* looking for a driver */}
      <div ref={lookingForDriver} className=' fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <LookingForDeriver  setConformedRidePanel={setConformedRidePanel} setLookingForDriver={setLookingForDriver} />
      </div>

      {/* waiting for a driver */}
      <div  className=' fixed z-10 bottom-0 -translate-y-10 bg-white w-full px-3 py-8'>
        <WaitingForDriver  />
      </div>
    </div>
  );
}

export default Home;
