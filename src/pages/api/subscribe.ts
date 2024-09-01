import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

//https://dev.to/wpickeral/building-a-contact-form-with-nextjs-and-nodemailer-4emp

type Data = {
  success?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const message = {
    from: process.env.MAIL_SENDER,
    to: process.env.MAIL_ADDRESS,
    subject: `E-mail ${req.body.email}`,
    text: `${req.body.email} subscribed for mentoring info`,
    html: `<p>${req.body.email} subscribed for mentoring info</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transporter.verify(function (error, success: boolean) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages", success);
    }
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused: ${err}`,
        });
      } else {
        console.log("success ", res);
        res.status(250).json({
          success: `Message delivered`,
        });
      }
    });
  }
}
