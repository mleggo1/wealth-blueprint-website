import Stripe from "stripe";

// Lazy initialization - only create Stripe instance when actually needed at runtime
let stripeInstance: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: "2023-10-16",
      typescript: true,
    });
  }
  return stripeInstance;
}

// Export a getter that initializes only when accessed at runtime
// This prevents initialization during build time when env vars may not be available
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const instance = getStripe();
    const value = (instance as any)[prop];
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  }
});

export const getStripeCustomerId = async (userId: string): Promise<string | null> => {
  // In a real implementation, you'd fetch this from your database
  // For now, we'll search Stripe customers by email or other identifier
  try {
    const stripe = getStripe();
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
    const stripe = getStripe();
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

