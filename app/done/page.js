"use client"
import { useState } from "react"

export default function (){

    const [title, setTitle] = useState("Login Done")

    async function logout(){
  
        fetch("/api/logout", {method : "POST"})
        .then(res => res.json)
        .then(data => {
        
            setTitle(data.message)
          
        })
    }

return(
    <div className="text-5xl h-[100dvh] w-screen flex flex-col gap-10 items-center justify-center">
        {title}
        <button onClick={logout}  className="border-2 rounded-md text-lg p-2 px-5">Logout</button>
    </div>
)
}