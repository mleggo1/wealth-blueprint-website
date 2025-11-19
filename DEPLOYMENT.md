# Deployment Guide - Wealth Blueprint Website

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Before deploying, ensure you have all required environment variables configured in your Vercel project:

#### Clerk Setup
1. Sign up at https://clerk.com
2. Create a new application
3. Copy your publishable key and secret key
4. Add to Vercel environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

#### Stripe Setup
1. Sign up at https://stripe.com
2. Get your API keys from the dashboard (use test keys for development)
3. Create a Product and Price for your monthly subscription
4. Copy the Price ID (starts with `price_`)
5. Set up webhook endpoint in Stripe dashboard:
   - URL: `https://your-domain.com/api/webhooks/stripe`
   - Events to listen for:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
6. Copy the webhook signing secret
7. Add to Vercel environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `STRIPE_PRICE_ID`

#### App Configuration
- `NEXT_PUBLIC_APP_URL` - Your production URL (e.g., `https://wealthblueprint.com`)
- Tool URLs - Update with your actual Vercel app URLs:
  - `NEXT_PUBLIC_ULTIMATE_TARGET_URL`
  - `NEXT_PUBLIC_INVESTMENT_MATCHMAKER_URL`
  - `NEXT_PUBLIC_NETWORTH_ENGINE_URL`
  - `NEXT_PUBLIC_LIFESPAN_URL`

### 2. Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy

### 3. Post-Deployment

1. Update Stripe webhook URL to your production domain
2. Test the checkout flow
3. Test portal access with a subscription
4. Verify all tool links work correctly

## Important Notes

- The subscription status check currently queries Stripe directly. For production, consider caching this or storing subscription status in a database.
- Update tool URLs in `lib/tools.ts` or via environment variables
- Customize pricing in `/pricing` page
- Update contact form to integrate with your email service or CRM

## Customization

### Updating Tool URLs
Edit `lib/tools.ts` or update environment variables.

### Changing Colors/Branding
Edit `tailwind.config.ts` and `app/globals.css`.

### Updating Content
All page content is in the respective page files under `app/(public)/`.

