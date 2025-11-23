import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Wealth Blueprint",
  description: "See what clients say about working with Michael Leggo and the Wealth Blueprint approach.",
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
      content: "What I appreciated most about Michael's coaching was how simple he made everything feel. He explained everything in a way that felt grounded, simple and genuinely accessible. He helped me understand the long-term principles — compounding, consistency, and investing with discipline — without overwhelm or jargon. The structure he guided me to set up feels aligned with my values, gives me a clear sense of direction, and supports the kind of long-term stability and independence I want to create.",
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
      content: "Michael's coaching gave me a plan I could trust — simple, automated and aligned with my lifestyle. He helped me build a generational wealth and retirement blueprint that aligns with my life goals — retiring by 60 with passive income well above my yearly expenses. The automated investment structure he guided me to set up is simple, proven, and gives me confidence I'm on the right path. It frees up my time so I can focus on what really matters — growing my business, taking care of my family, and enjoying a great lifestyle.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-5xl md:text-6xl lg:text-7xl">
              Client <span className="text-teal-500">Testimonials</span>
            </h1>
            <p className="text-body text-xl md:text-2xl max-w-3xl mx-auto">
              See what clients say about working with Michael and the Wealth Blueprint approach.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-ocean-50 to-teal-50 rounded-2xl p-8 md:p-10 shadow-xl border border-ocean-200 hover:shadow-2xl transition-all h-full flex flex-col"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-2xl text-gold-500">⭐</span>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl leading-relaxed text-charcoal-800 mb-6 font-medium italic flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-ocean-200 pt-6 mt-auto">
                    <p className="text-lg font-bold text-navy-900">
                      — {testimonial.name}
                    </p>
                    <p className="text-charcoal-600 text-sm md:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
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
                Join others who have transformed their financial future with the Wealth Blueprint approach.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-10 py-5 inline-block font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

