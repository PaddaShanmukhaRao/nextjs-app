"use client"
import axios from "axios"
import { useRef } from "react"
export default function Signup(){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    return <>
    <div className="w-screen h-screen flex justify-center items-center">
    <input ref={usernameRef} className="text-white border-white rounded-2xl" type="text" placeholder="username"/>
    <input ref={passwordRef} type="password" placeholder="Password"/>
    <button onClick={()=>{
        axios.post("http://localhost:3000/api/v1/user/signup",{
            username:usernameRef.current?.value,
            passwordRef:passwordRef.current?.value
        })
    }}> SignUp</button>
    </div>
    </>
}