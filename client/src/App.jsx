import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import Captainlogin from './pages/Captainlogin'
import NotFoundPage from './pages/PageNotFound'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Home from './pages/Home'
import UserLogOut from './pages/UserLogOut'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/home' element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      }/>
      <Route path='/user-login' element={<UserLogin />}/>
      <Route path='/user-register' element={<UserRegister />}/>
      <Route path='/captain-register' element={<CaptainRegister />}/>
      <Route path='/captain-login' element={<Captainlogin />}/>
      <Route path='*' element={<NotFoundPage />}/>
      <Route path='/user/logout' element={
        <UserProtectedWrapper>
          <UserLogOut/>
      </UserProtectedWrapper>}/>

      <Route path='/captain-home'  element={
        <CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>
      }/>
      <Route path='/captain/logout' element={
        <CaptainProtectedWrapper>
          <CaptainLogout/>
        </CaptainProtectedWrapper>
      } />
    </Routes>
  )
}

export default App