import User from "../../_models/User";
import bcrypt from "bcryptjs"
import DBconnect from "../../_utils/DBconnect";
import generateVerificationToken from "../../_utils/generate Verification Code";
import generateTokenAndSetCookie from "../../_utils/generateTokenAndSetCookie";

import { sendVerificationEmail } from "@/app/_mailtrap/emails";

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


        generateTokenAndSetCookie(user._id)

        sendVerificationEmail(user.email, verificationToken);

        return Response.json({success : true, message : "User created successfully", user : {...user, password : undefined}}, {status : 200})


    }
    catch(err){
        return Response.json({success : false, message : err.message}, {status : 400})
    }


    
}