import type { Metadata } from "next";
import WavePattern from "@/components/WavePattern";
import ContactInstant from "@/components/ContactInstant";

export const metadata: Metadata = {
  title: "Contact | Wealth Blueprint",
  description:
    "Book a free discovery session with Michael Leggo. Message on WhatsApp, send a text, call, or request a time below. Money coaching and education only — not financial advice.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="section-padding ocean-gradient relative overflow-hidden">
        <WavePattern />
        <div className="container-custom relative z-10">
          <h1 className="heading-1 text-center mb-4">Book a free discovery session</h1>
          <p className="text-body text-center max-w-2xl mx-auto">
            WhatsApp is the fastest way to reach me. You can also text, call, or request a time below.
            Education only — not financial advice.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-[#f0f9ff]/30">
        <div className="container-custom">
          <div className="max-w-xl mx-auto space-y-8">
            <ContactInstant />

            <div className="flex items-center gap-4" role="separator" aria-label="Or book in writing">
              <div className="h-px flex-1 bg-charcoal-200" />
              <p className="text-sm font-medium text-charcoal-500 shrink-0">or book in writing</p>
              <div className="h-px flex-1 bg-charcoal-200" />
            </div>

            <div className="surface p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2 text-center">
                Request a discovery call
              </h2>
              <p className="text-center text-charcoal-600 mb-6 text-sm md:text-base">
                Share a little about your situation and a time that works. I’ll confirm within one business day.
              </p>

              <form
                action="https://formspree.io/f/mpwbppgq"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_redirect" value="/thank-you" />

                <div>
                  <label htmlFor="name" className="label-field">Name *</label>
                  <input type="text" name="name" id="name" required autoComplete="name" className="input-field" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="label-field">Email *</label>
                  <input type="email" name="email" id="email" required autoComplete="email" className="input-field" placeholder="you@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="label-field">Mobile *</label>
                  <input type="tel" name="phone" id="phone" required autoComplete="tel" className="input-field" placeholder="04XX XXX XXX" />
                </div>

                <div>
                  <label htmlFor="location" className="label-field">
                    Location <span className="font-medium text-charcoal-500">(optional)</span>
                  </label>
                  <input type="text" name="location" id="location" autoComplete="address-level2" className="input-field" placeholder="City, country" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="date" className="label-field">Preferred date *</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      className="input-field"
                      min={new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" })}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="time" className="label-field">Preferred time *</label>
                    <input type="time" name="time" id="time" required className="input-field" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-field">What would you like help with? *</label>
                  <textarea name="message" id="message" rows={4} required className="input-field" placeholder="A few sentences is plenty — what you want to get clearer on." />
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
                      I understand this is <strong>general education only</strong> — not financial product advice or personalised investment guidance. *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send booking request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
