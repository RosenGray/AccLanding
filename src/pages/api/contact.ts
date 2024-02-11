// // pages/api/contact.js
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Example with Gmail; for other services, you'll need to configure accordingly
    service: "Gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email, // Sender address
      to:process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      subject: `New message from  ${name},email:${email}`,
      text: message,
      // Optionally, HTML body
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
