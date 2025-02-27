import React, { useState } from 'react'
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6'
import { FcMoneyTransfer } from 'react-icons/fc'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from './ui/button'
import { Link, useSearchParams } from 'react-router-dom'
import { Input } from './ui/input'

function ConfirmRidePopup({setRidePopupPanel,setConfirmRidePopup}) {
    const [opt ,setOpt] = useState('')
    const onSubmitHnadler = (e) => {
        e.preventDefault()
        console.log('clicked');
        
    }
  return (
     <div className=' '>
            <h2 
            onClick={() =>setRidePopupPanel(false)}
            className='font-semibold text-3xl absolute translate-x-[45%]  top-2 text-gray-200 w-full  cursor-pointer'>< MdKeyboardArrowDown /></h2>
                    <h3 className='font-semibold text-2xl py-10'>Confirm this ride to start</h3>
                    <div className='flex justify-between items-center mb-5 p-3 rounded-md bg-yellow-500'>
                        <div className='flex justify-center items-center gap-3'>
                            <img className='h-10 w-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h2 className='text-md font-medium'>Random person</h2>
                        </div>
                        <h5 className='text-sm font-semibold'>2.2km</h5>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='w-full'>
                            <div className='flex items-center gap-5 p-2 border-t-2 mb-2 border-gray-200  rounded-lg '>
                                <FaLocationDot className='text-xl *:' />
                                <div>
                                    <h3 className='text-md font-medium'>132/43-B</h3>
                                    <p className='text-base text-gray-700 '>Gomatinagar Locknow</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-2 border-t-2 mb-2 border-gray-200  rounded-lg ' >
                                <FaLocationArrow/>
                                <div>
                                    <h3 className='text-md font-medium'>132/43-B</h3>
                                    <p className='text-base text-gray-700 '>Gomatinagar Locknow</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-2 border-t-2 mb-2 border-gray-200  rounded-lg '>
                                <h2><FcMoneyTransfer /></h2>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-sm font-medium'>₹200</h3>
                                    <p className='text-base text-gray-700 '>Cash</p>
                                </div>
                            </div>
                        </div>

                        {/* opt */}
            
                        <div className='mt-6 w-full flex justify-center gap-5  '>
                           <form onSubmit={(e) => onSubmitHnadler(e)}>

                             <Input
                                value={opt}
                                onChange={(e) => setOpt(e.target.value)}
                                className=" bg-[#eeee] px-8 py-5 text-md mb-4 font-mono text-xl "
                                type="text"
                                placeholder="Enter OTP"/>

                                <Link 
                                to={'/captain-riding'} 
                                className="w-full bg-green-700 font-semibold text-md hover:bg-green-800 rounded-md" >
                                    <Button className="w-full bg-green-700 font-semibold text-md hover:bg-green-800">Confirm </Button> 

                                </Link>
                                
                                <Button
                                onClick={() => {
                                    setConfirmRidePopup(false)
                                    } }
                                className="w-full mt-2 bg-red-500 hover:bg-gray-400 text-white font-semibold text-md ">Cancel</Button>
                           </form>
                        </div>
                    </div> 
        </div>
  )
}

export default ConfirmRidePopup