import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const token = JSON.parse(localStorage.getItem('captainToken'))
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/logout`,{
        headers :{
            Authorization : `Bearer ${token}`
        }
    }).then((response) =>{
        if (response.status == 200) {
            localStorage.removeItem('captainToken')
            navigate('/captain-login')
        }
    })

  return (
    <div>

    </div>
  )
}

export default CaptainLogout