import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const DB_URI = process.env.DB_URI;


export default async function (){

    mongoose.connect(DB_URI)
    .then(() => console.log("Successfully connected to DB"))
    .catch((err) => console.log(err) )

    
}
