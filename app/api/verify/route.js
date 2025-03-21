import User from "../../_models/User";

import { sendWelcomeEmail } from "../../_mailtrap/emails";
import DBconnect from "@/app/_utils/DBconnect";


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
        
        sendWelcomeEmail(user.email)
        
        return Response.json({success : true, message : "You are Now Verified"}, {status : 200})
        
    }
    catch(err){
        return Response.json({success : false, message : `Error occured : ${err}`}, {status : 400})

    }



}