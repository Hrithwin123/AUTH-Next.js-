import User from "@/app/_models/User"
import DBconnect from "@/app/_utils/DBconnect"
import crypto from "crypto"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import { sendForgotPasswordEmail } from "@/app/_mailtrap/emails"

dotenv.config()


export async function POST(req){

    try{
        await DBconnect()

        const {email} = await req.json()

        const user = await User.findOne({email});

        if(!user){
            return Response.json({success : true, message : "This email is not registered"})
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = (Date.now() + (60 * 60 * 1000));

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save()

        sendForgotPasswordEmail(email, `${process.env.CLIENT_URL}/forgot/${resetToken}`)

        return Response.json({success : true, message : "We've sent you an email with instructions to reset your password"})


    }
    catch(err){
        console.log(`Error  ${err}`)
        return Response.json({success : false, message : `Error  ${err}`})
    }
}   


export async function PATCH(req){

    try{
        await DBconnect();
        const {password, token} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.findOne({
            resetPasswordToken : token, 
            resetPasswordExpiresAt : {$gt : Date.now()}
        })


        user.password = hashedPassword;
        user.token = undefined;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save()

        return Response.json({success : true, message : "Your password has been successfully Reset"})


    }
    catch(err){
        return Response.json({success : false, message : `Error : ${err}`}, {status : 200})
    }
}