export default function Privacy() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-2 text-2xl mb-4">Introduction</h2>
                <p className="text-body">
                  Wealth Blueprint ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information 
                  when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Information We Collect</h2>
                <p className="text-body mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-700">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Payment information (processed securely through Stripe)</li>
                  <li>Account credentials and profile information</li>
                  <li>Communications and correspondence</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">How We Use Your Information</h2>
                <p className="text-body mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-700">
                  <li>Provide and improve our services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Send you updates and marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Data Security</h2>
                <p className="text-body">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. However, no method of transmission over the internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Third-Party Services</h2>
                <p className="text-body">
                  We use third-party services including Clerk (authentication) and Stripe (payments). 
                  These services have their own privacy policies governing the use of your information.
                </p>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Your Rights</h2>
                <p className="text-body mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 text-2xl mb-4">Contact Us</h2>
                <p className="text-body">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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

