import User from "../../_models/User";
import jwt from "jsonwebtoken"
import { sendWelcomeEmail } from "../../_mailtrap/emails";
import DBconnect from "@/app/_utils/DBconnect";
import { NextResponse } from "next/server";
const secret = process.env.JWT_SECRET



export async function POST(req){
    await DBconnect()

    const {code} = await req.json();

    try{

        const user = await User.findOne({

            verificationToken : code,
            verificationTokenExpiresAt : {$gt : Date.now()},

        })


        if(!user){
            return Response.json({success : false, message : "Invalid or Expired verification code"}, {status : 400})
        }
        
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        
        await user.save()

        //rewrite token written on signup

       const response = NextResponse.json({success : true, message : "Logged In Successfully"})
       
        const role = user.email == "hrithwin123@gmail.com" ? "admin" : "user";
        
        const token = jwt.sign({name : user.name, lastLogin : user.lastLogin, role, isVerified : user.isVerified}, secret)
    
        response.cookies.set("token", token, {maxAge : 24 * 60 * 60 *1000})

        return response
        
        
    }
    catch(err){
        return NextResponse.json({success : false, message : `Error occured : ${err}`}, {status : 400})

    }



}