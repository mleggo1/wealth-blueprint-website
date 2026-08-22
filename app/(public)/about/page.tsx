import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Wealth Blueprint",
  description: "Learn about Michael Leggo — money coaching and financial education. 30+ years of global experience. General education only — not financial advice.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-5xl md:text-6xl lg:text-7xl">
              <span className="text-teal-500">Build Wealth.</span> <span className="text-navy-900">Live Free.</span>
            </h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gradient-to-br from-white via-ocean-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-sm font-semibold text-teal-700 mb-4 tracking-wide uppercase">Meet your money coach</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-5 leading-tight">
                  I am Michael — a loving husband, dad, surfer and lifelong investor.
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-6">
                  I help people understand money in a simple, friendly and down-to-earth way. No jargon. No pressure. No confusion. Education only — no financial advice.
                </p>
                <p className="text-base text-charcoal-700 border-l-[3px] border-gold-500 pl-4">
                  <span className="font-semibold text-navy-900">30+ years</span> of global experience · <span className="font-semibold text-navy-900">JPMorgan, Merrill Lynch, Bloomberg</span> · Simple principles from real-world experience
                </p>
              </div>
              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-md border border-charcoal-100">
                <Image
                  src="/Statue.jpg"
                  alt="Kayaker at sunset with New York City skyline and Statue of Liberty"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's In It For You */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="heading-2 mb-4">
              What's In It For <span className="text-teal-600">You?</span>
            </h2>
            <p className="text-body">
              Stop guessing. Start building. Get strategies that have worked for <span className="font-semibold text-navy-900">30+ years</span> across <span className="font-semibold text-navy-900">4 continents</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            {[
              { title: "Clarity", body: "Understand how different investment approaches work, why they matter, and how to make informed decisions. No more confusion." },
              { title: "Confidence", body: "Make decisions with certainty. You'll understand the why behind every strategy." },
              { title: "Freedom", body: "Build wealth that supports the life you want — family, travel, purpose." },
              { title: "Global Experience", body: "Strategies proven across Australia, London, New York, and Bali." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story & Credentials */}
      <section className="section-padding bg-gradient-to-b from-navy-50 via-ocean-50 to-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-4xl md:text-5xl">
                From Wall Street to <span className="text-teal-500">Your Street</span>
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="/michael-profile.png"
                    alt="Michael Leggo"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-4 text-base md:text-lg text-charcoal-700 leading-relaxed">
                <p>
                  Over the past <span className="font-semibold text-navy-900">30 years</span>, I've built global property portfolios and long-term investment strategies across <span className="font-medium text-ocean-800">Australia, London, New York and Bali</span> — all designed with one goal in mind: <span className="font-semibold text-navy-900">financial freedom by design, not by default</span>.
                </p>
                <div className="bg-navy-900 text-white rounded-xl p-5">
                  <p className="text-sm font-semibold mb-2">Global Finance Experience</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-ocean-100">
                    {["JPMorgan", "Merrill Lynch", "Bank of America", "Bloomberg"].map((firm) => (
                      <span key={firm}>{firm}</span>
                    ))}
                  </div>
                  <p className="text-xs text-ocean-300 mt-2">London & New York</p>
                </div>
                <p>
                  That experience taught me how real wealth is built: <span className="font-medium text-navy-900">simple, consistent, low-fee strategies</span> that work anywhere in the world.
                </p>
                <p>
                  Now I teach those principles through education — helping individuals and families understand money, learn how investing works, and build their financial literacy without the stress.
                </p>
                <p className="font-semibold text-navy-900 border-l-[3px] border-gold-500 pl-3">
                  Open, friendly, clear — that's how I coach.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 text-center">What I Help You With</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Understand How & Why", body: "Learn the principles behind different investment approaches, so you can make informed decisions with confidence." },
                  { title: "Learn Portfolio Concepts (Education)", body: "Understand in general how low-fee, long-term ETF and digital-asset approaches are often discussed — educational examples only; not recommendations for you." },
                  { title: "Learn About Automation", body: "Understand how automation concepts work — so you can apply them in your own way." },
                  { title: "Build Confidence for Your Own Decisions", body: "Reduce confusion and move forward with clarity — you stay in charge of any decisions, including with a licensed adviser if you choose." },
                ].map((item) => (
                  <div key={item.title} className="border-t border-charcoal-200 pt-4">
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h4>
                    <p className="text-charcoal-600 text-sm md:text-base leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">My Promise to You</h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-ocean-100">
              I'm not a financial adviser and I don't sell products. I teach the <span className="font-semibold text-gold-400">educational concepts and principles</span> that have helped me and the people I mentor understand how wealth is built.
            </p>
            <p className="text-sm md:text-base text-ocean-200 leading-relaxed">
              Everything is explained clearly and simply so you can understand wealth-building with <span className="font-medium">certainty and direction</span> — no guesswork, no confusion, just clarity. Education only — not financial advice.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-charcoal-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-3">Ready to transform your financial future?</p>
            <h2 className="heading-2 mb-4">Your Path to Freedom Starts Here</h2>
            <p className="text-body mb-8">
              Let's build your Wealth-Education Blueprint together — and help you understand how to build wealth for the next 30 years. No guesswork. No confusion. Just clarity, confidence, and a clear educational path forward.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Wealth-Education Blueprint →
            </Link>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mt-8 pt-6 border-t border-charcoal-200">
              {["Free Call", "No Obligation", "Clear Next Steps"].map((label) => (
                <div key={label}>
                  <p className="text-teal-600 font-bold mb-0.5" aria-hidden>✓</p>
                  <p className="text-xs text-charcoal-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
