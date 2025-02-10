import { userDataContext } from '@/context/UserContext'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function UserProtectedWrapper({children}) {
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))

    // console.log(token,"token");
    
    useEffect(()=> {
        if (!token) {
        navigate('/user-login')
    }
    },[token,navigate])

    // Render children only if token exists
    if (!token) {
        return null; // Or a loader/spinner if you want
    }

  return (
    <div>{children}</div>
  )
}

export default UserProtectedWrapper