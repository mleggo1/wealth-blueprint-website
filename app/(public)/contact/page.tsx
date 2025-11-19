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
          <h1 className="heading-1 text-center mb-4">Book a Discovery Call</h1>
          <p className="text-body text-center max-w-3xl mx-auto">
            You can either call me directly or send a message using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-[#f0f9ff]/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Phone Card */}
            <a 
              href="tel:+61428333006" 
              className="block bg-gradient-to-br from-[#f0f9ff] to-[#f0fdfa] border border-[#bae6fd] rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-charcoal-600 mb-2 uppercase tracking-wide">Prefer to chat now?</p>
                  <p className="text-2xl font-bold text-[#075985] mb-1">
                    0428 333 006
                  </p>
                  <p className="text-sm text-charcoal-600">
                    +61 428 333 006 (outside Australia)
                  </p>
                </div>
                <div className="text-center sm:text-right">
                  <span className="inline-block bg-[#075985] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Tap to call
                  </span>
                </div>
              </div>
            </a>

            {/* Form Section */}
            <div>
              <p className="text-center text-charcoal-700 mb-6">
                Or tell me a bit about your situation and I'll get back to you within one business day.
              </p>
              
              <div className="bg-white border border-charcoal-200 rounded-lg p-8 shadow-sm">
                <h2 className="heading-2 text-2xl mb-6 text-center">Book a Discovery Call</h2>
                
                <form 
                  action="https://formspree.io/f/mpwbppgq" 
                  method="POST" 
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="_redirect"
                    value="/thank-you"
                  />
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Mobile Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="+61 4XX XXX XXX or 04XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label
                        htmlFor="date"
                        className="block text-sm font-semibold text-charcoal-900 mb-2"
                      >
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="time"
                        className="block text-sm font-semibold text-charcoal-900 mb-2"
                      >
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        required
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="Tell me about your financial goals and what you'd like to achieve..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
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
