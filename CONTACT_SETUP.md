# Contact Form Setup Guide

The discovery call form now sends notifications via both **Email** and **SMS** when someone submits a request.

## What's Included

✅ **Phone Number Field** - Added to the contact form  
✅ **Preferred Date & Time** - Date and time picker for call scheduling  
✅ **Email Notifications** - Clean, concise email sent to mleggo1@hotmail.com  
✅ **SMS Notifications** - Sent to +61 428333006  

## Setup Instructions

### 1. Email Setup (Resend)

1. **Sign up for Resend**: Go to https://resend.com and create an account
2. **Get your API Key**: 
   - Go to API Keys in your dashboard
   - Create a new API key
   - Copy the key (starts with `re_`)
3. **Verify your domain** (optional but recommended):
   - Add your domain in Resend dashboard
   - Add the DNS records they provide
   - This allows you to send from your own domain
4. **Add to `.env.local`**:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=Wealth Blueprint <noreply@yourdomain.com>
   CONTACT_EMAIL=mleggo1@hotmail.com
   ```

### 2. SMS Setup (Twilio)

1. **Sign up for Twilio**: Go to https://twilio.com and create an account
2. **Get your credentials**:
   - Account SID (starts with `AC`)
   - Auth Token
   - Both found in your Twilio Console dashboard
3. **Get a phone number**:
   - Go to Phone Numbers in Twilio dashboard
   - Purchase a phone number (or use trial number for testing)
   - Copy the phone number (format: +1234567890)
4. **Add to `.env.local`**:
   ```env
   TWILIO_ACCOUNT_SID=ACyour_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=+1234567890
   CONTACT_PHONE=+61428333006
   ```

### 3. Testing

1. **Test the form**: Go to `/contact` and submit a test message
2. **Check your email**: You should receive an email at mleggo1@hotmail.com
3. **Check your phone**: You should receive an SMS at +61 428333006

## How It Works

When someone submits the discovery call form:

1. **Form validates** all required fields (name, email, phone, message, preferred date, preferred time)
2. **Phone number is formatted** to international format (+61...)
3. **Date and time are formatted** to readable format (e.g., "Monday, 15 January 2024 at 2:30 PM")
4. **Email is sent** to mleggo1@hotmail.com with all form details in a clean, concise format
5. **SMS is sent** to +61 428333006 with a summary including preferred date/time
6. **User sees confirmation** message on the website

## Email Format

The email you receive will be:
- **Clean and concise** layout
- **All details clearly labeled** (Name, Email, Phone, Location, Preferred Date & Time, Message)
- **Clickable links** for email and phone
- **Professional design** matching your brand colors

## Phone Number Formatting

The system automatically formats phone numbers:
- `0428333006` → `+61428333006`
- `04 2833 3006` → `+61428333006`
- `+61 428 333 006` → `+61428333006`

## Troubleshooting

### Email not working?
- Check your Resend API key is correct
- Verify your domain (if using custom domain)
- Check spam folder
- Check Resend dashboard for delivery status

### SMS not working?
- Verify Twilio credentials are correct
- Check you have credits in your Twilio account
- Verify the phone number format is correct
- Check Twilio console for message logs

### Both not working?
- Check all environment variables are set in `.env.local`
- Restart your development server after adding env vars
- Check server logs for error messages

## Cost Considerations

- **Resend**: Free tier includes 3,000 emails/month
- **Twilio**: Pay-as-you-go pricing (approximately $0.0075 per SMS in Australia)

## Production Deployment

When deploying to Vercel:
1. Add all environment variables in Vercel dashboard
2. Make sure `RESEND_API_KEY`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` are set
3. Verify your domain in Resend if using custom domain
4. Test the form after deployment

