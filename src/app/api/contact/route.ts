import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain later
      to: process.env.CONTACT_EMAIL || "rachitpednekar7@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <div style="margin-bottom: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 5px 0;">From</p>
              <p style="color: #111827; font-size: 16px; margin: 0; font-weight: 500;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 5px 0;">Email</p>
              <p style="color: #111827; font-size: 16px; margin: 0;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 5px 0;">Message</p>
              <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="color: #374151; font-size: 15px; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
              This email was sent from your portfolio contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
