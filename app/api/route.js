import DBconnect from "../_utils/DBconnect";
import cookieParser from "cookie-parser";

DBconnect();



export async function GET(req) {
    return new Response("hello world");
}
