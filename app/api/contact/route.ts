import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

// Initialize Resend for email
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Initialize Twilio for SMS
const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, location, preferredDate, preferredTime } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format date and time
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-AU', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    const formatTime = (timeString: string) => {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    const formattedDate = formatDate(preferredDate);
    const formattedTime = formatTime(preferredTime);
    const preferredDateTime = `${formattedDate} at ${formattedTime}`;

    // Format phone number for SMS (ensure it has country code)
    let formattedPhone = phone.trim();
    if (!formattedPhone.startsWith("+")) {
      // If it starts with 0, replace with +61
      if (formattedPhone.startsWith("0")) {
        formattedPhone = "+61" + formattedPhone.substring(1);
      } else if (formattedPhone.startsWith("61")) {
        formattedPhone = "+" + formattedPhone;
      } else {
        // Assume it's Australian if no country code
        formattedPhone = "+61" + formattedPhone.replace(/^0/, "");
      }
    }
    // Remove spaces and non-numeric characters except +
    formattedPhone = formattedPhone.replace(/[^\d+]/g, "");

    // Email content - Clean and concise
    const emailSubject = `Discovery Call Request: ${name}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: #102a43; color: white; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 32px 24px; }
            .info-grid { display: grid; gap: 16px; margin-bottom: 24px; }
            .info-item { padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
            .info-item:last-child { border-bottom: none; }
            .label { font-weight: 600; color: #102a43; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { color: #1f2937; font-size: 15px; }
            .value a { color: #2563eb; text-decoration: none; }
            .value a:hover { text-decoration: underline; }
            .highlight-box { background: #fffbeb; border-left: 4px solid #ffc500; padding: 16px; margin: 24px 0; border-radius: 4px; }
            .highlight-label { font-weight: 600; color: #102a43; margin-bottom: 8px; font-size: 14px; }
            .highlight-value { color: #1f2937; font-size: 16px; }
            .message-box { background: #f9fafb; padding: 16px; border-radius: 4px; margin-top: 8px; white-space: pre-wrap; }
            .footer { background: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Discovery Call Request</h1>
            </div>
            <div class="content">
              <div class="info-grid">
                <div class="info-item">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="info-item">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="info-item">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${formattedPhone}">${formattedPhone}</a></div>
                </div>
                ${location ? `
                <div class="info-item">
                  <div class="label">Location</div>
                  <div class="value">${location}</div>
                </div>
                ` : ""}
                <div class="info-item">
                  <div class="label">Preferred Date & Time</div>
                  <div class="value">${preferredDateTime}</div>
                </div>
              </div>
              
              <div class="highlight-box">
                <div class="highlight-label">Message</div>
                <div class="message-box">${message.replace(/\n/g, "\n")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from your Wealth Blueprint website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `NEW DISCOVERY CALL REQUEST

Name: ${name}
Email: ${email}
Phone: ${formattedPhone}
${location ? `Location: ${location}` : ""}
Preferred Date & Time: ${preferredDateTime}

Message:
${message}
    `;

    // Send email
    let emailSent = false;
    if (resend && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Wealth Blueprint <noreply@wealthblueprint.com>",
          to: process.env.CONTACT_EMAIL, // mleggo1@hotmail.com
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        });
        emailSent = true;
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        // Continue even if email fails
      }
    }

    // Send SMS
    let smsSent = false;
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER && process.env.CONTACT_PHONE) {
      try {
        // Format SMS with title and all details
        const smsMessage = `WEALTH BLUEPRINT CUSTOMER

Name: ${name}
Email: ${email}
Phone: ${formattedPhone}
${location ? `Location: ${location}\n` : ""}Preferred: ${preferredDateTime}

Message: ${message}`;
        
        await twilioClient.messages.create({
          body: smsMessage,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.CONTACT_PHONE, // +61 428333006
        });
        smsSent = true;
      } catch (smsError: any) {
        console.error("Error sending SMS:", smsError);
        // Continue even if SMS fails
      }
    }

    // Return success even if one notification method fails
    return NextResponse.json({
      success: true,
      emailSent,
      smsSent,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}

