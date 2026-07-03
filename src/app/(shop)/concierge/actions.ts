"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerEmail = process.env.OWNER_EMAIL || "admin@example.com";

export async function submitSupportRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const orderNumber = formData.get("order_number") as string;
  const issue = formData.get("issue") as string;

  try {
    if (process.env.RESEND_API_KEY) {
      // Customer Email
      await resend.emails.send({
        from: "Aura Support <onboarding@resend.dev>",
        to: email,
        subject: "We received your support request",
        html: `<h1>Hi ${name},</h1><p>We've received your request and our concierge team will get back to you shortly.</p><p><strong>Your Inquiry:</strong><br/>${issue}</p>`
      });
      
      // Owner Email
      await resend.emails.send({
        from: "Aura Support Alerts <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `New Support Request from ${name}`,
        html: `<h1>New Support Request</h1><p><strong>Customer:</strong> ${name} (${email})</p><p><strong>Order Number:</strong> ${orderNumber || "None"}</p><p><strong>Issue:</strong><br/>${issue}</p>`
      });
    } else {
      console.warn("RESEND_API_KEY is not set. Support emails were not sent.");
    }
    return { success: true };
  } catch (error: any) {
    console.error("Failed to send support emails:", error);
    return { success: false, error: error.message };
  }
}
