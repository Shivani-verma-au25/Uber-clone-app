import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Captainlogin() {
  const [email,setEmail] = useState('')
  const [password,setPassord] = useState('')
  const [captainData ,setCaptainData] = useState([])

  // onsubmit fucntion
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    setCaptainData([
      ...captainData,
      {email:email,password:password}
    ])
    setEmail('')
    setPassord('')
    
  }
  

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-5' src="/uberdrive.svg" alt="" />
        <form onSubmit={(e) => onSubmitHandler(e)} >

          <Label className='text-sm font-medium' htmlFor="email">What's your email</Label>
          <Input className="bg-[#eeeeee] mb-7 text-lg placeholder:text-base" 
          required value={email} 
           type="email"
            id="email" 
            placeholder="Email@Example.com"
            onChange= {(e) => setEmail(e.target.value)}
             />
          <Label className='text-sm font-medium' htmlFor="email">Password</Label>
          <Input required className="bg-[#eeeeee] mb-7 text-lg placeholder:text-base"  
           type="password" 
           id="password"
            placeholder="password"
            value={password}
            onChange= {(e) =>setPassord(e.target.value)}
            />
          <Button className="font-semibold w-full">Login</Button>
          <p className='text-center my-4 text-xs font-semibold'>Want to Join a fleet? <Link to={'/captain-register'} className='mb-3 font-bold text-xs text-blue-600'>Register as a Captain! </Link> </p>
        </form>
      </div>
      <div>
        <Link to={'/user-register'}>
          <Button className='bg-orange-600 w-full'>Sign in as a User</Button>
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin