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
            Start with the Wealth Blueprint — a money coaching and education framework — then access the Portal tools for ongoing learning. General education only — not financial advice, financial planning, or product recommendations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Wealth Blueprint */}
            <div className="surface p-6 md:p-8 relative flex flex-col">
              <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-gold-500 text-navy-900 px-2.5 py-1 rounded-md">
                Start Here
              </span>
              <h2 className="text-2xl font-bold text-navy-900 mb-1 pr-20">Wealth Blueprint</h2>
              <p className="text-sm text-charcoal-600 mb-5">Money coaching &amp; education framework — your learning roadmap</p>
              <div className="mb-6">
                <span className="text-base text-charcoal-600 font-medium">From </span>
                <span className="text-4xl font-bold text-navy-900">$1,250</span>
              </div>
              <ul className="space-y-2.5 mb-8 text-charcoal-700 text-sm md:text-base flex-1">
                {["2-meeting structure", "Learning roadmap & education framework summary", "Complete wealth-education framework", "Educational automation concepts overview", "Mindset & psychology guidance", "Step-by-step learning clarity", "General money principles you can apply"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold shrink-0" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Book a Call
              </Link>
            </div>

            {/* Portal Membership */}
            <div className="surface p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-navy-900 mb-1">Portal Membership</h2>
              <p className="text-sm text-teal-700 font-medium mb-5">Available after Wealth Blueprint</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy-900">$49</span>
                <span className="text-charcoal-600 text-base">/month</span>
              </div>
              <ul className="space-y-2.5 mb-8 text-charcoal-700 text-sm md:text-base flex-1">
                {["Access to all wealth tools", "Ultimate Target calculator", "Investment Educator", "Freedom Scorecard", "Lifespan tool", "Future tools & updates", "Ongoing tracking & support"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold shrink-0" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading || !hasClerk}
                className="btn-primary w-full bg-teal-700 hover:bg-teal-800"
                title="Available after completing Wealth Blueprint"
              >
                {loading ? "Processing..." : hasClerk ? "Available After Blueprint" : "Configure Auth First"}
              </button>
            </div>

            {/* Coaching Packages */}
            <div className="surface p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-navy-900 mb-1">Coaching Packages</h2>
              <p className="text-sm text-charcoal-600 mb-5">Ongoing support &amp; guidance</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy-900">Custom</span>
                <span className="text-charcoal-600 text-base"> pricing</span>
              </div>
              <ul className="space-y-2.5 mb-8 text-charcoal-700 text-sm md:text-base flex-1">
                {["Monthly or quarterly check-ins", "Educational portfolio concept discussions", "Concept refreshers (education)", "Accountability support", "General market context (education)", "Flexible scheduling", "Email support"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-navy-700 font-bold shrink-0" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-50/60 border-t border-charcoal-100">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto divide-y divide-charcoal-200">
            {[
              {
                q: "Can I cancel my Portal subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              },
              {
                q: "What's included in the Wealth Blueprint?",
                a: "The Wealth Blueprint includes two meetings, a money coaching and education framework with a learning roadmap summary, educational automation concepts, mindset guidance, and clarity on how investing works in general. General education only — not financial advice, financial planning, or product recommendations.",
              },
              {
                q: "Do I need the Portal to get the Wealth Blueprint?",
                a: "No, the Wealth Blueprint is a standalone service. However, many clients find the Portal tools valuable for ongoing learning and understanding wealth-building concepts. All tools are for education only — not financial advice.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-5 first:pt-0">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
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
