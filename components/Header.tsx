"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const hasClerk = clerkKey && 
  clerkKey !== "pk_test_placeholder" && 
  !clerkKey.includes("placeholder") &&
  clerkKey.startsWith("pk_");

const AuthNav = hasClerk 
  ? dynamic(() => import("@/components/AuthNav"), { ssr: false })
  : null;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/#tools", label: "Apps" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/education-only", label: "Education Only" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-charcoal-200 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <nav className="container-custom" aria-label="Main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center group rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <span className="relative flex items-baseline">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-5 md:h-6 bg-gradient-to-b from-teal-800 via-teal-600 to-teal-500 rounded-full opacity-70" aria-hidden />
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight pl-2 md:pl-2.5">
                <span className="logo-wealth">Wealth</span>
                <span className="text-navy-900 tracking-tight relative">
                  Blueprint
                  <span className="absolute bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-teal-600/50 via-teal-500/30 to-transparent" aria-hidden />
                </span>
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal-700 hover:text-navy-900 font-medium transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm">
              Book coaching
            </Link>
            {AuthNav && <AuthNav />}
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] -mr-2 rounded-xl text-navy-900 hover:bg-navy-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-charcoal-200 pt-2">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal-800 hover:text-navy-900 font-medium py-3 min-h-[44px] flex items-center border-b border-charcoal-100 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book coaching
              </Link>
              {AuthNav && <div className="mt-3"><AuthNav mobile /></div>}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
