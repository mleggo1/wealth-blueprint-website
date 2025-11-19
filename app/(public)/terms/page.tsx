export default function Terms() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-2 text-2xl mb-4">Agreement to Terms</h2>
                <p className="text-body">
                  By accessing and using Wealth Blueprint's website and services, you agree to be 
                  bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Services</h2>
                <p className="text-body">
                  Wealth Blueprint provides wealth coaching services, educational content, and access 
                  to financial tools and calculators. Our services are for educational and informational 
                  purposes only and do not constitute financial, investment, or legal advice.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Subscription Terms</h2>
                <p className="text-body mb-4">
                  Portal Membership subscriptions are billed monthly and can be cancelled at any time. 
                  You will continue to have access until the end of your current billing period.
                </p>
                <p className="text-body">
                  Refunds for monthly subscriptions are not provided, but you may cancel at any time 
                  to prevent future charges.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Wealth Blueprint Service</h2>
                <p className="text-body">
                  The Wealth Blueprint is a one-time service that includes personalized coaching and 
                  planning. Specific terms and deliverables will be outlined in your service agreement.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Disclaimer</h2>
                <p className="text-body">
                  The information provided by Wealth Blueprint is for educational purposes only. 
                  Past performance is not indicative of future results. We do not guarantee any 
                  specific investment outcomes. Always consult with qualified professionals before 
                  making financial decisions.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Intellectual Property</h2>
                <p className="text-body">
                  All content, tools, and materials provided by Wealth Blueprint are protected by 
                  intellectual property laws. You may not reproduce, distribute, or create derivative 
                  works without permission.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Limitation of Liability</h2>
                <p className="text-body">
                  Wealth Blueprint shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Changes to Terms</h2>
                <p className="text-body">
                  We reserve the right to modify these terms at any time. Continued use of our 
                  services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Contact</h2>
                <p className="text-body">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="/contact" className="text-navy-800 hover:underline">
                    our contact page
                  </a>
                  .
                </p>
              </section>

              <section>
                <p className="text-sm text-charcoal-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

