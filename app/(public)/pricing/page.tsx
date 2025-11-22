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
            Start with the Wealth Blueprint to create your personalised plan, then access the Portal tools for ongoing tracking and support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gradient-to-b from-white to-ocean-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wealth Blueprint */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-400 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 px-4 py-1 rounded-bl-lg text-sm font-bold">
                Start Here
              </div>
              <div className="mt-6">
                <h2 className="heading-2 text-3xl mb-2">Wealth Blueprint</h2>
                <p className="text-sm text-charcoal-600 mb-6">Your personalised financial roadmap</p>
                <div className="mb-8">
                  <span className="text-lg md:text-xl text-charcoal-700 font-semibold">From </span>
                  <span className="text-5xl font-bold text-navy-900">$1,250</span>
                </div>
                <ul className="space-y-4 mb-8 text-charcoal-700">
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">2-meeting structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Personalised investment plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Complete wealth strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Automation roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Mindset & psychology guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Step-by-step setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-lg">Coaching recommendations</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary w-full text-center block text-lg py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Portal Membership */}
            <div className="bg-gradient-to-br from-ocean-50 to-teal-50 border-2 border-ocean-300 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] relative">
              <div className="mb-2">
                <h2 className="heading-2 text-3xl mb-2">Portal Membership</h2>
                <p className="text-sm text-teal-700 font-semibold mb-4">Available after Wealth Blueprint</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-navy-900">$49</span>
                <span className="text-charcoal-600 text-xl">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Access to all wealth tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Ultimate Target calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Investment Matchmaker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">NetWorth Engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Lifespan tool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Future tools & updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Ongoing tracking & support</span>
                </li>
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading || !hasClerk}
                className="btn-primary w-full text-lg py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all bg-teal-600 hover:bg-teal-700"
                title="Available after completing Wealth Blueprint"
              >
                {loading ? "Processing..." : hasClerk ? "Available After Blueprint" : "Configure Auth First"}
              </button>
            </div>

            {/* Coaching Packages */}
            <div className="bg-gradient-to-br from-navy-50 to-charcoal-50 border-2 border-navy-300 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02]">
              <h2 className="heading-2 text-3xl mb-2">Coaching Packages</h2>
              <p className="text-sm text-charcoal-600 mb-6">Ongoing support & guidance</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-navy-900">Custom</span>
                <span className="text-charcoal-600 text-xl"> pricing</span>
              </div>
              <ul className="space-y-4 mb-8 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Monthly or quarterly check-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Portfolio reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Strategic adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Accountability support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Market insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-lg">Email support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center block text-lg py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
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
