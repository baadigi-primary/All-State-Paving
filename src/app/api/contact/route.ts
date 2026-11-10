import { isBlockedSender } from '@/lib/blocked-sender'
import { verifyTurnstileToken } from '@/lib/turnstile'

const CLIENT_EMAIL = "Allstatepavenow@gmail.com";
const BCC_EMAIL = "webform@baadigi.com";
const FROM_ADDRESS = process.env.CONTACT_FROM?.match(/<([^>]+)>/)?.[1] || process.env.CONTACT_FROM || "notifications@leads.baadigi.com";
const DEFAULT_ORG_ID = "abb35dae-87b8-4217-bce9-35faf3a4b90d";
const DEFAULT_DASHBOARD_URL = "https://app.predictableworkengine.com";

function field(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "";
}

async function sendEmail(payload: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error("Resend error:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("Resend request failed:", err);
    return false;
  }
}

async function forwardToDashboard(
  lead: { name: string; phone: string; email: string; service: string; message: string },
  referer: string,
) {
  const base = process.env.BAADIGI_DASHBOARD_URL || DEFAULT_DASHBOARD_URL;
  try {
    const res = await fetch(`${base}/api/sites/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CMS_SECRET ? { Authorization: `Bearer ${process.env.CMS_SECRET}` } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify({ organization_id: process.env.BAADIGI_ORG_ID || DEFAULT_ORG_ID, ...lead }),
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) console.error("Dashboard lead sync failed:", res.status, await res.text());
  } catch (err) {
    console.error("Dashboard lead sync error:", err);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "company" field.
  if (field(body.company, 200)) {
    return Response.json({ success: true });
  }

  const full_name = field(body.full_name, 120);
  const phone = field(body.phone, 40);
  const email = field(body.email, 200);
  const service_type = field(body.service_type, 120);
  const message = field(body.message, 5000);

  if (!full_name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please fill in your name, phone and a valid email." }, { status: 400 });
  }

  if (await isBlockedSender(email)) {
    return Response.json({ success: true });
  }

  if (!(await verifyTurnstileToken(body["cf-turnstile-response"], getClientIp(request)))) {
    return Response.json({ error: "Verification failed. Please try again." }, { status: 403 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Form temporarily unavailable. Please call us." }, { status: 503 });
  }

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-collapse: collapse; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e5e7eb; }
        .header { background-color: #1a1a1a; padding: 40px 20px; text-align: center; border-bottom: 5px solid #FFD202; }
        .content { padding: 40px; color: #111111; }
        .btn { background-color: #FFD202; color: #000000 !important; padding: 18px 35px; border-radius: 4px; text-decoration: none; font-weight: 800; display: inline-block; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
        .lead-card { border-left: 4px solid #FFD202; background-color: #f9fafb; padding: 25px; margin-bottom: 20px; }
        .footer-minimal { padding: 35px 20px; text-align: center; background-color: #1a1a1a; color: #ffffff; }
        .badge { display: inline-block; background-color: #fff9e6; color: #856d00; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 2px; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 1px; border: 1px solid #FFD202; }
        h1 { font-size: 30px; font-weight: 800; line-height: 1.1; margin: 0 0 15px 0; color: #1a1a1a; letter-spacing: -0.5px; }
        p { font-size: 16px; line-height: 1.6; color: #4b5563; margin: 0 0 20px 0; }
        .field-label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px; }
        .field-value { font-size: 16px; color: #111111; margin-bottom: 18px; font-weight: 600; }
    </style>
</head>
<body>
    <table class="container" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td class="header">
                <div style="color: #ffffff; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                    ALL STATE <span style="color: #FFD202;">PAVING</span>
                </div>
            </td>
        </tr>

        <tr>
            <td class="content">
                <span class="badge">Quote Request Received</span>
                <h1>New Project Inquiry</h1>
                <p>You have a new lead from the <strong>All State Paving</strong> website submission form. The details of the request are listed below:</p>

                <div class="lead-card">
                    <span class="field-label">Customer Name</span>
                    <div class="field-value">${escapeHtml(full_name)}</div>

                    <span class="field-label">Phone Number</span>
                    <div class="field-value"><a href="tel:${escapeHtml(phone)}" style="color: #111111; text-decoration: none;">${escapeHtml(phone)}</a></div>

                    <span class="field-label">Email Address</span>
                    <div class="field-value">${escapeHtml(email)}</div>

                    <span class="field-label">Service Interested In</span>
                    <div class="field-value">${escapeHtml(service_type || "Not specified")}</div>

                    <span class="field-label">Message / Project Description</span>
                    <div class="field-value" style="line-height: 1.5; font-weight: 400; color: #374151;">"${escapeHtml(message || "No message provided")}"</div>
                </div>

                <div style="text-align: center; padding: 25px 0 10px 0;">
                    <a href="mailto:${escapeHtml(email)}" class="btn">Contact Lead Now</a>
                </div>
            </td>
        </tr>

        <tr>
            <td class="footer-minimal">
                <p style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; margin-bottom: 12px;">All State Paving &copy; 2026</p>
                <p style="font-size: 13px; margin: 0;">
                    <a href="https://allstatepavenow.com" style="color: #FFD202; text-decoration: none; font-weight: 600;">allstatepavenow.com</a>
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`;

  const autoResponderHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-collapse: collapse; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e5e7eb; }
        .header { background-color: #1a1a1a; padding: 40px 20px; text-align: center; border-bottom: 5px solid #FFD202; }
        .content { padding: 40px; color: #111111; }
        .btn { background-color: #FFD202; color: #000000 !important; padding: 18px 35px; border-radius: 4px; text-decoration: none; font-weight: 800; display: inline-block; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
        .lead-card { border-left: 4px solid #FFD202; background-color: #f9fafb; padding: 25px; margin-bottom: 20px; }
        .footer-minimal { padding: 35px 20px; text-align: center; background-color: #1a1a1a; color: #ffffff; }
        .badge { display: inline-block; background-color: #fff9e6; color: #856d00; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 2px; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 1px; border: 1px solid #FFD202; }
        h1 { font-size: 30px; font-weight: 800; line-height: 1.1; margin: 0 0 15px 0; color: #1a1a1a; letter-spacing: -0.5px; }
        p { font-size: 16px; line-height: 1.6; color: #4b5563; margin: 0 0 20px 0; }
        .field-label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px; }
        .field-value { font-size: 16px; color: #111111; margin-bottom: 18px; font-weight: 600; }
    </style>
</head>
<body>
    <table class="container" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td class="header">
                <div style="color: #ffffff; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                    ALL STATE <span style="color: #FFD202;">PAVING</span>
                </div>
            </td>
        </tr>

        <tr>
            <td class="content">
                <span class="badge">Request Confirmed</span>
                <h1>We've Received Your Request!</h1>
                <p>Thank you for reaching out to <strong>All State Paving</strong>, ${escapeHtml(full_name)}! We appreciate your interest in our services. A member of our team will review your details and contact you shortly to discuss your project.</p>

                <p style="font-size: 14px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Summary of your request:</p>
                <div class="lead-card">
                    <span class="field-label">Your Name</span>
                    <div class="field-value">${escapeHtml(full_name)}</div>

                    <span class="field-label">Phone Number</span>
                    <div class="field-value"><a href="tel:${escapeHtml(phone)}" style="color: #111111; text-decoration: none;">${escapeHtml(phone)}</a></div>

                    <span class="field-label">Email Address</span>
                    <div class="field-value">${escapeHtml(email)}</div>

                    <span class="field-label">Service Interested In</span>
                    <div class="field-value">${escapeHtml(service_type || "Not specified")}</div>

                    <span class="field-label">Message / Project Description</span>
                    <div class="field-value" style="line-height: 1.5; font-weight: 400; color: #374151;">"${escapeHtml(message || "No message provided")}"</div>
                </div>

                <div style="text-align: center; padding: 25px 0 10px 0;">
                    <a href="https://allstatepavenow.com" class="btn">Visit Our Website</a>
                </div>
            </td>
        </tr>

        <tr>
            <td class="footer-minimal">
                <p style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; margin-bottom: 12px;">All State Paving &copy; 2026</p>
                <p style="font-size: 13px; margin: 0;">
                    <a href="https://allstatepavenow.com" style="color: #FFD202; text-decoration: none; font-weight: 600;">allstatepavenow.com</a>
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`;

  const [notificationSent] = await Promise.all([
    sendEmail({
      from: `All State Paving Website <${FROM_ADDRESS}>`,
      to: [CLIENT_EMAIL],
      bcc: [BCC_EMAIL],
      reply_to: email,
      subject: `New Project Inquiry: ${full_name}`,
      html: htmlBody,
    }),
    // Auto-reply is best-effort; it never fails the request.
    sendEmail({
      from: `All State Paving <${FROM_ADDRESS}>`,
      to: [email],
      bcc: [BCC_EMAIL],
      reply_to: CLIENT_EMAIL,
      subject: "We've received your quote request - All State Paving",
      html: autoResponderHtml,
    }),
    forwardToDashboard(
      { name: full_name, phone, email, service: service_type, message },
      request.headers.get("referer") ?? "",
    ),
  ]);

  if (!notificationSent) {
    return Response.json({ error: "Something went wrong. Please call us directly." }, { status: 502 });
  }

  return Response.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
