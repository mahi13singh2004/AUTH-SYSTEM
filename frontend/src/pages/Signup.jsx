import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth.store.js"

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const { signup, err } = useAuthStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const successs = await signup(name, email, password)
        if (successs) {
            navigate("/")
        }
    }

    return (
        <>
            <div>
                <div>
                    <h1>SIGNUP PAGE</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type='submit'>Submit</button>

                        {err && <p>{err}</p>}
                    </form>

                    <div>
                        <p>Already Have an account ? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup