export const verification_email_template = 
`
<div style="background-color : rgb(253, 253, 236);padding : 20px; border : 2px solid black;">
    <center><h1 style="font-family : sans-serif; text-transform: capitalize;">Welcome {name} 🎉</h1></center>
    <br>
    <center><p style="font-size:20px;">Thank you for Signing up, We are happy to have you onboard.</p></center>
    <br>
    <center><h1 style="color : green">This is the Verification Code for your Sign up</h1></center>
    <center><h2 style="font-size : 25px; color : green">{verification code}</h2></center>
    <center><p style="font-size : 20px">The Verification Code will expire in 24Hrs</p></center>
    <center><p style="font-size : 20px">So please Sign up soon !!!</p></center>

</div>

`

export const welcome_email_template = 
`
<div style=" color : green; background-color: rgb(253, 253, 236); padding: 20px; border: 2px solid black; font-family: sans-serif; text-align: center;">

    <h1 style="background-color: green; color: white; padding: 12px; text-transform: capitalize;">
        Welcome {name} to Auth Website
    </h1>

    <p style="font-size: 20px; padding-top: 15px;">We are so happy to have you here</p>
    <p style="font-size: 20px; padding-top: 15px;">Thank you for testing out this website</p>

    <table align="center">
        <tr><td><a style="font-size : 20px; text-decoration : none; font-weight : bold; color : blue" href="https://github.com/Hrithwin123">Click to explore my GitHub</a></td></tr>
    </table>

    <p style="font-size: 20px; padding-top: 15px;">Have fun Exploring 😄 !!!!</p>
</div>


`


export const forgot_password_template =
`

<div style="font-size : 25px; background-color : rgb(253, 253, 236);padding : 20px; border : 2px solid black; font-family: sans-serif;">

<center><h1 style="background-color: green; color: white; padding: 12px; text-transform: capitalize; ">Password Reset</h1></center>
<center><p style="font-size: 20px; padding-top: 15px;">Looks like you forgot your password for the auth website</p></center>
<center><p style="font-size: 20px; padding-top: 15px;">Click below to reset your password</p></center>

<table align="center">
    <tr><td>
        <a href="{url}"><button style="background-color:rgb(43, 146, 255); padding:15px; border-radius : 5px; color : white; border:1.5px solid black;font-weight:bold;font-size: 20px; ">Reset Password</button></a>
    </td></tr>
</table>

<center><p style="font-size: 20px; padding-top: 15px;">If you did not forget your password, you can safely ignore this email</p></center>
</div>

`