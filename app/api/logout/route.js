import { NextResponse } from "next/server";

export async function POST(req){
    const response =  NextResponse.json({success : true, message : "You have been logged out"})

    response.cookies.set("token", "", {expires : new Date(0)})

    return response

}

export async function GET(){
    return new Response("logout route")
}