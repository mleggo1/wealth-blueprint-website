import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Check if Clerk is configured
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const hasValidKey = publishableKey && 
  publishableKey !== "pk_test_placeholder" && 
  !publishableKey.includes("placeholder") &&
  publishableKey.startsWith("pk_");

// Public routes that don't require authentication
const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/contact",
  "/privacy",
  "/terms",
  "/api/webhooks/stripe",
  "/api/contact",
];

export async function middleware(request: NextRequest) {
  // If Clerk is not configured, allow all requests
  if (!hasValidKey) {
    return NextResponse.next();
  }

  // Otherwise, use Clerk middleware
  try {
    const { clerkMiddleware, createRouteMatcher } = await import("@clerk/nextjs/server");
    
    const isPublicRoute = createRouteMatcher(publicRoutes);

    const clerkHandler = clerkMiddleware(async (auth: any) => {
      if (!isPublicRoute(request)) {
        await auth.protect();
      }
    });

    return clerkHandler(request as any, {} as any);
  } catch (error) {
    // If Clerk fails, just continue
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
