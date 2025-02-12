import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { captainDataContext } from '@/context/CaptainContext'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


function Captainlogin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [captainData ,setCaptainData] = useState([])
  const navigate = useNavigate()
  const {captain,setCaptain} = useContext(captainDataContext)


  // onsubmit fucntion
  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    const captainData = {
      email:email,
      password:password
    }

    // if (!email || !password) {
    //     toast.error("Email and password are required")
    // }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/login`,captainData ,{
         headers : {
          'Content-Type' :'application/json'
         }})

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('captainToken',JSON.stringify(data.token))
        navigate('/captain-home')
        toast.success('Captain logged-in successfully ')
      }
      
    } catch (error) {
      toast.error(error.response?.data?.message ||  error?.message)
      console.log("Error :-", error.response?.data?.message || error?.message);
      
    }
    setEmail('')
    setPassword('')
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
            onChange= {(e) =>setPassword(e.target.value)}
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