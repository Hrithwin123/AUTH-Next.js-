import { NextResponse } from "next/server"
import { jwtVerify } from "jose"   

const envsecret = process.env.JWT_SECRET


export async function middleware(req){


    const token = await req.cookies.get("token")?.value
    const secret = new TextEncoder().encode(envsecret)

    try{
        const verify = await jwtVerify(token, secret);

        return NextResponse.redirect(new URL("/done", req.url))

    }
    catch{
        return NextResponse.next()
    }

}


export const config = {
    matcher : ["/signup", "/login"]
}