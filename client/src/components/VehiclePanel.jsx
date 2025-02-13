import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineCurrencyRupee } from "react-icons/md";

function VehiclePanel({setVehiclePanel,setConformedRidePanel}) {
  return (
    <div>
        <h2 onClick={() => setVehiclePanel(false)} className='font-semibold text-3xl absolute translate-x-[45%]  top-2 text-gray-200 w-full  cursor-pointer'>< MdKeyboardArrowDown /></h2>

        <h3 className='font-semibold text-sm py-5'>Choose a vehicle</h3>
        <div 
        onClick={() => setConformedRidePanel(true)}
        className='flex justify-between items-center p-1 rounded-xl  bg-gray-100 border-2 border-gray-100  active:border-black mb-3'   >
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-md flex justify-start items-center gap-1 px-2 tracking-tighter leading-1'>UberGo <span className='text-xs'><FaUser /></span> 4</h4>
            <h5 className='font-medium text-sm tracking-tighter px-2 leading-1'>2 mins away</h5>
            <p className='font-medium text-xs text-slate-500 tracking-tighter px-2 leading-1'>Affodable, compact rides</p>
          </div>
          <h2 className='text-md font-semibold flex  items-center'><MdOutlineCurrencyRupee />195.20</h2>
        </div>

        <div
         onClick={() => setConformedRidePanel(true)} 
        className='flex justify-between items-center p-1 rounded-xl  border-2 border-gray-100 active:border-black  mb-3' >
          <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXFgDqA4hgTAoCQ1cbjnygbPD3UPsBo41A&s" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-md flex justify-start items-center gap-1 px-2 tracking-tighter leading-1'>MotoGo <span className='text-xs'><FaUser /></span> 1</h4>
            <h5 className='font-medium text-sm tracking-tighter px-2 leading-1'>5 mins away</h5>
            <p className='font-medium text-xs text-slate-500 tracking-tighter px-2 leading-1'>Affodable, bike rides</p>
          </div>
          <h2 className='text-md font-semibold flex  items-center'><MdOutlineCurrencyRupee />195.20</h2>
        </div>

        <div 
         onClick={() => setConformedRidePanel(true)}
        className='flex justify-between items-center p-1 rounded-xl  border-2 border-gray-100  active:border-black mb-3' >
          <img className='h-11' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-md flex justify-start items-center gap-1 px-2 tracking-tighter leading-1'>AutoGo <span className='text-xs'><FaUser /></span> 3</h4>
            <h5 className='font-medium text-sm tracking-tighter px-2 leading-1'>1 mins away</h5>
            <p className='font-medium text-xs text-slate-500 tracking-tighter px-2 leading-1'>Affodable, auto rides</p>
          </div>
          <h2 className='text-md font-semibold flex  items-center'><MdOutlineCurrencyRupee />195.20</h2>
        </div>

    </div>
  )
}

export default VehiclePanel