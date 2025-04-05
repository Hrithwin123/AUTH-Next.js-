"use client"

import { useState, useRef, useEffect } from "react"


export default function verify(){


const [title, setTitle] = useState("A Verification Code has been sent to your email")
const [otp, setOtp] = useState({})
const otpSize = 6;



function moveFocus(e, ind){

setOtp({...otp, [ind] : e.target.value})

const input = document.querySelectorAll("input")


if(e.target.value.length > 0){
    input[ind].classList.toggle("border-cyan-700")
    input[ind].classList.toggle("bg-cyan-800/75")
    input[ind != 5 ? ind+1 : 0].focus()

}

}

async function verifyOtp(){

    const verificationCodeList = [otp[0], otp[1], otp[2], otp[3], otp[4], otp[5], otp[6]]
    const code = verificationCodeList.join("")

    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({code})
    }


    const res = await fetch("/api/verify", options);
    const data = await res.json();
    setTitle(data.message)
    if(data.success){
        window.location.href = "/done"
    }

   
   
    
}

const inputOtp =  Array.from({length : otpSize}).map((elem, ind) =>(

<input onChange={(e) => moveFocus(e, ind)} key={ind} className="border-[1.5px]  h-10 w-10 text-center rounded-md md:h-12 md:w-12" maxLength={1}></input>

)
)

return(
    <div className="w-screen h-[100dvh] flex items-center justify-center bg-[url(/background-signup.jpg)] bg-cover">
        <form className="flex flex-col items-center justify-evenly border-2 border-white bg-cyan-700/25 min-h-40 rounded-lg shadow-lg shadow-cyan-700 min-w-50 xs:min-w-60 sm:min-w-70 md:min-w-80 lg:min-w-90 xl:min-w-100">

            <div className="text-2xl font-bold text-white m-3 text-center font-[sans-serif] ">{title}</div>

            <div className="flex gap-1 text-white font-bold py-3 ">

            {inputOtp}

            </div>

            <button type="button" onClick={verifyOtp} className="bg-cyan-700/50 text-white font-bold p-2 px-8 md:p-3 md:px-10 rounded-full ring-1 ring-white m-5 hover:bg-cyan-700 ">Submit</button>
        </form>
    </div>
)
}