import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, purposeOfJoining, description } =
      await req.json();

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !purposeOfJoining ||
      !description
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Compose and send email
    const mailOptions = {
      from: email, // User's email
      to: process.env.GMAIL_USER, // Send email to yourself
      subject: `New Contact Request from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Purpose of Joining: ${purposeOfJoining}

Description:
${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error sending message.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
