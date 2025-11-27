import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Education Only | Wealth Blueprint",
  description: "Wealth Blueprint provides general financial education only. We are not licensed financial advisers and do not provide financial product advice.",
};

export default function EducationOnly() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-5xl md:text-6xl lg:text-7xl">
              Education <span className="text-teal-500">Only</span>
            </h1>
            <p className="text-body text-xl md:text-2xl max-w-3xl mx-auto">
              Clear, transparent information about what we do — and what we don't do.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What We Are */}
            <div className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg border border-ocean-200">
              <h2 className="heading-2 text-3xl md:text-4xl mb-6 text-navy-900">
                What We Are
              </h2>
              <div className="space-y-4 text-lg text-charcoal-700">
                <p>
                  <strong className="text-navy-900">An Educational Service</strong> — We teach general financial concepts, wealth-building principles, and investment fundamentals. Our goal is to help you understand how money works.
                </p>
                <p>
                  <strong className="text-navy-900">A Learning Resource</strong> — We provide tools, calculators, and educational content that illustrate concepts. These are for learning purposes only.
                </p>
                <p>
                  <strong className="text-navy-900">A Supportive Guide</strong> — We explain things in plain English, help you understand different approaches, and support your financial literacy journey.
                </p>
              </div>
            </div>

            {/* What We Are Not */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="heading-2 text-3xl md:text-4xl mb-6 text-gold-400">
                What We Are Not
              </h2>
              <div className="space-y-4 text-lg text-ocean-100">
                <p>
                  <strong className="text-gold-400">Not Licensed Financial Advisers</strong> — We are not authorised under an Australian Financial Services (AFS) Licence to provide personal financial advice on financial products.
                </p>
                <p>
                  <strong className="text-gold-400">Not Product Sellers</strong> — We do not sell financial products, receive commissions, or have any financial incentive to recommend specific investments.
                </p>
                <p>
                  <strong className="text-gold-400">Not Personal Advisers</strong> — We do not provide personalised financial advice, recommendations, or tell you what to buy, sell, or invest in.
                </p>
                <p>
                  <strong className="text-gold-400">Not Guarantee Providers</strong> — We do not promise results, guarantee outcomes, or suggest that any strategy will work for your specific situation.
                </p>
              </div>
            </div>

            {/* What We Teach */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gold-200">
              <h2 className="heading-2 text-3xl md:text-4xl mb-6 text-navy-900">
                What We Teach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-navy-900">General Concepts</h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>How investing works</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Compounding principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Fee structures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Long-term thinking</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-navy-900">Educational Tools</h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Hypothetical calculators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Example scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Conceptual frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-600 mr-2">✓</span>
                      <span>Learning resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We Don't Do */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 md:p-12">
              <h2 className="heading-2 text-3xl md:text-4xl mb-6 text-red-900">
                What We Don't Do
              </h2>
              <div className="space-y-4 text-lg text-charcoal-700">
                <p>
                  <strong className="text-red-900">We don't recommend specific products</strong> — We don't tell you which ETFs, stocks, or investments to buy.
                </p>
                <p>
                  <strong className="text-red-900">We don't design personalised portfolios</strong> — We don't create investment portfolios tailored to your specific situation.
                </p>
                <p>
                  <strong className="text-red-900">We don't provide financial product advice</strong> — We don't advise on whether a particular financial product is suitable for you.
                </p>
                <p>
                  <strong className="text-red-900">We don't make decisions for you</strong> — We help you understand concepts so you can make your own informed decisions, or work with a licensed adviser.
                </p>
              </div>
            </div>

            {/* Your Next Steps */}
            <div className="bg-gradient-to-br from-teal-50 to-ocean-50 rounded-2xl p-8 md:p-12 shadow-lg border border-teal-200">
              <h2 className="heading-2 text-3xl md:text-4xl mb-6 text-navy-900">
                Your Next Steps
              </h2>
              <div className="space-y-4 text-lg text-charcoal-700">
                <p>
                  If you want to learn about wealth-building concepts, understand how investing works, and build your financial literacy — <strong className="text-navy-900">we're here to help through education.</strong>
                </p>
                <p>
                  If you need personalised financial advice, product recommendations, or a tailored investment strategy — <strong className="text-navy-900">we encourage you to seek a licensed financial adviser</strong> who can provide advice specific to your circumstances.
                </p>
                <p className="text-base text-charcoal-600 italic">
                  Many of our clients use our educational services to understand concepts, then work with licensed advisers to implement strategies. Both approaches can work together.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Link href="/contact" className="btn-primary text-lg px-10 py-5 inline-block font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Start Your Educational Journey →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

