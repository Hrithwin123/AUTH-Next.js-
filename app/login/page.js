"use client"

import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


export default function Login(){

const [show, setShow] = useState(false)
const [title, setTitle] = useState("Login");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 const eye = (<FontAwesomeIcon className="text-2xl hover:text-cyan-500" icon={faEye} />);

const slasheye = (<FontAwesomeIcon className="text-2xl hover:cyan-500" icon={faEyeSlash}  />);

async function handleLogin(){

    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"

        },
        body : JSON.stringify({
            email,
            password
        })
    }


    try{

        const response = await fetch("/api/login", options)

        const data = await response.json();

        setTitle(data.message)

        if(data.success){
            window.location.href = "/done"
        }


    }
    catch(err){

    }
}

async function handleForgot(){

    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email})
    }

    fetch("/api/forgotPassword", options)
    .then(res => res.json())
    .then(data => {
        setTitle(data.message)
    })
    .catch(err => console.log(err))


}


function showPassword(){
    setShow(!show)
}

function handleEmail(e){
    setEmail(e.target.value)
}

function handlePassword(e){
    setPassword(e.target.value)
}

    
return(
    <div className="text-white h-[100dvh] w-screen flex flex-col items-center justify-center bg-[url(/background-signup.jpg)] bg-cover">
        <div className="text-center font-bold mb-7 font-[sans-serif text-4xl  md:text-6xl">{title}</div>

        <form  className="relative border-2 border-white rounded-xl flex flex-col items-center justify-center gap-5 text-xl p-5 bg-cyan-700/35 shadow-lg shadow-cyan-300 min-w-65 xs:min-2-70 sm:min-w-75  md:min-w-80 lg:min-w-85 xl:min-w-90">
            
            <div className="h-22 flex flex-col items-center justify-center relative">
                <input type="email" value={email} onChange={(e) =>handleEmail(e)} id="email" name="email" className="border-white border-[1.5px] outline-none rounded-md h-15 w-65 text-md font-normal text-center" />
                <label htmlFor="email" className="absolute left-5 top-[2] bg-white text-black rounded-md px-3">Email</label>
            </div>

            <div className="h-22 flex flex-col items-center justify-center relative">
                <input value={password} onChange={(e) =>handlePassword(e)} id="password" name="password" type={show ? "text" : "password"} className="border-white border-[1.5px] outline-none rounded-md h-15 w-65 text-md font-normal text-center" />
                <label htmlFor="password" className="absolute left-5 top-[2] bg-white text-black rounded-md px-3">Password</label>
                <button onClick={showPassword} className="absolute right-3 " type="button">{show ? slasheye : eye}</button>
            </div>

        
            <button onClick={handleLogin} type="button"  className="bg-cyan-700/50 p-3 px-10 rounded-full ring-1 ring-white hover:bg-cyan-700 mb-12">Submit</button>
            
            <button onClick={handleForgot} type="button" className="absolute bottom-3 right-3 bg-white text-black text-md rounded-md px-3  hover:text-cyan-600">Forgot Password</button>

        </form>
    </div>
)
}
