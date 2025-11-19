# Wealth Blueprint Website

A premium wealth coaching website with member portal for accessing wealth tools and calculators.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Clerk (Authentication)
- Stripe (Subscriptions)
- Vercel (Hosting)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...  # Your monthly subscription price ID

# App URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Tool URLs (update these with your actual Vercel app URLs)
NEXT_PUBLIC_ULTIMATE_TARGET_URL=https://ultimate-target.vercel.app
NEXT_PUBLIC_INVESTMENT_MATCHMAKER_URL=https://investment-matchmaker.vercel.app
NEXT_PUBLIC_NETWORTH_ENGINE_URL=https://networth-engine.vercel.app
NEXT_PUBLIC_LIFESPAN_URL=https://lifespan.vercel.app

# Contact Form Notifications
CONTACT_EMAIL=mleggo1@hotmail.com
CONTACT_PHONE=+61428333006

# Email (Resend) - Get API key from https://resend.com
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Wealth Blueprint <noreply@yourdomain.com>

# SMS (Twilio) - Get credentials from https://twilio.com
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1234567890  # Your Twilio phone number
```

**Getting your keys:**
- Clerk: Sign up at https://clerk.com and create a new application
- Stripe: Sign up at https://stripe.com, get your API keys from the dashboard, and create a product/price for the monthly subscription
- Resend (Email): Sign up at https://resend.com, get your API key, and verify your domain
- Twilio (SMS): Sign up at https://twilio.com, get your Account SID, Auth Token, and purchase a phone number
- Tool URLs: Update these with your actual Vercel-deployed tool URLs

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

- `app/(public)/` - Public pages (Home, About, Services, Pricing, Contact)
- `app/(protected)/` - Protected portal pages
- `components/` - Reusable components
- `lib/` - Utilities and configurations

## Deployment

Deploy to Vercel with one click. Make sure to add all environment variables in Vercel dashboard.

