import { after, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formPageFromLanding, forwardToTimber } from "@/lib/forward-to-timber";
import { emailSubject, generateLeadEmail } from "@/lib/lead-email";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  projectDetails?: string;
  customerType?: string;
  landingPage?: string;
  facilityType?: string;
  projectSize?: string;
  businessType?: string;
  propertySize?: string;
};

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.error("Missing SMTP credentials: SMTP_USER and SMTP_PASSWORD must be set");
    return NextResponse.json(
      {
        error:
          "Email service not configured. Please set SMTP_USER and SMTP_PASSWORD in environment variables.",
      },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as LeadBody;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const address = String(body.address ?? "").trim();
  const projectDetails = String(body.projectDetails ?? "").trim();
  const customerType = String(body.customerType ?? "").trim();
  const landingPage = String(body.landingPage ?? "").trim();
  const facilityType = String(body.facilityType || body.businessType || "").trim();
  const projectSize = String(body.projectSize || body.propertySize || "").trim();

  if (!name || !email || !phone || !address) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, phone, and address are required." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: smtpUser,
      subject: emailSubject(landingPage || undefined),
      html: generateLeadEmail({
        name,
        email,
        phone,
        address,
        projectDetails,
        facilityType: facilityType || undefined,
        projectSize: projectSize || undefined,
        customerType: customerType || undefined,
        landingPage: landingPage || undefined,
      }),
    });

    after(() =>
      forwardToTimber({
        name,
        email,
        phone,
        address,
        projectDetails,
        serviceType: facilityType || (landingPage ? `${landingPage} services` : "General"),
        formPage: formPageFromLanding(landingPage || undefined),
        leadSource: "Shield Chicago Website Form",
      }),
    );

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    const err = error as Error;
    console.error("Error sending email:", err);
    return NextResponse.json(
      {
        error: process.env.NODE_ENV === "development" ? err.message : "Failed to send email",
      },
      { status: 500 },
    );
  }
}
