import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth.store.js"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const { login, err } = useAuthStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const successs = await login(email, password)
        if (successs) {
            navigate("/")
        }
    }

    return (
        <>
            <div>
                <div>
                    <h1>LOGIN PAGE</h1>
                    <form onSubmit={handleSubmit}>
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
                        <p>First Time Here ? <Link to="/signup">Signup</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login