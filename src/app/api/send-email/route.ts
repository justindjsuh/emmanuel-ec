// pages/api/send-email.js
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // or 465 for secure connections
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${process.env.GMAIL_USERNAME}`, // stored in environment variables
        pass: `${process.env.GMAIL_PASSWORD}`, // stored in environment variables
      },
    });

    try {
      const data = await req.json();
      const { to, fullName, subject, text } = data;

      // Send mail with the defined transporter object
      const info = await transporter.sendMail({
        from: `${fullName} <${to}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
        // html: "<b>Hello world?</b>", // html body (optional)
      });
      return NextResponse.json({ success: true, info }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: true, error }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, error: "Wrong HTTP Method Received" }, { status: 405 });
  }
}
