"use client";

import { use } from "react";
    
import { useState } from "react"
    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

export default function Page({ params }) {

    const token = use(params).slug;

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const [title, setTitle] = useState("Change your Password");
  
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    
     const eye = (<FontAwesomeIcon className="text-2xl hover:text-cyan-500" icon={faEye} />);
    
    const slasheye = (<FontAwesomeIcon className="text-2xl hover:text-cyan-500" icon={faEyeSlash}  />);
    
    async function handleForgot(){

        if(password != confirm){
            setTitle("Both passwords doesnt match")
            return
        }

        const options = {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({token, password}),
            
        }

        fetch("/api/forgotPassword", options)
        .then(res => res.json())
        .then(data => {

            setTitle(data.message)

            if(data.success){

            }
        })
        .catch(err => console.log(err))


    }
    
    
    
    
    function showPassword1(){
        setShow1(!show1)
    }

    function showPassword2(){
        setShow2(!show2)
    }
    

    function handleConfirm(e){
        setConfirm(e.target.value)
    }
    
    function handlePassword(e){
        setPassword(e.target.value)
    }
    
        
    return(
        <div className="text-white h-[100dvh] w-screen flex flex-col items-center justify-center bg-[url(/background-signup.jpg)] bg-cover">
            <div className=" font-bold mb-7 font-[sans-serif text-4xl  md:text-6xl">{title}</div>
    
            <form  className="relative border-2 border-white rounded-xl flex flex-col items-center justify-center gap-5 text-xl p-5 bg-cyan-700/35 shadow-lg shadow-cyan-300 min-w-65 xs:min-2-70 sm:min-w-75  md:min-w-80 lg:min-w-85 xl:min-w-90">
                
                <div className="h-22 flex flex-col items-center justify-center relative">
                    <input type={show1 ? "text": "password"} value={password} onChange={(e) =>handlePassword(e)} id="password" name="password" className="border-white border-[1.5px] outline-none rounded-md h-15 w-65 text-md font-normal text-center" />
                    <label  htmlFor="password" className="absolute left-5 top-[2] bg-white text-black rounded-md px-3">New Password</label>
                    <button onClick={showPassword1} className="absolute right-3 " type="button">{show1 ? slasheye : eye}</button>
                </div>
    
                <div className="h-22 flex flex-col items-center justify-center relative">
                    <input value={confirm} onChange={(e) =>handleConfirm(e)} id="confirm" name="confirm" type={show2 ? "text" : "password"} className="border-white border-[1.5px] outline-none rounded-md h-15 w-65 text-md font-normal text-center" />
                    <label htmlFor="confirm" className="absolute left-5 top-[2] bg-white text-black rounded-md px-3">Confirm Password</label>
                    <button onClick={showPassword2} className="absolute right-3 " type="button">{show2 ? slasheye : eye}</button>
                </div>
    
            
                <button onClick={handleForgot} type="button"  className="bg-cyan-700/50 p-3 px-10 rounded-full ring-1 ring-white hover:bg-cyan-700 mb-2">Submit</button>
               
            </form>
        </div>
    )
}
    

