import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div className='bg-cover bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1380,w_1104/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] h-screen w-full flex justify-between flex-col'>
          <img className='w-20 pt-10 pl-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          <div>
          </div>
            <div className=' py-5 px-10'>
                <h2 className='text-2xl font-bold py-3 text-center' >Get Started with Uber</h2>
                <Link to={'/user-login'}>
                  <Button className='w-full bg-black my-2'>Continue</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Start