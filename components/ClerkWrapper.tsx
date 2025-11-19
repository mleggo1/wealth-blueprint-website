"use client";

import { useUser } from "@clerk/nextjs";
import { ReactNode } from "react";

// Wrapper component that provides Clerk user state
// Only render this when ClerkProvider is present
export function ClerkWrapper({ 
  children 
}: { 
  children: (state: { isSignedIn: boolean; user?: any }) => ReactNode 
}) {
  const { isSignedIn, user } = useUser();
  return <>{children({ isSignedIn, user })}</>;
}

