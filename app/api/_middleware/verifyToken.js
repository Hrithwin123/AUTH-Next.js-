import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()


export const verifyToken = async function(req){

    const token = req.cookies.token;

    if(!token){
        return Response.json({success : false, message : "Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return 
        }
    }
    catch{

    }

}