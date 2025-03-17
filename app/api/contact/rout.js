import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export default async function handler(req) {
  if (req.method !== "POST") {
    return NextResponse.status(405).json({ error: "Method Not Allowed" });
  }

  const { firstName, lastName, phone, option, email,  message  } = req.body;

  if (!email || !message) {
    return NextResponse.status(400).json({ error: "Email & message are required!" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // false for TLS, true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    

    await transporter.sendMail({
      from: email,
      to: "musama4288921@example.com", // Admin's email
      subject: "New Contact Form Submission",
      text: `Email: ${email}\nFirst Name: ${firstName}\nLast Name${lastName}\nOption: ${option} \nMessage: ${message}\nPhone: ${phone}`,
    });

    NextResponse.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    NextResponse.status(500).json({ error: "Failed to send email!" });
  }
}
