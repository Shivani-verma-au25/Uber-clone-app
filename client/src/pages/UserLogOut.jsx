import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogOut() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,{
        headers:{
            Authorization : `Bearer ${token}` 
        }
    }).then((reponse) =>{
        if (reponse.status=== 200) {
            localStorage.removeItem('token')
            navigate('/user-login')
        }
    })

  return (
    <div></div>
  )
}

export default UserLogOut