import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='bg-cover  bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1380,w_1104/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] h-screen w-full flex justify-between flex-col bg-slate-400'>
          <img className='w-20 pt-10 pl-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          <div>
            {/* <img src/="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1380,w_1104/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png" alt="" /> */}
          </div>
            <div className='bg-red-200 py-5 px-10'>
                <h2 className='text-2xl font-bold py-3 text-center' >Get Started with Uber</h2>
                <Link to={'/user-login'}>
                  <Button className='w-full bg-black my-2'>Continue</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home