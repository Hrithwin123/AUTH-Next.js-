import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"
dotenv.config()

const token = process.env.MAILTRAP_TOKEN;

export const client = new MailtrapClient({token})

export const sender = {
    name : "Hrithwin N",
    email : "hello@demomailtrap.co"
}


