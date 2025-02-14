
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6'
import { FcMoneyTransfer } from 'react-icons/fc'
import { MdHomeFilled } from "react-icons/md";
import { Link } from 'react-router-dom';


function Riding() {
  return (
    <div className='h-screen '>
        <Link to={'/home'}>
        <Button className="fixed right-3 top-2 h-10 w-10 cursor-pointer  text-xl"><MdHomeFilled  className=' ' /></Button>
        </Link>
        <div className='h-1/2 w-full '>
            <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/dnibteoukg7b1.jpg"
          alt=""
        />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex justify-between items-center'>
                    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="" />
                    <div className=' text-right'> 
                        <h2 className='text-md font-medium tracking-tighter'>Rohan</h2>
                        <h4 className='text-md font-bold tracking-tighter '>UP04 AB1234</h4>
                        <p className='text-xs font-semibold tracking-tighter mb-3'>MarutiSusuki alto</p>
                    </div>
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
                       
                        <div className='flex items-center gap-5 p-2 border-t-2 mb-2 border-gray-200  rounded-lg '>
                            <h2><FcMoneyTransfer /></h2>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-medium'>₹200</h3>
                                <p className='text-base text-gray-700 '>Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Button className="w-full mt-3 cursor-pointer ">Make a payment</Button>
        </div>
    </div>
  )
}

export default Riding