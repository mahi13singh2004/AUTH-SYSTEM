import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import RedirectRoute from './components/RedirectRoute.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { useAuthStore } from './store/auth.store.js'
import Navbar from './components/Navbar.jsx'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location=useLocation()
  const { checkAuth } = useAuthStore()

  useEffect(() => {
    if (!["/login", "/signup"].includes(location.pathname)) {
      checkAuth()
    }
  }, [location.pathname]) 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<RedirectRoute><Signup /></RedirectRoute>} />
        <Route path="/login" element={<RedirectRoute><Login /></RedirectRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
