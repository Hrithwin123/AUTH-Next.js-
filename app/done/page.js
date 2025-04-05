"use client"
import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faRightToBracket, faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"


export default function (){
    const [title, setTitle] = useState("");
    const [name, setname] = useState("");
    const [role, setRole] = useState("");
    const [lastLogin, setLastLogin] = useState("");
    const [loaded, setLoaded] = useState(false)
    const [verified, setVerified] = useState(false)

    useState(() => {

        fetch("/api/details")
        .then(res => res.json())
        .then(data => {
            console.log(data.isVerified);
            if(data.isVerified){
                setVerified(true)
                setname(data.name)
                const date = new Date(data.lastLogin)
                setRole(data.role)
                setLastLogin(date.toLocaleString())
                setLoaded(true)
            }
            else{
                setTitle("You are not verified yet, Please complete the Sign Up process")
            }
            
           
        })


    }, [])

    async function logout(){
  
        fetch("/api/logout", {method : "POST"})
        .then(res => res.json)
        .then(data => {
            setTitle(<div className="text-4xl font-title">Logged out Successfully</div>)
          
        })
    }

    
    const content = (
        <div className="done-box text-white  font-[sans-serif] text-2xl flex flex-col items-center justify-evenly bg-purple-950/75 absolute h-110 w-100   rounded-md shadow-lg shadow-pink-500 border-2 border-pink-500 ">
            <div className="text-center">{title}</div>
            <div className="p-3 px-5 ">Welcome <span className="username relative font-title">{name}</span></div>
            <div className="p-3 px-5  capitalize">Your Role is <span className="role font-bold text-3xl font-kanit text-pink-500">{role}</span></div>
            <div className="p-3 px-5 text-center">Your Last login was on <span className="text-pink-400">{lastLogin}</span></div>
        </div>
    );


    const loading = (
        <div className="done-box text-white  font-[sans-serif] text-2xl flex flex-col items-center justify-evenly bg-purple-950/75 absolute h-110 w-100   rounded-md shadow-lg shadow-pink-500 border-2 border-pink-500 ">
            <div className="text-center font-kanit">{title}</div>
            <div className="spinner rounded-full h-16 w-16 border-4 border-t-4 border-pink-500 animate-spin  border-t-purple-700 border-"></div>
        </div>

    );


 
return(
    <div className="relative h-[100dvh] w-[100dvw] bg-[url(/background-done.jpg)] bg-cover flex justify-center overflow-hidden">

        <div  className="nav absolute top-3 w-screen h-15 flex items-center justify-evenly bg-purple-950/75 rounded-md text-pink-500 font-bold text-xl border-b-2 border-pink-500">
            <Link id="navelem" href="/"><FontAwesomeIcon icon={faHouse} />&nbsp;Home</Link>
            <Link id="navelem" href="/signup"><FontAwesomeIcon icon={faUserPlus}  />&nbsp;Sign Up</Link>
            <Link id="navelem" href="/login"><FontAwesomeIcon icon={faRightToBracket} />&nbsp;Login</Link>            
            <button onClick={logout} id="navelem"><FontAwesomeIcon icon={faRightFromBracket} />&nbsp;Logout</button>
        </div>

        { verified && loaded ? content : loading}    

    </div>
)
}