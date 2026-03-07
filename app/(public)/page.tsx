import Link from "next/link";
import Image from "next/image";
import { wealthTools } from "@/lib/tools";
import WavePattern from "@/components/WavePattern";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-50 via-white via-teal-50 to-ocean-100 pt-8 md:pt-16 lg:pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 w-full max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] xl:px-10 2xl:px-12">
          {/* Main Headline + Quote - First on Mobile */}
          <div className="mb-6 lg:hidden">
            <h1 className="heading-1 mb-0 text-3xl md:text-4xl leading-[1.1] font-extrabold">
              <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">Build Clarity.</span><br />
              <span className="text-navy-900 drop-shadow-sm">Build Confidence.</span><br />
              <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">Build Wealth — Through Education.</span>
            </h1>
            <div className="mt-4 pl-4 border-l-4 border-gold-400 bg-gold-50/70 py-3 rounded-r-lg">
              <p className="text-base text-charcoal-800 italic font-semibold">"The more you learn the more you earn"</p>
              <p className="text-sm text-charcoal-600 font-medium mt-0.5">— Warren Buffett</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 2xl:gap-24 items-start">
            {/* Left side - Text Content (broken into visual blocks, two-col where it helps) */}
            <div className="order-3 lg:order-1 space-y-8">
              {/* Block 1: Headline + Quote — intro only */}
              <div className="hidden lg:block">
                <h1 className="heading-1 text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">Build Clarity.</span><br />
                  <span className="text-navy-900 drop-shadow-md">Build Confidence.</span><br />
                  <span className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">Build Wealth — Through Education.</span>
                </h1>
                <div className="relative pl-6 border-l-4 border-gold-400 bg-gradient-to-r from-gold-50/50 to-transparent py-3 rounded-r-lg animate-subtle-pulse">
                  <p className="text-lg text-charcoal-800 italic font-semibold relative z-10">"The more you learn the more you earn"</p>
                  <p className="text-sm text-charcoal-600 font-medium mt-1">— Warren Buffett</p>
                </div>
              </div>

              {/* Block 2: Hook + No sales — two columns on desktop to break the single line */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-xl md:text-2xl text-charcoal-800 font-bold leading-snug mb-2">Most people feel lost or overwhelmed with money.</p>
                  <p className="text-base text-charcoal-700 font-medium">I help you understand how wealth is built — simple concepts, no jargon.</p>
                </div>
                <div className="bg-white/90 border-2 border-teal-200 rounded-2xl p-5 shadow-lg">
                  <p className="text-sm font-bold text-navy-900 mb-1.5 flex items-center"><span className="text-teal-600 mr-2">✓</span> No sales</p>
                  <p className="text-sm font-bold text-navy-900 mb-1.5 flex items-center"><span className="text-teal-600 mr-2">✓</span> No product recommendations</p>
                  <p className="text-sm font-bold text-navy-900 flex items-center"><span className="text-teal-600 mr-2">✓</span> No financial advice</p>
                  <p className="text-xs text-charcoal-600 mt-2 font-medium">Just education that empowers you.</p>
                </div>
              </div>

              {/* Block 3: Client quotes — card grid (clear separation) */}
              <div>
                <p className="text-sm font-bold text-charcoal-600 mb-3 uppercase tracking-wide">What clients say</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-teal-500">
                    <p className="text-charcoal-900 font-semibold italic text-sm">"Game-changing clarity."</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-gold-500">
                    <p className="text-charcoal-900 font-semibold italic text-sm">"Simple, automated, and aligned with my life."</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-ocean-500">
                    <p className="text-charcoal-900 font-semibold italic text-sm">"I finally understand how to build long-term wealth."</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-navy-500">
                    <p className="text-charcoal-900 font-semibold italic text-sm">"It opened my eyes to what's truly possible."</p>
                  </div>
                </div>
                <Link href="/testimonials" className="inline-flex items-center mt-3 text-teal-600 hover:text-teal-700 font-semibold text-sm">
                  Read all testimonials <span className="ml-1">→</span>
                </Link>
              </div>

              {/* Block 4: Wealth Blueprint + Credentials — two columns on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-ocean-50 rounded-2xl p-5 border border-teal-200 shadow-lg">
                  <p className="text-base text-charcoal-900 font-semibold leading-relaxed">
                    The <span className="font-bold text-navy-900">Wealth Blueprint</span> is a personalised financial-education roadmap — how wealth is built, how investing works, without the jargon.
                  </p>
                </div>
                <div className="bg-navy-900 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-sm font-bold text-gold-400 mb-2">30 years global experience</p>
                  <p className="text-sm font-bold text-white">JPMorgan • Merrill Lynch • Bank of America • Bloomberg</p>
                  <p className="text-xs text-ocean-200 mt-1">Australia, London, New York</p>
                  <p className="text-sm font-bold text-gold-300 mt-3 pt-3 border-t border-gold-400/30">Simple strategies. Real results.</p>
                </div>
              </div>

              {/* Block 5: CTA — full width, clear close to intro */}
              <div className="pt-2">
                <Link href="/contact" className="group inline-flex items-center justify-center text-base md:text-lg px-8 py-4 font-bold text-white bg-navy-800 hover:bg-navy-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                  Start Your Wealth-Education Blueprint <span className="ml-2 group-hover:translate-x-1">→</span>
                </Link>
                <p className="text-xs text-charcoal-500 mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>✓ Free discovery call</span><span className="text-charcoal-300">•</span><span>✓ No obligation</span><span className="text-charcoal-300">•</span><span>✓ Education only</span>
                </p>
              </div>
            </div>

            {/* Right side - Image - Enhanced */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-ocean-400 to-teal-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 border-4 border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent z-10"></div>
                  <Image
                    src="/michael-hero.jpg"
                    alt="Michael Leggo with family at Three Sisters, Blue Mountains"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gold-200/50">
                      <p className="text-xs font-bold text-navy-900 text-center">30+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Value Proposition - What's In It For You */}
      <section className="section-padding bg-white">
        <div className="container-custom w-full max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] xl:px-10 2xl:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl">
              What's In It For <span className="text-teal-500">You?</span>
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Stop guessing. Start learning. Get a clear, educational roadmap that helps you understand wealth-building principles — tailored to <span className="font-bold text-navy-900">your</span> learning needs and <span className="font-bold text-navy-900">your</span> questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl xl:max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-ocean-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="heading-3 text-2xl mb-4">Clarity</h3>
              <p className="text-charcoal-700 text-lg">
                Understand how different investment approaches work, why they matter, and how to make informed decisions. No more confusion or analysis paralysis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 shadow-lg border border-gold-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="heading-3 text-2xl mb-4">Confidence</h3>
              <p className="text-charcoal-700 text-lg">
                Make decisions with certainty. You'll understand the principles behind different wealth-building strategies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-8 shadow-lg border border-navy-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="heading-3 text-2xl mb-4">Freedom</h3>
              <p className="text-charcoal-700 text-lg">
                Learn how to build wealth that supports the life you want — family, travel, purpose, peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Michael Section */}
      <section className="section-padding bg-gradient-to-b from-navy-50 via-ocean-50 to-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 text-4xl md:text-5xl">
                Meet Michael — Your Wealth Coach
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
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="prose prose-lg max-w-none text-charcoal-700 leading-relaxed space-y-4">
                    <p className="text-lg">
                      Over the past <span className="font-bold text-navy-900">30 years</span>, I've built global property portfolios and long-term investment strategies across <span className="font-semibold text-ocean-700">Australia, London, New York and Bali</span> — learning how wealth is built through simple, consistent principles.
                    </p>
                    <div className="bg-navy-900 text-white rounded-xl p-6 my-6">
                      <p className="text-lg mb-2 font-semibold">🏦 Global Finance Experience:</p>
                      <p className="text-ocean-100">
                        JPMorgan • Merrill Lynch • Bank of America • Bloomberg
                      </p>
                      <p className="text-sm text-ocean-200 mt-2">London & New York</p>
                    </div>
                    <p className="text-lg">
                      That experience taught me how real wealth is built: <span className="font-semibold">simple, consistent, low-fee strategies</span> that work anywhere in the world.
                    </p>
                    <p className="text-lg">
                      Now I teach those principles through education — helping you understand money, learn how investing works, and build your financial literacy without the stress.
                    </p>
                    <p className="text-lg font-semibold text-navy-900 border-l-4 border-gold-500 pl-4">
                      Open, friendly, clear — that's how I teach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="section-padding bg-gradient-to-b from-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl">
              What You'll <span className="text-teal-500">Get</span>
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              A simple, powerful wealth-education roadmap built entirely around <span className="font-bold text-navy-900">your</span> learning needs:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💡", text: "A personalised wealth-education roadmap" },
              { icon: "📋", text: "General concepts behind investing, super, ETFs and long-term planning" },
              { icon: "🎯", text: "Educational tools that show how compounding, fees and time work" },
              { icon: "📈", text: "Clear explanations of different investment approaches (not recommendations)" },
              { icon: "⚙️", text: "A simple, visual framework to help you make your own informed decisions" },
              { icon: "🧠", text: "Confidence to take action by understanding how money works" },
              { icon: "📝", text: "A supportive guide who explains everything in plain English" },
              { icon: "🌍", text: "Understanding how digital assets, ETFs, and global markets work — explained simply" },
              { icon: "✨", text: "Everything in one clear, visual educational plan" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gold-200 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <p className="text-charcoal-700 text-lg font-medium leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-b from-gold-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              A simple, structured approach to financial education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="heading-3 text-xl mb-4">Discovery Session<br />(Education Only)</h3>
              <p className="text-charcoal-700">
                We discuss your goals, lifestyle and financial questions — not to recommend products, but to understand what concepts you want clarity on.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="heading-3 text-xl mb-4">Wealth-Education Blueprint</h3>
              <p className="text-charcoal-700">
                You receive a structured, easy-to-follow education plan that explains how wealth is built, how investing works, and what long-term financial principles matter most.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-ocean-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="heading-3 text-xl mb-4">Tools & Visualisations</h3>
              <p className="text-charcoal-700">
                Interactive calculators help you explore "what-if" scenarios. These tools are hypothetical and for learning only — not advice or recommendations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="heading-3 text-xl mb-4">Clarity & Confidence</h3>
              <p className="text-charcoal-700">
                You walk away understanding the big picture — so you can make better decisions on your own terms, or with a licensed adviser if you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Apps */}
      <section id="tools" className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-ocean-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl text-white">
              Tools & Apps That Make It <span className="text-gold-400">Easy</span>
            </h2>
            <p className="text-xl text-ocean-200 leading-relaxed">
              You'll also get access to educational tools I've built to simplify complex ideas and help you understand wealth-building concepts.
            </p>
            <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4 mt-6 max-w-3xl mx-auto">
              <p className="text-sm text-ocean-200 italic">
                <strong className="text-gold-400">EDUCATION TOOLS ONLY — NOT FINANCIAL ADVICE</strong><br />
                These tools illustrate concepts only. They do not recommend products or tell you what to invest in.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {wealthTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border-2 border-navy-700 hover:border-gold-500 transition-all cursor-pointer block hover:shadow-2xl hover:scale-[1.03] group"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="heading-3 text-2xl mb-4 text-white">{tool.name}</h3>
                <p className="text-ocean-200 text-lg mb-0">{tool.description}</p>
                <div className="mt-4 text-gold-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-teal-800 text-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-gold-500/20 text-gold-300 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-gold-400/30">
              🚀 Ready to Transform Your Financial Future?
            </div>
            <h2 className="heading-2 text-white mb-6 text-4xl md:text-5xl">
              Your Path to Freedom Starts <span className="text-gold-400">Here</span>
            </h2>
            <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's build your Wealth-Education Blueprint — and help you understand how to build wealth for the next 30 years. No guesswork. No confusion. Just clarity, confidence, and a clear educational path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5 font-bold shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 transition-all">
                Start Your Wealth-Education Blueprint →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-ocean-600">
              <div>
                <div className="text-2xl mb-2">✓</div>
                <p className="text-sm text-ocean-200">Free Discovery Call</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✓</div>
                <p className="text-sm text-ocean-200">No Obligation</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✓</div>
                <p className="text-sm text-ocean-200">Clear Next Steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
