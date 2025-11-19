import Link from "next/link";
import { wealthTools } from "@/lib/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wealth Blueprint",
  description: "Comprehensive wealth coaching services including Wealth Blueprint, ongoing coaching, and access to powerful wealth-building tools and calculators.",
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
        <div className="container-custom">
          <h1 className="heading-1 text-center mb-6">Services</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            Comprehensive wealth coaching and tools to help you build lasting financial freedom.
          </p>
        </div>
      </section>

      {/* Wealth Blueprint */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-8 mb-8">
              <h2 className="heading-2 mb-4">Wealth Blueprint</h2>
              <p className="text-body mb-6">
                Your core offer — a comprehensive, personalised investment plan tailored to your life, 
                goals, and timeline. This is a 2-meeting structure that delivers clarity, strategy, 
                execution, and momentum.
              </p>
              <h3 className="heading-3 text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Confirm your investment options — what to buy and why</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Your Ultimate Target — what you can safely spend in retirement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>The Power of Compounding — why time in the market beats timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Automation & execution roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Psychology & mindset guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Personalised coaching recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <span>Step-by-step setup guide</span>
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
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-body mb-6">
                Monthly or quarterly check-ins to keep you on track, review your portfolio, make 
                strategic adjustments, and provide accountability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="heading-3 text-xl mb-3">What You Get:</h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li>• Portfolio reviews</li>
                    <li>• Strategic adjustments</li>
                    <li>• Accountability check-ins</li>
                    <li>• Market insights</li>
                    <li>• Goal tracking</li>
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
            Subscription gives you access to powerful wealth-building tools and calculators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {wealthTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-charcoal-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="heading-3 text-xl mb-3">{tool.name}</h3>
                <p className="text-charcoal-600 mb-4">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="heading-3 text-xl mb-4 text-center">Portal Benefits</h3>
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

