import React from 'react'
import { useAuthStore } from '../store/auth.store.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user } = useAuthStore()
  return (
    <>
      <div className='flex justify-between gap-4 p-10'>
        <h1><Link to="/">HOME</Link></h1>

        {user ?
          (<Link to="/profile">Profile</Link>) :
          (<Link to="/login">Login</Link>)
        }
      </div>
    </>
  )
}

export default Navbar