import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";

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
          <h1 className="heading-1 text-center mb-6">About Michael Leggo</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            Global investor with over 30 years of experience across Australia, London, New York and beyond.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-body mb-6 text-xl leading-relaxed">
                Michael helps people understand the <strong>why</strong> and the <strong>how</strong> of building real, long-term wealth — in a simple, practical way. His coaching gives you clarity, confidence and a clear roadmap so you can make smarter decisions and build assets that support the life you want.
              </p>
              <p className="text-body mb-6 text-xl leading-relaxed">
                A surf-loving dad, husband and property owner, he believes wealth should feel empowering, not complicated — and that anyone can create lasting financial freedom with the right guidance.
              </p>
              <p className="text-body text-xl leading-relaxed">
                If you want a straightforward, proven approach to building wealth, Michael's here to guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Global Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🇦🇺</div>
                <h3 className="heading-3 text-xl mb-3">Australia</h3>
                <p className="text-charcoal-600">
                  Property investment, local markets, and wealth building strategies
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🇬🇧</div>
                <h3 className="heading-3 text-xl mb-3">London</h3>
                <p className="text-charcoal-600">
                  International finance experience and global market insights
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🇺🇸</div>
                <h3 className="heading-3 text-xl mb-3">New York</h3>
                <p className="text-charcoal-600">
                  Wall Street experience and sophisticated investment strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">The Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-charcoal-200 rounded-lg">
                <h3 className="heading-3 text-xl mb-3">Simple & Practical</h3>
                <p className="text-charcoal-600">
                  No jargon, no complexity. Just clear, actionable guidance that makes sense.
                </p>
              </div>
              <div className="p-6 border border-charcoal-200 rounded-lg">
                <h3 className="heading-3 text-xl mb-3">Clarity & Confidence</h3>
                <p className="text-charcoal-600">
                  Understand the why behind every decision, so you can invest with confidence.
                </p>
              </div>
              <div className="p-6 border border-charcoal-200 rounded-lg">
                <h3 className="heading-3 text-xl mb-3">Real Wealth Building</h3>
                <p className="text-charcoal-600">
                  Focus on building assets that support the life you want, not just numbers on a screen.
                </p>
              </div>
              <div className="p-6 border border-charcoal-200 rounded-lg">
                <h3 className="heading-3 text-xl mb-3">Lasting Freedom</h3>
                <p className="text-charcoal-600">
                  Create financial freedom that lasts — with the right guidance, anyone can do it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-teal-800 text-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">Wealth by Design</h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Michael believes wealth should feel empowering, not complicated. As a surf-loving dad, husband, and property owner, he's built a life that combines financial freedom with the things that matter most — family, adventure, and the freedom to live on your own terms.
            </p>
            <p className="text-lg text-charcoal-300">
              This is wealth by design — intentional, strategic, and built to support the life you want to live.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Ready to Build Your Wealth?</h2>
            <p className="text-body mb-8">
              If you want a straightforward, proven approach to building wealth, let's talk.
            </p>
            <a href="/contact" className="btn-primary">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
