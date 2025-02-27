import React from 'react'
import { BsSpeedometer } from 'react-icons/bs'
import { IoIosTime } from 'react-icons/io'
import { MdNoteAlt } from 'react-icons/md'

function CaptainDetails() {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4 className='text-lg font-medium'>Demo </h4>
            </div>
            <div className='flex  flex-col'>
              <h4 className='text-md font-semibold'>295.2</h4>
              <p className='text-md font-semibold tracking-tighter text-gray-600'>Earned</p>
            </div>
            </div>
            
            <div className='flex justify-center gap-10 items-center mt-5 bg-gray-100 p-2 rounded-lg'>
              <div className='text-center flex flex-col  items-center '>
                <h3 className='text-3xl font-extralight '> <IoIosTime /></h3>
                <h5 className='text-lg font-semibold'>10.4</h5>
                <p className='text-xs tracking-tighter text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center flex flex-col  items-center '>
                <h3 className='text-3xl font-extralight '> <BsSpeedometer /></h3>
                <h5 className='text-lg font-semibold'>10.4</h5>
                <p className='text-xs tracking-tighter  text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center flex flex-col  items-center '>
                <h3 className='text-3xl font-extralight '> <MdNoteAlt /></h3>
                <h5 className='text-lg font-semibold'>10.4</h5>
                <p className='text-xs tracking-tighter  text-gray-600'>Hours Online</p>
              </div>
            </div>
    </div>
  )
}

export default CaptainDetails