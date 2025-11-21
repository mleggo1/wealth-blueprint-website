import Link from "next/link";
import Image from "next/image";
import { wealthTools } from "@/lib/tools";
import WavePattern from "@/components/WavePattern";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-50 via-white to-teal-50 section-padding overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 Your Path to Financial Freedom
              </div>
              <h1 className="heading-1 mb-6 text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="text-teal-500">Build Wealth.</span><br />
                <span className="text-navy-900">Live Free.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-charcoal-700 leading-relaxed font-medium">
                Get a clear, personalised plan that shows you exactly how to grow your money with confidence — no jargon, no pressure, no confusion.
              </p>
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border-l-4 border-gold-500">
                <p className="text-lg text-charcoal-700 mb-0">
                  <span className="font-bold text-navy-900">30 years</span> of global experience • <span className="font-bold text-navy-900">JPMorgan, Merrill Lynch, Bloomberg</span> • Simple strategies that work
                </p>
              </div>
              <Link href="/contact" className="btn-primary inline-block text-lg px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Start Your Wealth Blueprint →
              </Link>
              <p className="text-sm text-charcoal-500 mt-4">✓ Free discovery call • ✓ No obligation • ✓ Clear next steps</p>
            </div>

            {/* Right side - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent z-10"></div>
                <Image
                  src="/michael-hero.jpg"
                  alt="Michael Leggo with family at Three Sisters, Blue Mountains"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - What's In It For You */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-4xl md:text-5xl">
              What's In It For <span className="text-teal-500">You</span>?
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Stop guessing. Start building. Get a clear roadmap to financial freedom that's built around <span className="font-bold text-navy-900">your</span> goals, <span className="font-bold text-navy-900">your</span> timeline, and <span className="font-bold text-navy-900">your</span> life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-ocean-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="heading-3 text-2xl mb-4">Clarity</h3>
              <p className="text-charcoal-700 text-lg">
                Know exactly what to invest in, why, and how long. No more confusion or analysis paralysis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 shadow-lg border border-gold-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="heading-3 text-2xl mb-4">Confidence</h3>
              <p className="text-charcoal-700 text-lg">
                Make decisions with certainty. You'll understand the why behind every strategy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-8 shadow-lg border border-navy-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="heading-3 text-2xl mb-4">Freedom</h3>
              <p className="text-charcoal-700 text-lg">
                Build wealth that supports the life you want — family, travel, purpose, peace of mind.
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
                      Over the past <span className="font-bold text-navy-900">30 years</span>, I've built global property portfolios and long-term investment strategies across <span className="font-semibold text-ocean-700">Australia, London, New York and Bali</span> — all designed with one goal in mind: <span className="font-bold text-teal-500">financial freedom by design, not by default</span>.
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
                    <p className="text-lg font-semibold text-navy-900 border-l-4 border-gold-500 pl-4">
                      Open, friendly, clear — that's how I coach.
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
              A simple, powerful financial roadmap built entirely around <span className="font-bold text-navy-900">your</span> goals:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💡", text: "Your investment options — explained in plain English" },
              { icon: "📋", text: "A personalised \"Wealth Blueprint\" tailored to your timeline" },
              { icon: "🎯", text: "Your Ultimate Target: what you can safely spend in retirement" },
              { icon: "📈", text: "The Power of Compounding — why time in the market wins" },
              { icon: "⚙️", text: "Automation so your plan becomes set-and-forget" },
              { icon: "🧠", text: "Psychology and mindset guidance so you stay consistent" },
              { icon: "📝", text: "Step-by-step setup that's easy to follow" },
              { icon: "🌍", text: "Optional digital assets, ETFs, global markets exposure — explained simply" },
              { icon: "✨", text: "Everything in one clear, visual plan" },
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
              You'll also get access to powerful tools I've built to simplify complex ideas and help you take action with confidence.
            </p>
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
              Let's build your Wealth Blueprint — and set you up for the next 30 years. No guesswork. No confusion. Just clarity, confidence, and a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5 font-bold shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 transition-all">
                Start Your Wealth Blueprint →
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
