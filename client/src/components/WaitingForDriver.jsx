import React from 'react'
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6'
import { FcMoneyTransfer } from 'react-icons/fc'
import { MdKeyboardArrowDown } from 'react-icons/md'

function WaitingForDriver({}) {
  return (
    <div>
        <h2 className='font-semibold text-3xl absolute translate-x-[45%]  top-2 text-gray-200 w-full  cursor-pointer'>< MdKeyboardArrowDown /></h2>
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
                    <FaLocationArrow />
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
    </div>
  )
}

export default WaitingForDriver