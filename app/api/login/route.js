import User from "@/app/_models/User";
import DBconnect from "@/app/_utils/DBconnect";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";
import jwt from"jsonwebtoken"
const secret = process.env.JWT_SECRET

export async function POST(req){
    try{

        await DBconnect();
        const {email, password} = await req.json();
        
        const user = await User.findOne({email})

        if(!user){
            return Response.json({success : false, message : "This email is not registered"});

        }
        
        if(!user.isVerified){
            return Response.json({success : false, message : "This email is not Verified, Please Sign Up to our website"});
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if(!isPasswordValid){

            return Response.json({success : false, message : "Wrong Password !!!"} , {status : 200});

        }

        user.lastLogin = Date.now()
        await user.save()

        //cookies

        const response = NextResponse.json({success : true, message : "Logged In Successfully"})
    
        const token = jwt.sign({name : user.name}, secret)

        response.cookies.set("token", token, {maxAge : 24 * 60 * 60 *1000})

        return response
        
        
    }
    catch(err){
        return Response.json({success : false, message : `Error : ${err}`, }, {status : 400})
    }




}




export async function GET(req){
    return new Response("login route")
}