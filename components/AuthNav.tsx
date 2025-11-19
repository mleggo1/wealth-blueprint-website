"use client";

import Link from "next/link";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

export default function AuthNav({ mobile = false }: { mobile?: boolean }) {
  const { isSignedIn } = useUser();

  if (mobile) {
    return (
      <>
        {isSignedIn && (
          <Link
            href="/portal"
            className="text-charcoal-700 hover:text-navy-900 font-medium"
          >
            Portal
          </Link>
        )}
        {isSignedIn ? (
          <div className="flex justify-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="text-charcoal-700 hover:text-navy-900 font-medium w-full text-left">
              Sign In
            </button>
          </SignInButton>
        )}
      </>
    );
  }

  return (
    <>
      {isSignedIn && (
        <Link
          href="/portal"
          className="text-charcoal-700 hover:text-navy-900 font-medium transition-colors"
        >
          Portal
        </Link>
      )}
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton mode="modal">
          <button className="text-charcoal-700 hover:text-navy-900 font-medium">
            Sign In
          </button>
        </SignInButton>
      )}
    </>
  );
}

