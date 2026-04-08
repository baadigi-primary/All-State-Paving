export async function POST(request: Request) {
  const { full_name, phone, email, service_type, message } = await request.json();

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

  // Send both emails in parallel
  const mandrillPayloads = [
    {
      key: process.env.MANDRILL_API_KEY,
      message: {
        html: htmlBody,
        subject: `New Project Inquiry: ${full_name}`,
        from_email: "websites@baadigi.com",
        from_name: "All State Paving Website",
        to: [
          { email: "Allstatepavenow@gmail.com", type: "to" },
          { email: "webform@baadigi.com", type: "bcc" },
        ],
        reply_to: email,
      },
    },
    {
      key: process.env.MANDRILL_API_KEY,
      message: {
        html: autoResponderHtml,
        subject: "We've received your quote request - All State Paving",
        from_email: "websites@baadigi.com",
        from_name: "All State Paving",
        to: [
          { email, type: "to" },
          { email: "Allstatepavenow@gmail.com", type: "bcc" },
          { email: "webform@baadigi.com", type: "bcc" },
        ],
      },
    },
  ];

  const results = await Promise.all(
    mandrillPayloads.map((payload) =>
      fetch("https://mandrillapp.com/api/1.0/messages/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    )
  );

  const failed = results.find((r) => !r.ok);
  if (failed) {
    const error = await failed.text();
    console.error("Mandrill error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
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
