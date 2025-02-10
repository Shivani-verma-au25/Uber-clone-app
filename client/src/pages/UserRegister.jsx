import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import  { userDataContext } from '@/context/UserContext';
import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function UserRegister() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { user, setUser }  = useContext(userDataContext);

  // onsubmit function
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
  
    try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/register`,
          newUser
        );
          if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',JSON.stringify(data.token))
            navigate('/home');
            toast.success("User Registered Successfully") 
          }
        } catch (error) {
          toast.error( error.response?.data?.message || error.message)
          console.error('Error:', error.response?.data?.message || error.message)
      }
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <Label className='font-medium text-sm' htmlFor="firstname">What's your name</Label>
          <div className='flex gap-1 '>
            <Input 
              className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
              required 
              type="text"
              id="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input 
              className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
              required 
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <Label className='text-sm font-medium' htmlFor="email">What's your email</Label>
          <Input 
            className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm" 
            required 
            value={email} 
            type="email"
            id="email" 
            placeholder="Email@Example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Label className='text-sm font-medium' htmlFor="password">Password</Label>
          <Input 
            required 
            className="bg-[#eeeeee] mb-7 text-base placeholder:text-sm"  
            type="password" 
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button type="submit" className="font-semibold w-full">Register</Button>
          <p className='text-center my-4 text-xs font-semibold'>
            Already have an Account? <Link to={'/user-login'} className='mb-3 font-bold text-xs text-blue-600'>Login Account</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-center font-semibold tracking-tighter text-[9px]'>
          This site is protected by reCAPTCHA and the 
          <span className='underline text-blue-800 font-bold'> Google Privacy Policy </span> and 
          <span className='underline text-blue-800 font-bold'> Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
