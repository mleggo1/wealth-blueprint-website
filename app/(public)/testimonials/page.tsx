import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials | Wealth Blueprint",
  description: "Client stories about money coaching and education with Michael Leggo. General learning experiences only — not financial advice.",
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jason Seel",
      role: "Co-founder of Horizon Digital",
      content: "Michael's coaching opened my eyes to what was really possible for me. I didn't realise how much I could automate, lower my costs and take control of my investing through the right platforms. The whole 'set and forget' structure made everything clearer and easier. It's already changed how I think about building long-term wealth.",
      rating: 5,
    },
    {
      name: "Talia Stan-Bishop",
      role: "PARTNER, Onyx Business Group",
      content: "The report was awesome! It gave me exactly the right level of detail for someone to take away what they need to make real changes. The summaries were great, but the true magic was seeing the person and program live — it brought everything to life. Even as someone in finance, it really opened my eyes to the impact of small decisions over time. Michael made it clear, visual, and easy to understand.",
      rating: 5,
    },
    {
      name: "Michael Hogg",
      role: "Regional Manager Western Australia, Toll Group",
      content: "Michael's coaching gave me a plan I could trust — simple, automated and aligned with my lifestyle. He coached me out of the old high-fee adviser model and helped me see the real opportunity cost — all the money I was losing by not putting it to work in low-cost, long-term investments. The structure he guided me to set up is simple, automated and built around evidence, not guesswork. It will save me hundreds of thousands of dollars in unnecessary fees and lost opportunities — and put those same dollars into my future instead. His tools made everything easy to understand. The Ultimate Target app showed me exactly what I can save, what I'll have at retirement, and how long my money will last. For the first time, I could see my whole plan clearly. It's been a genuine game-changer for my wealth, confidence and long-term direction — to help ensure my family's future.",
      rating: 5,
    },
    {
      name: "Claire Marriott",
      role: "Founder, Perth Family Counselling",
      content: "Working with Michael has been incredibly empowering for my financial journey. He has a calm and practical way of explaining concepts that makes them easy to understand and apply. What stood out most was his ability to break down long term investing principles in a way that felt reassuring and clear, helping me build confidence without feeling overwhelmed. The financial framework he helped me create feels aligned with what matters most to me. It gives me clarity, direction and a strong sense of security as I move toward lasting stability and independence.",
      rating: 5,
    },
    {
      name: "Cathy Catoni",
      role: "NBN Regional Area Manager",
      content: "Michael's coaching finally made investing feel doable, not overwhelming. It opened up new possibilities and gave me clarity around how to reallocate my money so it works smarter. He helped me understand the value of putting my savings into a structure that grows over time through consistency, automation and low-cost investing. It made everything feel simpler, more achievable, and aligned with building real long-term security into retirement and beyond.",
      rating: 5,
    },
    {
      name: "Mark Dimmock",
      role: "Founder, Dimmock Property",
      content: "Working with Michael has given me genuine clarity around my long-term plan. He helped me build a generational wealth and retirement blueprint that aligns with my life goals — retiring by 60 with passive income well above my yearly expenses. The automated investment structure he guided me to set up is simple, proven, and gives me confidence I'm on the right path. It frees up my time so I can focus on what really matters — growing my business, taking care of my family, and enjoying a great lifestyle.",
      rating: 5,
    },
    {
      name: "Dr Tom Lee",
      role: "RediMed | Allied Health",
      content: "Michael's coaching helped me understand the different investment options available — how to get international exposure through low-cost ETFs, digital assets, and options that suit my age and retirement goals. He showed me how to set everything up properly and keep it simple. His tools — especially the Ultimate Target app — made things much easier to understand. It showed me visually how compounding works, how fees affect long-term results, my retirement targets, the cost of delaying, and he also recommended books I could read to learn more. Overall, it gave me clarity and confidence about how to build long-term wealth in a simple, low-stress way.",
      rating: 5,
    },
    {
      name: "Brent Campbell",
      role: "Executive Director, Oracle Group Insurance Brokers",
      content: "Michael has a real talent for detail and for building trusted, professional relationships. He brings clarity to complex ideas and genuinely cares about helping people make smarter long-term decisions.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-12 md:py-16 ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content - Side by Side Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="/michael-profile.png"
                    alt="Michael Leggo"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="heading-1 mb-3">
                  Client <span className="text-teal-600">Testimonials</span>
                </h1>
                <p className="text-body max-w-2xl mx-auto lg:mx-0">
                  Personal views on money coaching and education — not financial advice or guaranteed results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="surface p-6 md:p-8 h-full flex flex-col"
                >
                  <div className="flex items-center gap-0.5 mb-4 text-gold-500 text-sm" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <blockquote className="text-base md:text-lg leading-relaxed text-charcoal-800 mb-5 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  <footer className="border-t border-charcoal-100 pt-4 mt-auto">
                    <p className="font-semibold text-navy-900">
                      — {testimonial.name}
                    </p>
                    <p className="text-charcoal-600 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-charcoal-500 mt-3 leading-relaxed">
                      Individual learning experiences only; not financial advice, not typical results, and not endorsements of any product or strategy.
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50 border-t border-charcoal-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Ready to Build Your Wealth?</h2>
            <p className="text-body mb-8">
              Join others who have gained clarity and confidence through the Wealth Blueprint educational approach.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

