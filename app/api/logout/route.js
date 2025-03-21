import { cookies } from "next/headers"

export async function POST(req){
    const cookie = await cookies();

    cookie.delete("token")

    return Response.json({success : true, message : "Cookie has been cleared"})
}

export async function GET(){
    return new Response("logout route")
}