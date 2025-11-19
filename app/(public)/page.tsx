import Link from "next/link";
import { wealthTools } from "@/lib/tools";
import WavePattern from "@/components/WavePattern";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative ocean-gradient section-padding overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Build Your Wealth Blueprint
              <br />
              <span className="text-ocean-800">Your Path to Financial Freedom</span>
            </h1>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Get a simple, clear roadmap for your financial future and a launchpad for your family.
              I'll show you exactly how and why to invest so you can build lasting multi-generational wealth — all in one powerful view.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/services#tools" className="btn-secondary">
                Explore Wealth Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Who I Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Serious Professionals",
                description: "Professionals wanting a serious wealth engine, not one-off tactics.",
              },
              {
                title: "Legacy Builders",
                description: "Families building multi-generational security.",
              },
              {
                title: "Strategic Investors",
                description: "Investors seeking clarity on what to buy, why, and how long.",
              },
              {
                title: "High Achievers",
                description: "High-achievers who value discipline, freedom, and intelligent strategy.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 border border-charcoal-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="heading-3 text-xl mb-3">{card.title}</h3>
                <p className="text-charcoal-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="section-padding bg-gradient-to-b from-ocean-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-ocean-100/20"></div>
        <div className="container-custom relative z-10">
          <h2 className="heading-2 text-center mb-12">My Unique Value Proposition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="heading-3 text-xl mb-4">Strategic Investing</h3>
              <p className="text-charcoal-600">
                ETFs, Bitcoin/Ethereum, global markets, smart asset allocation. Evidence-based, high conviction, long-term focused.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="heading-3 text-xl mb-4">Real-World Experience</h3>
              <p className="text-charcoal-600">
                Property in Australia and Bali, practical investment coaching, working with real clients and real money.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="heading-3 text-xl mb-4">Lifestyle by Design</h3>
              <p className="text-charcoal-600">
                Freedom, discipline, legacy, surfing, travel, family — wealth is a means to a bigger life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">What You'll Get</h2>
          <p className="text-center text-body mb-12 max-w-2xl mx-auto">
            Your Wealth Blueprint — a complete system for financial independence, not just advice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Confirm your investment options — what to buy and why",
              "Your Ultimate Target — what you can safely spend in retirement, right through to horizon",
              "The Power of Compounding — why time in the market beats timing the market",
              "Automation & execution so investing becomes set-and-forget",
              "Psychology & mindset guidance to keep you consistent",
              "Personalised coaching suggestions aligned with your goals",
              "Step-by-step setup so everything is ready to run",
              "A complete system for financial independence — not just advice",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gold-50 border border-gold-200 rounded-lg"
              >
                <div className="flex items-start">
                  <span className="text-gold-600 font-bold mr-3">✓</span>
                  <p className="text-charcoal-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Wealth Tools */}
      <section id="tools" className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4 text-white">Featured Wealth Tools</h2>
          <p className="text-center text-lg text-charcoal-300 mb-12 max-w-2xl mx-auto">
            Powerful calculators and apps to help you build and track your wealth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {wealthTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="heading-3 text-2xl mb-4 text-white">{tool.name}</h3>
                <p className="text-charcoal-300 mb-6">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portal" className="btn-gold">
              See the Tools Inside the Portal
            </Link>
          </div>
        </div>
      </section>

      {/* How the Coaching Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">How the Coaching Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "Understand your goals, fears, timeline, and starting point.",
              },
              {
                step: "02",
                title: "Wealth Blueprint",
                description: "A clear, personalised investment plan tailored to your life.",
              },
              {
                step: "03",
                title: "Implement & Optimise",
                description: "Use the Tools + ongoing coaching to keep you compounding.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-gold-500 mb-4">{step.step}</div>
                <h3 className="heading-3 text-xl mb-4">{step.title}</h3>
                <p className="text-charcoal-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-teal-800 text-white relative overflow-hidden">
        <WavePattern />
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-2 text-white mb-6">Ready to Build Your Wealth Blueprint?</h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            Start your journey to financial freedom today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book a Call
            </Link>
            <Link href="/pricing" className="btn-secondary bg-white text-navy-800">
              Join the Portal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

