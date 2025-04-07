'use server';

import { Resend } from "resend";
import EmailTemplate from "@/app/template/email/page"

const resend = new Resend("re_BDd7Sk9W_2beK39B8QFHkmasDf44EjFrE");
// const myMail = process.env.MY_MAIL || [];

export const sendEmail  = async (mail : string, subject : string, message : string) => {
    const send = await resend.emails.send({
        to: "freddymaupou@gmail.com", // list of receivers
        from: "'Nouvelle demande de contact !' <onboarding@resend.dev>", // dev adress => will work once deployed?
        subject: "Quelqu'un me contacte !", // Subject line
        react: EmailTemplate(mail, subject, message), // html body or React 
    });

    if(send.error){
        console.log(send.error)
        console.error("Email not sent")
    } else{
        console.log("Email sent");
    }

}