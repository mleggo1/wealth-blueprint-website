import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const getStripeCustomerId = async (userId: string): Promise<string | null> => {
  // In a real implementation, you'd fetch this from your database
  // For now, we'll search Stripe customers by email or other identifier
  try {
    const customers = await stripe.customers.list({
      limit: 100,
    });
    // Filter by metadata on the client side since Stripe API doesn't support metadata filter in list
    const customer = customers.data.find(c => c.metadata?.userId === userId);
    return customer?.id || null;
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

