import User from "../../_models/User";
import bcrypt from "bcryptjs"
import DBconnect from "../../_utils/DBconnect";
import generateVerificationToken from "../../_utils/generate Verification Code";
import jwt from "jsonwebtoken"

import { sendVerificationEmail } from "@/app/_mailtrap/emails";
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET

export async function POST(req){
    await DBconnect();
    const {email, name, password} = await req.json();

    console.log({email, name, password})

    try{

        if(!email || !name || !password){
            throw new Error("All fields are required")
        }

        const userAlreadyExists = await User.findOne({email});

        if(userAlreadyExists){
            return Response.json({success : false, message : 'User Already Exists'}, {status : 200})
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = generateVerificationToken();

        const user = new User({
            email,
            password : hashedPassword, 
            name, 
            verificationToken,
            verificationTokenExpiresAt : Date.now() + (24 * 60 * 60 * 1000)
        })

        await user.save()

        sendVerificationEmail(user.email, verificationToken);

        //settingcookies

        const response = NextResponse.json({success : true, message : "User created Successfully"})

        const token = jwt.sign({name : user.name}, secret)

        response.cookies.set("token", token, {maxAge : 24 * 60 * 60 *1000})

        return response


    }
    catch(err){
        return Response.json({success : false, message : err.message}, {status : 400})
    }


    
}