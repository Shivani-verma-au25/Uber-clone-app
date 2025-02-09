import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import Captainlogin from './pages/Captainlogin'
import NotFoundPage from './pages/PageNotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/user-login' element={<UserLogin />}/>
      <Route path='/user-register' element={<UserRegister />}/>
      <Route path='/captain-register' element={<CaptainRegister />}/>
      <Route path='/captain-login' element={<Captainlogin />}/>
      <Route path='/*' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App