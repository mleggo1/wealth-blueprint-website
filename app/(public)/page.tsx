import Link from "next/link";
import Image from "next/image";
import { wealthTools } from "@/lib/tools";
import WavePattern from "@/components/WavePattern";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-ocean-50 via-white to-white pt-6 pb-12 md:pt-14 md:pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="container-custom relative z-10 w-full max-w-7xl xl:max-w-[1400px]">
          {/* Mobile headline */}
          <div className="mb-5 lg:hidden">
            <h1 className="heading-1 mb-0 text-[1.65rem] leading-[1.2] sm:text-3xl">
              <span className="text-teal-600">Build Clarity.</span><br />
              <span className="text-navy-900">Build Confidence.</span><br />
              <span className="text-teal-600">Build Wealth — Through Education.</span>
            </h1>
            <div className="quote-accent mt-4">
              <p className="text-sm text-charcoal-800 italic font-medium">"The more you learn the more you earn"</p>
              <p className="text-xs text-charcoal-600 mt-0.5">— Warren Buffett</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-start">
            <div className="order-3 lg:order-1 space-y-6 lg:space-y-8">
              {/* Desktop headline */}
              <div className="hidden lg:block">
                <h1 className="heading-1 text-5xl xl:text-6xl leading-[1.08] mb-5">
                  <span className="text-teal-600">Build Clarity.</span><br />
                  <span className="text-navy-900">Build Confidence.</span><br />
                  <span className="text-teal-600">Build Wealth — Through Education.</span>
                </h1>
                <div className="quote-accent">
                  <p className="text-lg text-charcoal-800 italic font-medium">"The more you learn the more you earn"</p>
                  <p className="text-sm text-charcoal-600 mt-1">— Warren Buffett</p>
                </div>
              </div>

              {/* Hook + commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 items-start">
                <div>
                  <p className="text-lg md:text-xl text-charcoal-800 font-semibold leading-snug mb-2">
                    Most people feel lost or overwhelmed with money.
                  </p>
                  <p className="text-sm md:text-base text-charcoal-600 leading-relaxed">
                    I help you understand how wealth is built — simple concepts, no jargon.
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-navy-900 border-l-[3px] border-teal-600 pl-4 py-1">
                  <li className="font-medium">No sales</li>
                  <li className="font-medium">No product recommendations</li>
                  <li className="font-medium">No financial advice</li>
                  <li className="text-charcoal-600 text-xs pt-1">Just education that empowers you.</li>
                </ul>
              </div>

              {/* Client quotes — light list, not heavy cards */}
              <div>
                <p className="text-xs font-semibold text-charcoal-500 mb-3 uppercase tracking-wider">What clients say</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    "Game-changing clarity.",
                    "Simple, automated, aligned.",
                    "I understand long-term wealth.",
                    "Opened my eyes to what's possible.",
                  ].map((quote) => (
                    <p key={quote} className="text-sm text-charcoal-800 italic border-b border-charcoal-100 pb-2">
                      "{quote}"
                    </p>
                  ))}
                </div>
                <Link href="/testimonials" className="inline-flex items-center min-h-[44px] mt-1 text-teal-700 hover:text-teal-800 font-semibold text-sm">
                  All testimonials →
                </Link>
              </div>

              {/* Framework + credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="surface-muted p-4 md:p-5">
                  <p className="text-sm md:text-base text-charcoal-800 leading-relaxed">
                    <span className="font-bold text-navy-900">Wealth Blueprint</span> — money coaching &amp; education framework. Understand your options, learn how investing works, and make clearer decisions for yourself. Not personal financial advice, financial planning, or a recommendation to buy or sell any financial product.
                  </p>
                </div>
                <div className="bg-navy-900 text-white rounded-xl p-4 md:p-5">
                  <p className="text-xs font-semibold text-gold-400 mb-1.5">30 years global experience</p>
                  <p className="text-sm font-medium text-white leading-snug">JPMorgan · Merrill Lynch · Bank of America · Bloomberg</p>
                  <p className="text-xs text-ocean-200 mt-1">Australia, London, New York</p>
                  <p className="text-xs font-semibold text-gold-300 mt-3 pt-3 border-t border-white/15">Simple principles. Decades of experience.</p>
                </div>
              </div>

              <div>
                <Link href="/contact" className="btn-primary w-full sm:w-auto text-base px-6 py-3.5">
                  Start Your Wealth-Education Blueprint →
                </Link>
                <p className="text-xs text-charcoal-500 mt-3 flex flex-wrap gap-x-2 gap-y-1">
                  <span>✓ Free call</span>
                  <span className="text-charcoal-300">·</span>
                  <span>✓ No obligation</span>
                  <span className="text-charcoal-300">·</span>
                  <span>✓ Education only</span>
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-charcoal-100 max-h-[40vh] lg:max-h-none">
                <Image
                  src="/michael-hero.png"
                  alt="Michael Leggo — money coach on the beach"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover object-[28%_42%] sm:object-[35%_45%] lg:object-[center_40%] min-h-[200px] lg:min-h-0"
                  priority
                />
                <div className="absolute top-3 right-3 z-10 max-w-[11rem] sm:max-w-[13rem] lg:top-auto lg:right-auto lg:bottom-5 lg:left-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-charcoal-100">
                    <p className="text-xs sm:text-sm font-bold text-navy-900 leading-snug">30+ years experience</p>
                    <p className="text-[10px] sm:text-[11px] font-medium text-teal-700 mt-0.5 leading-snug">JPMorgan · Merrill · Bloomberg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's In It For You */}
      <section className="section-padding bg-white border-t border-charcoal-100">
        <div className="container-custom max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="heading-2 mb-3 md:mb-4">
              What's In It For <span className="text-teal-600">You?</span>
            </h2>
            <p className="text-body">
              Stop guessing. Start learning. A clear learning roadmap focused on the topics <span className="font-semibold text-navy-900">you</span> want to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Clarity", body: "Understand how investing works and how to make informed decisions. No more confusion." },
              { title: "Confidence", body: "Build confidence for your own decisions. Understand principles behind wealth-building in general." },
              { title: "Freedom", body: "Build wealth that supports the life you want — family, travel, peace of mind." },
            ].map((item) => (
              <div key={item.title} className="md:border-l md:border-charcoal-200 md:pl-6 first:md:border-l-0 first:md:pl-0">
                <h3 className="text-lg md:text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Michael */}
      <section className="section-padding bg-navy-50/50 relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-2 mb-3">Meet Michael — Your Money Coach</h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/michael-profile.png"
                  alt="Michael Leggo"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-sm md:text-base text-charcoal-700 leading-relaxed">
              <p>
                Over <span className="font-semibold text-navy-900">30 years</span> I've built global portfolios across <span className="font-medium text-ocean-800">Australia, London, New York and Bali</span> — learning how wealth is built through simple, consistent principles.
              </p>
              <div className="bg-navy-900 text-white rounded-xl p-4 md:p-5">
                <p className="text-sm font-semibold mb-1">Global Finance</p>
                <p className="text-ocean-100 text-sm">JPMorgan · Merrill Lynch · Bank of America · Bloomberg</p>
                <p className="text-xs text-ocean-300 mt-1">London & New York</p>
              </div>
              <p>
                Real wealth: <span className="font-medium">simple, consistent, low-fee strategies</span>. I teach those principles so you understand money and investing without the stress.
              </p>
              <p className="font-semibold text-navy-900 border-l-[3px] border-gold-500 pl-3">
                Open, friendly, clear — that's how I teach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="heading-2 mb-3">
              What You'll <span className="text-teal-600">Get</span>
            </h2>
            <p className="text-body">
              A learning roadmap aligned with <span className="font-semibold text-navy-900">your</span> questions and topics:
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              "A money coaching and education framework summary",
              "General concepts behind investing, super, ETFs and long-term planning",
              "Educational tools that show how compounding, fees and time work",
              "Clear explanations of investment approaches (not recommendations)",
              "A visual framework to help you make informed decisions",
              "Confidence to take action by understanding how money works",
              "A supportive guide who explains everything in plain English",
              "How digital assets, ETFs, and global markets work — explained simply",
              "Everything in one clear, visual educational plan",
            ].map((text) => (
              <li key={text} className="flex gap-3 text-sm md:text-base text-charcoal-700 leading-snug">
                <span className="text-teal-600 font-bold shrink-0 mt-0.5" aria-hidden>✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-charcoal-50/80 border-y border-charcoal-100">
        <div className="container-custom max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="heading-2 mb-3">How It Works</h2>
            <p className="text-body">A simple, structured education only approach</p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { step: "01", title: "Free Discovery Session", body: "We discuss your goals and questions — to understand what concepts you want clarity on." },
              { step: "02", title: "Wealth-Education Blueprint", body: "A structured education plan: how wealth is built, how investing works, and what principles matter most." },
              { step: "03", title: "Tools & Visualisations", body: 'Interactive calculators for "what-if" scenarios. For learning only — not advice.' },
              { step: "04", title: "Clarity & Confidence", body: "Understand the big picture — make better decisions on your own or with an adviser." },
            ].map((item) => (
              <li key={item.step} className="relative">
                <p className="text-xs font-bold text-teal-600 tracking-wider mb-2">{item.step}</p>
                <h3 className="text-base md:text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tools & Apps */}
      <section id="tools" className="section-padding bg-navy-900 text-white">
        <div className="container-custom max-w-5xl">
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="heading-2 mb-3 text-white">
              Tools & Apps That Make It <span className="text-gold-400">Easy</span>
            </h2>
            <p className="text-sm md:text-base text-ocean-200 leading-relaxed mb-4">
              Educational tools to simplify complex ideas and understand wealth-building.
            </p>
            <p className="text-xs md:text-sm text-ocean-300/90 border border-navy-700 rounded-lg px-4 py-3 max-w-xl mx-auto">
              <strong className="text-gold-400">EDUCATION ONLY — NOT ADVICE</strong>
              <br />
              Concepts only. No product recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {wealthTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-4 md:p-5 rounded-xl border border-navy-700 bg-navy-800/50 hover:border-teal-500/60 hover:bg-navy-800 transition-colors min-h-[44px]"
              >
                <span className="text-2xl md:text-3xl shrink-0" aria-hidden>{tool.icon}</span>
                <span className="min-w-0">
                  <span className="block font-semibold text-white text-base md:text-lg group-hover:text-gold-300 transition-colors">{tool.name}</span>
                  <span className="block text-ocean-200 text-sm mt-1 leading-relaxed">{tool.description}</span>
                  <span className="inline-block text-gold-400 text-xs font-semibold mt-2">Explore →</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-800 to-teal-800 text-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs md:text-sm font-semibold text-gold-300 mb-3 tracking-wide uppercase">
              Ready to transform your future?
            </p>
            <h2 className="heading-2 text-white mb-4">
              Your Path to Freedom Starts <span className="text-gold-400">Here</span>
            </h2>
            <p className="text-base md:text-lg text-ocean-100 mb-8 leading-relaxed">
              Build your Wealth-Education Blueprint — clarity, confidence, and a clear path. No guesswork.
            </p>
            <Link href="/contact" className="btn-gold text-base md:text-lg px-8 py-4 w-full sm:w-auto">
              Start Your Wealth-Education Blueprint →
            </Link>
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mt-10 pt-8 border-t border-ocean-600/80">
              {["Free Discovery Call", "No Obligation", "Clear Next Steps"].map((label) => (
                <div key={label}>
                  <p className="text-teal-300 font-bold mb-1" aria-hidden>✓</p>
                  <p className="text-[11px] sm:text-xs text-ocean-200 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
