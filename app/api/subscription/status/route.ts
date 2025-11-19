import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { checkSubscriptionStatus } from "@/lib/stripe";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const active = await checkSubscriptionStatus(user.id);

    return NextResponse.json({ active });
  } catch (error: any) {
    console.error("Error checking subscription status:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

