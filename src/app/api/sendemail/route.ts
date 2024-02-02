import { NextApiRequest } from "next";

import { NextRequest, NextResponse } from 'next/server';

const SibApiV3Sdk = require('@getbrevo/brevo');

export async function POST(req: any) {
    // premiere requete reception
    const body = await req.json();
    // declenchement de la 2eme request et reception de la reponse du smtp
    smtpRequest(body);
    // reponse au pc du client de la 1ère requete
    return Response.json({ message: 'Hello from Next.js!' })
}

function smtpRequest(body: any) {

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.APITOKENBREVO;
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();



    sendSmtpEmail.subject = "My {{params.subject}}";
    sendSmtpEmail.htmlContent = "<html><body>{{params.bodyEmail}}</body></html>";
    sendSmtpEmail.sender = { "name": "Elliot", "email": "clemenceauelliot@gmail.com" };
    sendSmtpEmail.to = [
        { "email": "clemenceauelliot@gmail.com", "name": "elliot clemenceau" }
    ];
    sendSmtpEmail.replyTo = { "email": body.emailUser, "name": body.emailUser };
    sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
    sendSmtpEmail.params = { "bodyEmail": body.corps, "subject": "Envoyé depuis votre site" };


    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
        console.error('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function (error: any) {
        console.error(error);
    });
}

