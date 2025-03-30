"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"


export default function (){
    const [title, setTitle] = useState("");
    const [name, setname] = useState("");
    const [role, setRole] = useState("");
    const [lastLogin, setLastLogin] = useState("");

    useState(() => {

        fetch("/api/details")
        .then(res => res.json())
        .then(data => {
            setname(data.name)
            const date = new Date(data.lastLogin)
            setRole(data.role)
            setLastLogin(date.toLocaleString())
        })


    }, [])

    async function logout(){
  
        fetch("/api/logout", {method : "POST"})
        .then(res => res.json)
        .then(data => {
        
            setTitle("Logged out Successfully")
          
        })
    }

 
return(
    <div className="relative h-[100dvh] w-[100dvw] bg-[url(/background-done.jpg)] bg-cover flex  justify-center">

        <div  className=" absolute top-3 w-screen h-15 flex items-center justify-evenly text-pink-500 font-bold text-xl border-b-2 border-pink-500">
            <Link id="navelem" href="#">Home</Link>
            <Link id="navelem" href="/signup">Sign Up</Link>
            <Link id="navelem" href="/login">Login</Link>            
            <button onClick={logout} id="navelem">Logout</button>
        </div>

        <div className="text-white  font-[sans-serif] text-2xl flex flex-col items-center justify-evenly bg-purple-950/75 absolute top-30 h-110 w-100   rounded-md shadow-lg shadow-pink-500 border-2 border-pink-500 hover:shadow-white hover:border-white">
            {title}
            <div className="p-3 px-5 ">Welcome <span className="underline underline-offset-5 decoration-pink-500">{name}</span></div>
            <div className="p-3 px-5  capitalize">Your Role is <span className="font-bold text-pink-500">{role}</span></div>
            <div className="p-3 px-5 text-center">Your Last login was on {lastLogin}</div>

        </div>
        

        

    </div>
)
}