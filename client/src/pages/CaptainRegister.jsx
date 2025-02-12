import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { captainDataContext } from '@/context/CaptainContext'
import axios from 'axios'
import { toast } from 'sonner'



function CaptainRegister() {
  const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassord] = useState('')
    const [captainData ,setCaptainData] = useState([])
    const {captain,setCaptain} = useContext(captainDataContext)
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const navigate = useNavigate()
    
      // onsubmit fucntion
      const onSubmitHandler = async (e) =>{
        e.preventDefault()
        const captainData = ({ 
            fullname:{
              firstname:firstname,
              lastname:lastname 
            }, 
            email:email,
            password:password,
            vehicle:{
              color : vehicleColor,
              plate : vehiclePlate,
              capacity : vehicleCapacity,
              vehicleType : vehicleType
            }
          }
        )

          try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/register`,captainData ,{headers:{'Content-Type ':"application/json"}})
            console.log(response.data)

            if (response.status === 200) {
                const data = response.data
                setCaptain(data)
                localStorage.setItem('captainToken',JSON.stringify(data.token))
                toast.success("captain regisred successfully")
                navigate('/captain-login')

            }
          } catch (error) {
            toast.error(error.response?.data?.message )
            console.log("Error : ",error.response?.data?.message || error?.message);
            
        }        
        setEmail('')
        setPassord('')
        setFirstName('')
        setLastName('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
        
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Uber Logo" />
        <form onSubmit={(e) => onSubmitHandler(e)} >

          <Label className='font-medium text-sm' htmlFor="firstname">What's our Captain's name</Label>
          <div className='flex gap-1 mb-7'>
            <Input className="bg-[#eeeeee] text-base placeholder:text-sm" 
              required 
              type="text"
              id="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input className="bg-[#eeeeee] text-base placeholder:text-sm" 
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          <Label className='text-sm font-medium' htmlFor="email">What's our Captain's email</Label>
          <Input className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
            required 
            type="email" 
            id="email" 
            placeholder="Email@Example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Label className='text-sm font-medium' htmlFor="password">Password</Label>
          <Input required className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm"  
            type="password" 
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassord(e.target.value)}
          />

          <Label className='text-lg font-medium mb-2'>Vehicle Information</Label>
          <div className='flex gap-4 mb-7'>
            <Input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs font-medium placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <Input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-sm font-medium'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <Input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-sm font-medium'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm font-medium'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <Button className="font-semibold w-full">Register</Button>
          <p className='text-center my-4 text-xs font-semibold'>Already have an Account? <Link to={'/captain-login'} className='mb-3 font-bold text-xs text-blue-600'>Login Captain Account</Link> </p>
        </form>
      </div>
      <div>
        <p className='text-center font-semibold tracking-tighter text-[9px]'>This site is protected by reCAPTCHA and the <span className='underline text-blue-800 font-bold'>Google Privacy Policy</span> and <span className='underline text-blue-800 font-bold'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainRegister