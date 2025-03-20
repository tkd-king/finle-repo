import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Body parse karo
    const { firstName, lastName, phone, option, email, message } = await req.json();

    // Validation check
    if (!email || !message) {
      return NextResponse.json({ error: "Email & message are required!" }, { status: 400 });
    }

    // SMTP transporter setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // false for TLS, true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: "musama4288921@gmail.com", // Admin's email
      subject: "New Contact Form Submission",
      text: `Email: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nOption: ${option} \nMessage: ${message}\nPhone: ${phone}`,
    });

    // Success response
    return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email!" }, { status: 500 });
  }
}
