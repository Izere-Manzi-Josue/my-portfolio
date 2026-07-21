import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    // Save message to database
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Send notification email
    try {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL!,
        subject: `New Portfolio Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Portfolio Contact Message</h2>

            <p>You have received a new message from your portfolio.</p>

            <hr />

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Subject:</strong> ${subject}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p>
              ${message}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Don't lose the contact message if email fails
      console.error("Email notification failed:", emailError);
    }

    return NextResponse.json(
      {
        message: "Message sent successfully.",
        data: newMessage,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
