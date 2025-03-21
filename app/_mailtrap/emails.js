import { client, sender } from "./Mailtrap"
import { verification_email_template, welcome_email_template, forgot_password_template } from "./EmailTemplates"
import { MailtrapClient } from "mailtrap"

export const sendVerificationEmail = async function (email, verificationToken){

const name = email.split("@")[0].replace(/\d+/g, "")

try{

const response = await client.send({
    from : sender,
    to : [{email}],
    subject : "Verify Your Email",
    html : verification_email_template.replace("{name}", name).replace("{verification code}", verificationToken),
    category : "Email Verification"


})

console.log("Email sent succssfully", response)


}
catch(err){
    console.log(`Error sending Verification email : ${err}`)
}


}


export const sendWelcomeEmail = async function(email){

    const name = email.split("@")[0].replace(/\d+/g, "")

    try{
        const response = await client.send({
            from : sender,
            to : [{email}],
            subject : `Welcome ${name}`,
            html : welcome_email_template.replace("{name}", name),
            category : "Welcome Email"

        })

        console.log("Welcome email sent : ", response)
    }
    catch(err){
        console.log("Error sending Welcome Email")
    }


}

export const sendForgotPasswordEmail =  async function(email, url){

try{
    const response = await client.send({
        from : sender,
        to : [{email}],
        subject : "Reset Your Password",
        html : forgot_password_template.replace("{url}", url),
        category : "Forgot Password"

    })

    console.log("Email Sent", response)
}
catch(err){
    console.log(`Error sending forgot password Email: ${err}`)
}

}
