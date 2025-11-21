import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Wealth Blueprint",
  description: "Learn about Michael Leggo - global investor with over 30 years of experience. Helping people build real, long-term wealth with clarity, confidence and a clear roadmap.",
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
                <div className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  👋 Meet Your Wealth Coach
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                  I am Michael — a loving husband, dad, surfer and lifelong investor.
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed text-charcoal-700 mb-8 font-medium">
                  I help people take control of their money in a simple, friendly and down-to-earth way. No jargon. No pressure. No confusion.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gold-500">
                  <p className="text-lg text-charcoal-700 mb-0">
                    <span className="font-bold text-navy-900">30+ years</span> of global experience • <span className="font-bold text-navy-900">JPMorgan, Merrill Lynch, Bloomberg</span> • Simple strategies that work
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent z-10"></div>
                <Image
                  src="/Statue.jpg"
                  alt="Kayaker at sunset with New York City skyline and Statue of Liberty"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's In It For You */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl">
              What's In It For <span className="text-teal-500">You</span>?
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Stop guessing. Start building. Get strategies that have worked for <span className="font-bold text-navy-900">30+ years</span> across <span className="font-bold text-navy-900">4 continents</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-ocean-200 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="heading-3 text-xl mb-3">Clarity</h3>
              <p className="text-charcoal-700">
                Know exactly what to invest in, why, and how long. No more confusion.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 shadow-lg border border-gold-200 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="heading-3 text-xl mb-3">Confidence</h3>
              <p className="text-charcoal-700">
                Make decisions with certainty. You'll understand the why behind every strategy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-8 shadow-lg border border-navy-200 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="heading-3 text-xl mb-3">Freedom</h3>
              <p className="text-charcoal-700">
                Build wealth that supports the life you want — family, travel, purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-ocean-50 rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="heading-3 text-xl mb-3">Global Experience</h3>
              <p className="text-charcoal-700">
                Strategies proven across Australia, London, New York, and Bali.
              </p>
            </div>
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
              {/* Headshot Image */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-ocean-200 to-ocean-300 rounded-full shadow-2xl border-4 border-white flex items-center justify-center">
                  <Image
                    src="/MJL Profile 1.JPG"
                    alt="Michael Leggo"
                    width={320}
                    height={320}
                    className="rounded-full object-cover w-full h-full relative z-10"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-6">
                    Over the past <span className="font-bold text-navy-900">30 years</span>, I've built global property portfolios and long-term investment strategies across <span className="font-semibold text-ocean-700">Australia, London, New York and Bali</span> — all designed with one goal in mind: <span className="font-bold text-gold-600">financial freedom by design, not by default</span>.
                  </p>
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-xl p-6 my-6">
                    <p className="text-lg mb-3 font-semibold">🏦 Global Finance Experience:</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <span className="text-gold-400 mr-2">✓</span>
                        <span className="text-ocean-100">JPMorgan</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gold-400 mr-2">✓</span>
                        <span className="text-ocean-100">Merrill Lynch</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gold-400 mr-2">✓</span>
                        <span className="text-ocean-100">Bank of America</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gold-400 mr-2">✓</span>
                        <span className="text-ocean-100">Bloomberg</span>
                      </div>
                    </div>
                    <p className="text-sm text-ocean-200 mt-3">London & New York</p>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-4">
                    That experience taught me how real wealth is built: <span className="font-semibold text-navy-900">simple, consistent, low-fee strategies</span> that work anywhere in the world.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal-700">
                    Now I bring those principles to individuals and families — helping them understand money, invest with clarity, and build multi-generational wealth without the stress.
                  </p>
                  <div className="mt-6 p-4 bg-gold-50 rounded-lg border-l-4 border-gold-500">
                    <p className="text-lg font-semibold text-navy-900">
                      Open, friendly, clear — that's how I coach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Help You With */}
            <div className="mb-8">
              <h3 className="heading-3 text-3xl md:text-4xl mb-10 text-center">What I Help You With</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-ocean-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Understand How & Why</h4>
                  <p className="text-charcoal-700 text-lg">
                    Learn the principles behind every investment decision, so you can invest with confidence.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Build Smart Portfolios</h4>
                  <p className="text-charcoal-700 text-lg">
                    Create low-fee, long-term ETF & digital asset portfolios that actually work.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Automate Your Wealth</h4>
                  <p className="text-charcoal-700 text-lg">
                    Put your wealth on autopilot with smart automation that works while you sleep.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-navy-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Make Confident Decisions</h4>
                  <p className="text-charcoal-700 text-lg">
                    Eliminate confusion and make decisions with clarity and certainty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Promise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-teal-800 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <WavePattern />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">My Promise to You</h3>
                <p className="text-xl md:text-2xl leading-relaxed mb-6 text-ocean-100">
                  I'm not a financial adviser and I don't sell products. I teach the <span className="font-semibold text-gold-400">strategies that have created freedom</span> in my own life and in the lives of the people I mentor.
                </p>
                <p className="text-lg md:text-xl text-ocean-200">
                  Everything is explained clearly and simply so you can build real wealth with <span className="font-semibold">certainty and direction</span> — no guesswork, no confusion, just clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gold-50 via-gold-100 to-ocean-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gold-200">
              <div className="inline-block bg-gold-100 text-gold-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-gold-300">
                🚀 Ready to Transform Your Financial Future?
              </div>
              <h2 className="heading-2 mb-6 text-3xl md:text-4xl">Your Path to Freedom Starts Here</h2>
              <p className="text-body mb-8 text-lg md:text-xl text-charcoal-700">
                Let's build your Wealth Blueprint together — and set you up for the next 30 years. No guesswork. No confusion. Just clarity, confidence, and a clear path forward.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-10 py-5 inline-block font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Start Your Wealth Blueprint →
              </Link>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-charcoal-200">
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-sm text-charcoal-600">Free Call</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-sm text-charcoal-600">No Obligation</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-sm text-charcoal-600">Clear Next Steps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
