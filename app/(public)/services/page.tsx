import Link from "next/link";
import { wealthTools } from "@/lib/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wealth Blueprint",
  description: "Money coaching, the Wealth Blueprint education framework, and educational wealth-building tools. General education only — not financial advice.",
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
        <div className="container-custom">
          <h1 className="heading-1 text-center mb-6">Services</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            Money coaching and financial education to help you understand concepts and build lasting clarity with money. General education only — not financial advice or financial planning.
          </p>
        </div>
      </section>

      {/* Wealth Blueprint */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold-50/80 border border-gold-200 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="heading-2 mb-4 text-2xl md:text-3xl">Wealth Blueprint</h2>
              <p className="text-body mb-6">
                Your core offer — the Wealth Blueprint money coaching and education framework, shaped around the topics you want to learn. 
                This is a 2-meeting structure focused on clarity and educational momentum. General education only — not financial product advice, personal advice, or a financial plan.
              </p>
              <h3 className="heading-3 text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Your investment concepts explained in plain English — not recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Educational tools that show how retirement planning concepts work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>The Power of Compounding — educational concepts about time in the market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Understanding automation concepts — so you can apply them yourself</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Psychology & mindset guidance for learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>General money principles you can apply in your own way</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Step-by-step clarity so you understand how investing works</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/pricing" className="btn-primary">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Coaching */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Ongoing Coaching</h2>
            <div className="surface p-6 md:p-8">
              <p className="text-body mb-6">
                Monthly or quarterly educational check-ins to help you understand progress, review concepts, 
                explore strategic concepts for learning, and provide learning accountability. General education only — not financial advice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="heading-3 text-xl mb-3">What You Get:</h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li>• Educational portfolio concept reviews</li>
                    <li>• Understanding strategic concepts</li>
                    <li>• Learning accountability check-ins</li>
                    <li>• Educational market insights</li>
                    <li>• Goal tracking concepts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-3 text-xl mb-3">Flexibility:</h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li>• Monthly or quarterly options</li>
                    <li>• Flexible scheduling</li>
                    <li>• Email support between sessions</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Tools Portal */}
      <section id="tools" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Wealth Tools Portal Membership</h2>
          <p className="text-center text-body mb-12 max-w-2xl mx-auto">
            Subscription gives you access to powerful educational wealth-building tools and calculators. Education only — not financial advice.
          </p>
          <div className="surface-muted p-4 mb-8 max-w-3xl mx-auto">
            <p className="text-sm text-charcoal-700 text-center">
              <strong className="text-navy-900">EDUCATION TOOLS ONLY — NOT FINANCIAL ADVICE</strong><br />
              These tools illustrate concepts only. They do not recommend products or tell you what to invest in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {wealthTools.map((tool) => (
              <div
                key={tool.id}
                className="surface p-5 md:p-6"
              >
                <div className="text-2xl mb-3" aria-hidden>{tool.icon}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{tool.name}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="surface-muted p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-navy-900 mb-4 text-center">Portal Benefits</h3>
            <ul className="space-y-3 text-charcoal-700">
              <li className="flex items-start">
                <span className="text-gold-600 font-bold mr-3">✓</span>
                <span>Access to all current tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 font-bold mr-3">✓</span>
                <span>Future tools and enhancements</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 font-bold mr-3">✓</span>
                <span>Regular updates and new calculators</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 font-bold mr-3">✓</span>
                <span>Instant activation</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link href="/pricing" className="btn-primary">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

