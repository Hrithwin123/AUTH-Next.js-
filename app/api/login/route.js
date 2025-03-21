import User from "@/app/_models/User";
import DBconnect from "@/app/_utils/DBconnect";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "@/app/_utils/generateTokenAndSetCookie";

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
        generateTokenAndSetCookie(user._id)

        user.lastLogin = Date.now()
        await user.save()

        return Response.json({success : true, message : "Logged In Successfully"})
        
    }
    catch(err){
        return Response.json({success : false, message : `Error : ${err}`, }, {status : 400})
    }




}




export async function GET(req){
    return new Response("login route")
}