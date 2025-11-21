import Link from "next/link";
import Image from "next/image";
import { wealthTools } from "@/lib/tools";
import WavePattern from "@/components/WavePattern";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="order-2 lg:order-1">
              <h1 className="heading-1 mb-6 text-4xl md:text-5xl lg:text-6xl">
                Build Wealth. Live Free.
              </h1>
              <p className="text-body text-lg md:text-xl mb-6 text-charcoal-700 leading-relaxed">
                Hi, I'm Michael — a loving husband, dad, surfer and lifelong investor. I'm a Perth-based wealth coach and global investor with over 30 years of experience across Australia, London, New York and Bali. I help people take control of their money in a simple, open and friendly way — no jargon, no pressure, no confusion.
              </p>
              <p className="text-body text-lg mb-8 text-charcoal-700 leading-relaxed">
                Together we'll build your Wealth Blueprint and give you the tools to grow your money with confidence, clarity and ease.
              </p>
              <Link href="/contact" className="btn-primary inline-block text-lg px-8 py-4">
                Start Your Wealth Blueprint
              </Link>
            </div>

            {/* Right side - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/michael-hero.jpg"
                  alt="Michael Leggo with family at Three Sisters, Blue Mountains"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Michael Section */}
      <section className="section-padding bg-gradient-to-b from-ocean-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-2 text-center mb-12 text-3xl md:text-4xl">
              Meet Michael — Your Wealth Coach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Headshot Image */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-ocean-200 to-ocean-300 rounded-full shadow-xl border-4 border-white flex items-center justify-center">
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
                <div className="prose prose-lg max-w-none text-charcoal-700 leading-relaxed space-y-4">
                  <p>
                    Michael is a loving husband, dad, surfer and lifelong investor with property and investments across Australia, London, New York and Bali.
                  </p>
                  <p>
                    For more than three decades he's built long-term wealth using simple, structured strategies — the same principles he now teaches every client he works with.
                  </p>
                  <p>
                    He coaches in an open, friendly and down-to-earth way, making money easy to understand and even easier to act on. There's no jargon, no pressure and no sales pitch — just practical frameworks that actually work.
                  </p>
                </div>
              </div>
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
                title: "Professionals and Business Owners",
                description: "People who want an automated, set-and-forget wealth system that quietly compounds in the background — so they can stay focused on their career, business, family, and what matters most.",
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
                Low-cost ETFs that let you own pieces of the world's best companies in one move. The power? Compounding — your money grows on itself over time — plus minimal fees so you keep more returns. It's Warren Buffett's approach, simplified: smart choices, long-term focus, and a plan anyone can follow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="heading-3 text-xl mb-4">Global Experience</h3>
              <p className="text-charcoal-600">
                A global investor including property and stock investments across Australia, London, New York and Indonesia. I teach straightforward share market investing — including buying pieces of the world's biggest companies — using strategies that work. Real experience. Real results.
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
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors cursor-pointer block hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="heading-3 text-2xl mb-4 text-white">{tool.name}</h3>
                <p className="text-charcoal-300 mb-6">{tool.description}</p>
              </a>
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
