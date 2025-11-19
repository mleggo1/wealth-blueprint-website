"use client";

import { useState } from "react";
import Link from "next/link";
import { ClerkWrapper } from "@/components/ClerkWrapper";

// Check if Clerk is configured
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const hasClerk = clerkKey && 
  clerkKey !== "pk_test_placeholder" && 
  !clerkKey.includes("placeholder") &&
  clerkKey.startsWith("pk_");

// Note: Metadata should be in a separate layout or use generateMetadata for client components
// For now, metadata is handled in the root layout

function PricingContent({ isSignedIn = false }: { isSignedIn?: boolean }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isSignedIn) {
      // If Clerk is not configured, just show a message
      if (!hasClerk) {
        alert("Please configure Clerk authentication to enable subscriptions.");
        return;
      }
      // Redirect to sign in
      window.location.href = "/sign-in";
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
        <div className="container-custom">
          <h1 className="heading-1 text-center mb-6">Pricing</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            Choose the plan that works for you. Start with the Portal or get the full Wealth Blueprint experience.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Portal Membership */}
            <div className="bg-white border-2 border-charcoal-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="heading-2 text-2xl mb-4">Portal Membership</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy-900">$49</span>
                <span className="text-charcoal-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Access to all wealth tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Ultimate Target calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Investment Matchmaker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>NetWorth Engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Lifespan tool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Future tools & updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Instant activation</span>
                </li>
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading || !hasClerk}
                className="btn-primary w-full"
              >
                {loading ? "Processing..." : hasClerk ? "Subscribe Now" : "Configure Auth First"}
              </button>
            </div>

            {/* Wealth Blueprint */}
            <div className="bg-gold-50 border-2 border-gold-400 rounded-lg p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h2 className="heading-2 text-2xl mb-4">Wealth Blueprint</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy-900">$2,997</span>
                <span className="text-charcoal-600"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>2-meeting structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Personalised investment plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Complete wealth strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Automation roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Mindset & psychology guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Step-by-step setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Coaching recommendations</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Book a Call
              </Link>
            </div>

            {/* Coaching Packages */}
            <div className="bg-white border-2 border-charcoal-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="heading-2 text-2xl mb-4">Coaching Packages</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy-900">Custom</span>
                <span className="text-charcoal-600"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Monthly or quarterly check-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Portfolio reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Strategic adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Accountability support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Market insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center block">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Can I cancel my Portal subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              },
              {
                q: "What's included in the Wealth Blueprint?",
                a: "The Wealth Blueprint includes two meetings, a complete personalised investment plan, automation roadmap, mindset guidance, and step-by-step setup instructions.",
              },
              {
                q: "Do I need the Portal to get the Wealth Blueprint?",
                a: "No, the Wealth Blueprint is a standalone service. However, many clients find the Portal tools valuable for ongoing tracking and planning.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="heading-3 text-xl mb-3">{faq.q}</h3>
                <p className="text-charcoal-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Export the component, wrapping with ClerkWrapper if Clerk is configured
export default function Pricing() {
  if (hasClerk) {
    return (
      <ClerkWrapper>
        {({ isSignedIn }) => <PricingContent isSignedIn={isSignedIn} />}
      </ClerkWrapper>
    );
  }
  
  return <PricingContent isSignedIn={false} />;
}
