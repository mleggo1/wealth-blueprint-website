"use client";

import WavePattern from "@/components/WavePattern";

// Note: Metadata should be in a separate layout or use generateMetadata for client components

export default function Contact() {

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <h1 className="heading-1 text-center mb-4">Book a free discovery session</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            Money coaching and education only — not financial advice. Call me directly or send a message below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-[#f0f9ff]/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-8">
            <a 
              href="tel:+61428333006" 
              className="block surface p-5 md:p-6 hover:border-teal-300 transition-colors min-h-[44px]"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-charcoal-500 mb-1.5 uppercase tracking-wide">Prefer to chat now?</p>
                  <p className="text-2xl font-bold text-navy-900 mb-0.5">
                    0428 333 006
                  </p>
                  <p className="text-sm text-charcoal-600">
                    +61 428 333 006 (outside Australia)
                  </p>
                </div>
                <span className="inline-flex items-center justify-center min-h-[44px] bg-navy-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold">
                  Tap to call
                </span>
              </div>
            </a>

            {/* Form Section */}
            <div>
              <p className="text-center text-charcoal-700 mb-6 text-sm md:text-base">
                Or tell me a bit about your situation and I'll get back to you within one business day.
              </p>
              
              <div className="surface p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-6 text-center">Book a Discovery Call</h2>
                
                <form 
                  action="https://formspree.io/f/mpwbppgq" 
                  method="POST" 
                  className="space-y-5"
                >
                  <input
                    type="hidden"
                    name="_redirect"
                    value="/thank-you"
                  />
                  <div>
                    <label htmlFor="name" className="label-field">Name *</label>
                    <input type="text" name="name" id="name" required className="input-field" placeholder="Your name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-field">Email *</label>
                    <input type="email" name="email" id="email" required className="input-field" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-field">Mobile Phone Number *</label>
                    <input type="text" name="phone" id="phone" required className="input-field" placeholder="+61 4XX XXX XXX or 04XX XXX XXX" />
                  </div>

                  <div>
                    <label htmlFor="location" className="label-field">Location</label>
                    <input type="text" name="location" id="location" className="input-field" placeholder="City, Country" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label htmlFor="date" className="label-field">Preferred Date *</label>
                      <input type="date" name="date" id="date" required className="input-field" min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="time" className="label-field">Preferred Time *</label>
                      <input type="time" name="time" id="time" required className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label-field">Message *</label>
                    <textarea name="message" id="message" rows={5} required className="input-field" placeholder="Tell me about your financial goals and what you'd like to achieve..." />
                  </div>

                  <div className="bg-teal-50/80 border border-teal-200 rounded-xl p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="education_only_acknowledgment"
                        required
                        className="mt-1 h-5 w-5 shrink-0 text-teal-600 border-charcoal-300 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-sm text-charcoal-800 leading-snug">
                        I understand that this service provides <strong>general education only</strong> and does not include financial product advice, recommendations, or personalised investment guidance. *
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
