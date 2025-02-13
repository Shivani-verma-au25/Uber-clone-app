import React from 'react'
import { IoLocation } from "react-icons/io5";



function LocationSearchPanel({vehiclePanel,setVehiclePanel,setOpenPanel}) {
  const loactionArry = [
    '1/686, ruchi khand 1st',
    '1/386, gomtinagr khand 1st Locknowhg vhj',
    '1/286, alambagh khand 1st',
    '1/286, alambagh khand 1st',
    '1/286, alambagh khand 1st',
  ]

  return (
    <div>
        {/* just a sapmle data */}
        {
          loactionArry.map((location,index) =>(
            <div 
            onClick={ () => {
              setVehiclePanel(true)
              setOpenPanel(false)
             } }
             key={index} className='flex items-center gap-3  border-2 px-2 py-1 rounded-lg my-2 border-gray-100  active:border-black'>
              

            <h2 className='bg-[#eeee] text-xl p-2 rounded-full'><IoLocation /></h2>
            <h4 className='text-md  font-medium'>{location}</h4>
          </div>
          ))
        }
    </div>
  )
}

export default LocationSearchPanel