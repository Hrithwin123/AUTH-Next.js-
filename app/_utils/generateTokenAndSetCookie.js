import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const secret = process.env.JWT_SECRET

import { cookies } from "next/headers";

export default async function(userId){


    const token = jwt.sign({userId}, secret, {expiresIn : "7d"});

    const cookie  = await cookies()
    
    cookie.set("token", token, {
        httpOnly : true,
        secure : process.env.NODE_ENV == "production",
        sameSite : "strict",
        maxAge : (7 * 24 * 60 * 60),

    })

    return token

}

