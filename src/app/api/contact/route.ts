import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  productCategory?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, phone, enquiryType, productCategory, message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Please provide a meaningful message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      enquiryType: enquiryType || "General Enquiry",
      productCategory: productCategory || "Not Specified",
      message: message.trim(),
      receivedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    const recipientEmail = "livorachemicals@gmail.com";
    console.log(`[LIVORA DISPATCH -> ${recipientEmail}]`, payload);

    let emailDelivered = false;
    let deliveryProvider = "none";

      // 1. Check for Gmail SMTP / Nodemailer App Password
      const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
      const gmailUser = process.env.GMAIL_USER || "livorachemicals@gmail.com";

      if (gmailAppPassword) {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailUser,
              pass: gmailAppPassword,
            },
          });

          const mailSubject = `[LIVORA Website] ${payload.enquiryType}: ${payload.name}`;
          const mailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #DFE3DF; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #00504A; padding: 24px; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">LIVORA CHEMICALS</h1>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #F4E7DC;">Smart Solutions. Stronger Structures.</p>
            </div>
            <div style="padding: 24px;">
              <div style="display: inline-block; padding: 4px 10px; background: #F6F7F4; border: 1px solid #DFE3DF; border-radius: 4px; font-size: 11px; font-weight: 700; color: #00504A; text-transform: uppercase; margin-bottom: 16px;">
                ${payload.enquiryType}
              </div>
              <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1D2322;">New Website Enquiry Received</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361; width: 140px;">Full Name:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; font-weight: 600; color: #1D2322;">${payload.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #00504A; font-weight: 600;"><a href="mailto:${payload.email}" style="color: #00504A; text-decoration: underline;">${payload.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361;">Phone:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; font-weight: 600; color: #1D2322;"><a href="tel:${payload.phone}" style="color: #1D2322; text-decoration: none;">${payload.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361;">Category:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; font-weight: 600; color: #1D2322;">${payload.productCategory}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361;">Received At:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #EAECE8; color: #5A6361;">${payload.receivedAt} (IST)</td>
                </tr>
              </table>

              <div style="background: #F6F7F4; border-left: 4px solid #00504A; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <strong style="display: block; font-size: 12px; color: #5A6361; text-transform: uppercase; margin-bottom: 6px;">Message Content:</strong>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1D2322; white-space: pre-wrap;">${payload.message}</p>
              </div>

              <div style="text-align: center; padding-top: 10px;">
                <a href="mailto:${payload.email}?subject=Re:%20${encodeURIComponent(mailSubject)}" style="display: inline-block; padding: 12px 24px; background: #00504A; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; border-radius: 4px;">Reply Directly to ${payload.name}</a>
              </div>
            </div>
            <div style="background: #F6F7F4; padding: 16px; font-size: 11px; color: #5A6361; text-align: center; border-top: 1px solid #EAECE8;">
              Dispatched automatically from LIVORA CHEMICALS Web Platform to ${recipientEmail}
            </div>
          </div>
        `;

          await transporter.sendMail({
            from: `"LIVORA Platform" <${gmailUser}>`,
            to: recipientEmail,
            replyTo: payload.email,
            subject: mailSubject,
            text: `
[LIVORA Website] ${payload.enquiryType}
From: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Category: ${payload.productCategory}
Received: ${payload.receivedAt}

Message:
${payload.message}
          `.trim(),
            html: mailHtml,
          });

          emailDelivered = true;
          deliveryProvider = "gmail-smtp";
        } catch (smtpErr) {
          console.error("[NODEMAILER GMAIL ERROR]", smtpErr);
        }
      }

      // 2. Check for optional Resend provider
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!emailDelivered && resendApiKey) {
        try {
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.RESEND_FROM_EMAIL || "LIVORA Enquiries <enquiries@livorachemicals.com>",
              to: [recipientEmail],
              reply_to: payload.email,
              subject: `[LIVORA Website] ${payload.enquiryType}: ${payload.name}`,
              text: `
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Type: ${payload.enquiryType}
Category: ${payload.productCategory}
Date: ${payload.receivedAt}

Message:
${payload.message}
            `.trim(),
            }),
          });

          if (resendResponse.ok) {
            emailDelivered = true;
            deliveryProvider = "resend";
          }
        } catch (resendErr) {
          console.error("[RESEND DELIVERY ERROR]", resendErr);
        }
      }

      // Build mailto fallback URL
      const mailtoSubject = encodeURIComponent(`[LIVORA Website] ${payload.enquiryType}: ${payload.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nCategory: ${payload.productCategory}\n\nMessage:\n${payload.message}`
      );
      const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      if (emailDelivered) {
        return NextResponse.json({
          success: true,
          delivered: true,
          provider: deliveryProvider,
          recipient: recipientEmail,
          message: `Your enquiry has been successfully delivered to ${recipientEmail}.`,
        });
      }

      // If server SMTP password is not yet configured in environment variables,
      // the system safely logs the enquiry and provides a 1-click mailto relay option
      return NextResponse.json({
        success: true,
        delivered: false,
        recipient: recipientEmail,
        mailtoUrl,
        message: `Enquiry logged successfully for ${recipientEmail}. Direct delivery activates automatically when GMAIL_APP_PASSWORD is set in environment variables.`,
      });
    } catch (error) {
      console.error("[CONTACT API ERROR]", error);
      return NextResponse.json(
        { success: false, message: "Internal server error processing enquiry." },
        { status: 500 }
      );
    }
  }
