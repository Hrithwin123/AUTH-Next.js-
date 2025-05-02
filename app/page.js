"use client"
import Link from "next/link"
import HexaScreen from "./components/HexaScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faRightToBracket, faHouse, faRightFromBracket, faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home(){

return(
  <div className=" whole absolute -z-10 home-background bg-[rgb(10, 31, 86)] ">
       <div className="page-1 -z-10 relative  w-[100dvw] h-[100dvh]">
          <div className="absolute image -z-10 bg-center bg-[url(/sec.jpg)] bg-cover h-full w-full text-6xl text-white font-bold font-[sans-serif]">
            
            <div className="text z-1 absolute left-3 top-[50%] -translate-y-[50%] select-none">
              <div className="relative text p-3 ">Hrithwin's</div>
              <div className=" relative text p-3">Auth Website</div>
            </div> 

            <div className="box absolute bg-sky-400/25 z-3 p-5 flex flex-col items-center right-50 top-[50%] -translate-y-[50%] box border-5 rounded-lg shadow-lg shadow-white border-white h-120 w-100">
              
              <div className="text-5xl font-title">A Demo on</div>
              <div className="text-5xl font-title">Authorisation</div>
                <div className="font-title flex flex-col items-center gap-10 py-20  p-5">

                  <Link href="/signup" className="bg-cyan-500/75 hover:bg-cyan-600/75 hover:cursor-none border-1 p-2 text-4xl rounded-lg underline underline-offset-3 decoration-cyan-300">Sign Up</Link>
                  <Link href="/login"  className="bg-cyan-500/75 hover:bg-cyan-600/75 hover:cursor-none border-1 p-2 rounded-lg text-4xl underline underline-offset-3 decoration-cyan-300">Login</Link>

                </div>
           
            </div>
          </div>

       </div>
      

      <div className="relative page-2 -z-10  w-[100dvw] h-[100dvh] ">
        <div className="relative leftbox -z-10 w-[100dvw] h-[50dvh]">

        <div className="p-5 shadow-lg shadow-cyan-300 absolute data-box-1 left-15 top-10 w-100 min-h-50 rounded-xl bg-linear-to-br from-cyan-300 to-indigo-700 ring-3 ring-cyan-300 border-5 border-[rgb(10, 31, 86)]">
         
          <h1 className="text-3xl font-kanit text-center text-white">Authentication</h1>
          <p className="text-xl font-kanit text-center text-white mt-2 ">
            Its the process in which the identity of the User is verified.
            The type of authentication being used here is Password based.
            Authentication is done here using JWT and cookies.
          </p>
        </div>

        <div className="scroll-bar-1 overflow-hidden shadow-lg shadow-cyan-300  absolute w-120 h-15 border-5 border-black right-20 top-30 rounded-2xl ring-3  ring-cyan-300">
          <div className="scroll-box-1 flex items-center justify-between gap-[5px] text-white font-kanit ">
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Username</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Password</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">JWT</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Cookies</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Sign Up</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Email</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">OTP</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Login</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Verification</div>

            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Username</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Password</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">JWT</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Cookies</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Sign Up</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Email</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">OTP</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Login</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Verification</div>
          </div>
        </div>
        </div>

        <div className="relative rightbox -z-10 w-[100dvw] h-[50dvh]">

        <div className="scroll-bar-2 overflow-hidden shadow-lg shadow-cyan-300  absolute w-120 h-15 border-5 border-black left-10 bottom-30 rounded-2xl ring-3  ring-cyan-300">
          <div className="scroll-box-2 flex items-center justify-between gap-[5px] text-white font-kanit ">
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Verification</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Login</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">OTP</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Email</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Sign Up</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Cookies</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">JWT</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Password</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Username</div>

            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Verification</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Login</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">OTP</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Email</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 min-w-20 px-2 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Sign Up</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Cookies</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">JWT</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Password</div>
            <div className="flex-shrink-0 flex items-center justify-center h-12 px-2 min-w-20 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-700">Username</div>
          </div>
        </div>

        <div className="p-5 shadow-lg shadow-cyan-300 absolute data-box-2 right-20 bottom-10  w-100 min-h-50 rounded-xl bg-linear-to-br from-cyan-300 to-indigo-700 ring-3 ring-cyan-300 border-5 border-[rgb (10, 31, 86)]">
          <h1 className="text-3xl font-kanit text-center text-white">Authorization</h1>
            <p className="text-xl font-kanit text-center text-white mt-2 ">
              Its the process using which you determine whether a User has the permissions to view certain content or perform specific actions.
            </p>

        </div>
        </div>
      </div>

      <div className="page-3 relative -z-10  w-[100dvw] h-[100dvh] text-white">

        <div className="overflow-hidden h-[100dvh] w-screen relative">
          <div className="auth-head absolute left-100 top-5 z-2 title text-6xl underline decoration-cyan-200 underline-offset-4 font-title text-center">Authentication</div>
          <HexaScreen/>
          <div className="absolute top-35 left-83 flex gap-5 pointer-events-none">
            
            <div className="auth h-100 w-75 border-2 border-white pointer-events-none bg-cyan-500/30 shadow-md shadow-white rounded-lg flex flex-col items-center ">
            <FontAwesomeIcon className="text-cyan-200 text-6xl mt-5" icon={faRightToBracket}></FontAwesomeIcon>
              <a href="/signup" className="hover:scale-110"><div className="text-3xl underline decoration-cyan-200 underline-offset-3 font-title">Sign Up</div></a>
              <ul className="list-disc text-sm font-kanit mt-5">
                <li>User enters Name, Email and Password</li>
                <li>The data is sent to the DataBase</li>
                <li>A token is signed of the data using JWT</li>
                <li>The token is then set as a cookie</li>
                <li>An OTP is sent to the email of the User</li>
                <li>They are taken to the Verification Page</li>
              </ul>
            </div>

            <div className="verify h-100 w-75 border-2 border-white pointer-events-none bg-cyan-500/30 shadow-md shadow-white rounded-lg flex items-center flex-col">
            <FontAwesomeIcon className=" text-cyan-200 text-6xl mt-5" icon={faCircleCheck}></FontAwesomeIcon>
              <div className="text-3xl font-title underline decoration-cyan-200 underline-offset-3">Verify</div>
             

              <ul className="list-disc text-sm font-kanit mt-5 translate-x-2">
                <li>The User enters the OTP sent to them</li>
                <li>The OTP is verified in the Backend</li>
                <li>OTP Wrong ? User can re enter the OTP</li>
                <li>OTP Expired ? User has to Re Sign Up</li>
                <li>Cookie is rewritten so that User is Verified</li>
                <li>Taken to the final DONE page</li>
             
              </ul>
            </div>
          </div>
        </div>
          
      </div>
      


  </div>
)
}