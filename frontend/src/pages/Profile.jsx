import React from 'react'
import {useAuthStore} from "../store/auth.store.js"

const Profile = () => {
  const {user,logout}=useAuthStore()  

  const handleLogout=async(e)=>{
    e.preventDefault()
    await logout()
  }
  
  return (
    <>
        <div>
            <h1>PROFILE PAGE</h1>
            {user ? 
            (
                <>
                    {user.name}
                    {user.email}
                </>
            ) 
            : 
            (
                <p>Loading....</p>
            )
            }

            <button onClick={handleLogout}>Logout</button>
        </div>
    </>
  )
}

export default Profile