import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function GET(req){
    
    try{
        const token = req.cookies.get("token")?.value;

        const {payload} = await jwtVerify(token, secret);
    
        console.log(payload)
    
        return NextResponse.json(payload)
        
    }
    catch(err){
        
        const payload = {isVerified : false}
        console.log(err)
        return NextResponse.json(payload)
    }
   
}