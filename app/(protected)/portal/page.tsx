"use client";

import { useEffect, useState } from "react";
import { wealthTools } from "@/lib/tools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ClerkWrapper } from "@/components/ClerkWrapper";

// Check if Clerk is configured
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const hasClerk = clerkKey && 
  clerkKey !== "pk_test_placeholder" && 
  !clerkKey.includes("placeholder") &&
  clerkKey.startsWith("pk_");

function PortalContent({ isSignedIn, user }: { isSignedIn: boolean; user?: any }) {
  const router = useRouter();
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in?redirect=/portal");
      return;
    }

    // Check subscription status
    const checkSubscription = async () => {
      try {
        const response = await fetch("/api/subscription/status");
        const data = await response.json();
        setHasSubscription(data.active);
      } catch (error) {
        console.error("Error checking subscription:", error);
        setHasSubscription(false);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [isSignedIn, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-900 mx-auto mb-4"></div>
          <p className="text-charcoal-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!hasSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
            <h1 className="heading-2 mb-4">Portal Access Required</h1>
            <p className="text-body mb-8">
              You need an active subscription to access the Wealth Tools Portal.
            </p>
            <Link href="/pricing" className="btn-primary">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Welcome Section */}
      <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">
            Welcome to Your Portal, {user?.firstName || "Member"}
          </h1>
          <p className="text-xl text-charcoal-300 max-w-2xl">
            Access your wealth-building tools and calculators. Everything you need to track, plan, and grow your wealth.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">Your Wealth Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wealthTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-charcoal-200 rounded-lg p-8 hover:border-gold-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{tool.icon}</div>
                  <svg
                    className="w-6 h-6 text-charcoal-400 group-hover:text-gold-500 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="heading-3 text-2xl mb-3">{tool.name}</h3>
                <p className="text-charcoal-600">{tool.description}</p>
                <div className="mt-4 text-gold-600 font-semibold group-hover:text-gold-500">
                  Open Tool →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services"
              className="bg-white p-6 rounded-lg border border-charcoal-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="heading-3 text-xl mb-2">Learn More</h3>
              <p className="text-charcoal-600">Explore our services and coaching options</p>
            </Link>
            <Link
              href="/contact"
              className="bg-white p-6 rounded-lg border border-charcoal-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="heading-3 text-xl mb-2">Get Support</h3>
              <p className="text-charcoal-600">Book a call or get in touch</p>
            </Link>
            <Link
              href="/about"
              className="bg-white p-6 rounded-lg border border-charcoal-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="heading-3 text-xl mb-2">About Michael</h3>
              <p className="text-charcoal-600">Learn more about the approach</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Portal() {
  if (!hasClerk) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
            <h1 className="heading-2 mb-4">Clerk Authentication Required</h1>
            <p className="text-body mb-8">
              Please configure Clerk authentication to access the portal.
            </p>
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ClerkWrapper>
      {({ isSignedIn, user }) => {
        return <PortalContent isSignedIn={isSignedIn} user={user} />;
      }}
    </ClerkWrapper>
  );
}
