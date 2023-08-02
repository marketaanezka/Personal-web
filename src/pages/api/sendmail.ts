import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

//https://dev.to/wpickeral/building-a-contact-form-with-nextjs-and-nodemailer-4emp

type Data = {
    success?: string,
    error?: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const message = {
        from: req.body.email,
        to: process.env.MAIL_ADDRESS,
        subject: `Od ${req.body.name}`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
    };

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 2525,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    transporter.verify(function (error, success: boolean) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages', success);
        }
    });

    if (req.method === 'POST') {
        console.log("post method")
        transporter.sendMail(message, (err, info) => {
            console.log("transporter")
            if (err) {
                res.status(404).json({
                    error: `Connection refused: ${err}`
                });
            } else {
                console.log("success ", res)
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    }
}
