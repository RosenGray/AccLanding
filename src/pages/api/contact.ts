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
      user: "accessibilik@gmail.com", // process.env.EMAIL_USERNAME,
      pass: "hmxh bxdq zfkp uyho", //process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email, // Sender address
      to: "accessibilik@gmail.com", //process.env.MY_EMAIL_ADDRESS, // Your email address where you want to receive emails
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