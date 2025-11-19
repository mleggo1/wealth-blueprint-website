import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20.acacia",
  typescript: true,
});

export const getStripeCustomerId = async (userId: string): Promise<string | null> => {
  // In a real implementation, you'd fetch this from your database
  // For now, we'll search Stripe customers by metadata
  try {
    const customers = await stripe.customers.list({
      limit: 100,
      metadata: { userId },
    });
    return customers.data[0]?.id || null;
  } catch (error) {
    console.error("Error fetching Stripe customer:", error);
    return null;
  }
};

export const checkSubscriptionStatus = async (userId: string): Promise<boolean> => {
  try {
    const customerId = await getStripeCustomerId(userId);
    if (!customerId) return false;

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });

    return subscriptions.data.length > 0;
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return false;
  }
};

