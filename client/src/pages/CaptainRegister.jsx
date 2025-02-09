import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'


function CaptainRegister() {
  const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassord] = useState('')
    const [captainData ,setCaptainData] = useState([])
    
      // onsubmit fucntion
      const onSubmitHandler = (e) =>{
        e.preventDefault()
        setCaptainData([
          ...captainData,
          { 
            fullname:{
              firstname:firstname,
              lastname:lastname
            }, 
            email:email,
            password:password
          }
        ])
        setEmail('')
        setPassord('')
        setFirstName('')
        setLastName('')
        
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <form onSubmit={(e) => onSubmitHandler(e)} >

          <Label className='font-medium text-sm' htmlFor="">What's our Captain's name</Label>
          <div className='flex gap-1 '>
               <Input className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
              required 
              type="text"
                placeholder="First Name"
                value={firstname}
                onChange= {(e) => setFirstName(e.target.value)}
             />
              <Input className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
              required
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange= {(e) => setLastName(e.target.value)}
             />
          </div>
          
          <Label className='text-sm font-medium' htmlFor="email">What's our cpatain's email</Label>
          <Input className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
          required value={email} 
           type="email" 
            id="email" 
            placeholder="Email@Example.com"
            onChange= {(e) => setEmail(e.target.value)}
             />
          <Label className='text-sm font-medium' htmlFor="password">Password</Label>
          <Input required className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm"  
           type="password" 
           id="password"
            placeholder="password"
            value={password}
            onChange= {(e) =>setPassord(e.target.value)}
            />
          <Button className="font-semibold w-full">Register</Button>
          <p className='text-center my-4 text-xs font-semibold'>All Ready have an Account? <Link to={'/captain-login'} className='mb-3 font-bold text-xs text-blue-600'>Login Captain Account</Link> </p>
        </form>
      </div>
      <div>
        <p className='text-center font-semibold  tracking-tighter text-[9px]'>This site is protected by reCAPTCHA and the <span className='underline text-blue-800 font-bold'>Google Privacy Policy</span> and <span className='underline text-blue-800 font-bold'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainRegister