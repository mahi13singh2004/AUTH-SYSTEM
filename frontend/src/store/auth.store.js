import {create} from "zustand"
import axios from "axios"

axios.defaults.withCredentials=true

export const useAuthStore=create((set)=>({
    user:null,
    err:null,
    loading:true,

    signup:async(name,email,password)=>{
        set({loading:true})
        try {
            const res=await axios.post("http://localhost:5000/api/auth/signup",{name,email,password})
            set({user:res.data.user,loading:false,err:null})
            return true
        } 
        catch (error) {
            console.log("Error in auth store-signup")
            set({loading:false,err: error.response?.data?.message || error.message}) 
            return false   
        }
    },

    login:async(email,password)=>{
        set({loading:true})
        try {
            const res=await axios.post("http://localhost:5000/api/auth/login",{email,password})
            set({user:res.data.user,loading:false,err:null})
            return true
        } 
        catch (error) {
            console.log("Error in auth store-login")
            set({loading:false,err: error.response?.data?.message || error.message})    
            return false
        }
    },

    logout:async()=>{
        set({loading:true})
        try {
            await axios.post("http://localhost:5000/api/auth/logout")
            set({user:null,loading:false,err:null})
        } 
        catch (error) {
            console.log("Error in auth store-logout")
            set({loading:false,err: error.response?.data?.message || error.message})    
        }
    },

    checkAuth:async()=>{
        set({loading:true})
        try {
            const res=await axios.get("http://localhost:5000/api/auth/checkAuth")
            set({user:res.data.user,loading:false,err:null})
        } 
        catch (error) {
            console.log("Error in auth store-checkAuth")
            set({loading:false,err: error.response?.data?.message || error.message})    
        }
    },
}))