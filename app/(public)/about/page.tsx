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
              <span className="text-gold-500">Build Wealth.</span> <span className="text-navy-900">Live Free.</span>
            </h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg border border-ocean-100">
                <p className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 leading-tight">
                  Hi, I'm Michael — a loving husband, dad, surfer and lifelong investor.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-6">
                  I'm a Perth-based wealth coach and global investor with more than <span className="font-bold text-navy-900">30 years</span> of experience across <span className="font-semibold text-ocean-700">Australia, London, New York and Bali</span>. I help people take control of their money in a simple, open and friendly way — no jargon, no pressure, no confusion.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 font-semibold">
                  Together we'll build your Wealth Blueprint and give you the tools to grow your money with clarity, confidence and ease.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Statue.jpg"
                  alt="Kayaker at sunset with New York City skyline and Statue of Liberty"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Michael */}
      <section className="section-padding bg-gradient-to-b from-navy-50 via-ocean-50 to-white relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-3xl md:text-4xl">Meet Michael — Your Wealth Coach</h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12 border border-charcoal-100">
              <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-6">
                Michael Leggo is a loving husband, dad, surfer and lifelong investor with property and investments across <span className="font-semibold text-ocean-700">Australia, London, New York and Bali</span>.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-charcoal-700 mb-6">
                For more than <span className="font-bold text-navy-900">three decades</span> he's built long-term wealth using simple, structured strategies — the same principles he now teaches every client he works with.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-charcoal-700">
                He coaches in an open, friendly and down-to-earth way, making money easy to understand and even easier to act on. There's no jargon, no pressure and no sales pitch — just practical frameworks that actually work.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="heading-3 text-2xl md:text-3xl mb-8 text-center">Michael helps you:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-ocean-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">💡</div>
                  <p className="text-charcoal-700 text-lg font-semibold">
                    Understand how and why to invest
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">📈</div>
                  <p className="text-charcoal-700 text-lg font-semibold">
                    Build low-fee, long-term ETF & digital asset portfolios
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">⚡</div>
                  <p className="text-charcoal-700 text-lg font-semibold">
                    Put your wealth on autopilot with smart automation
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-navy-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="text-charcoal-700 text-lg font-semibold">
                    Make confident decisions without confusion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-teal-800 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <WavePattern />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-6 text-ocean-100">
                  He's not a financial adviser and he doesn't sell products — he teaches the strategies that have created freedom in his own life and in the lives of the people he mentors.
                </p>
                <p className="text-lg md:text-xl text-ocean-200">
                  Everything is explained clearly and simply so you can build real wealth with certainty and direction.
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
              <h2 className="heading-2 mb-6 text-3xl md:text-4xl">Ready to Build Your Wealth?</h2>
              <p className="text-body mb-8 text-lg md:text-xl text-charcoal-700">
                If you want a smarter, clearer way to build your future, let's talk.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
