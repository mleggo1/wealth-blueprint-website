import Link from "next/link";
import { PHONE_DISPLAY_AU, WHATSAPP_URL } from "@/lib/contact";

export default function ThankYou() {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="container-custom w-full">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-white border border-charcoal-200 rounded-lg p-8 md:p-12 shadow-sm">
            <h1 className="heading-1 text-3xl md:text-4xl mb-6 text-center">
              Thank you, I'll be in touch shortly.
            </h1>
            
            <p className="text-body text-center mb-6 max-w-2xl mx-auto">
              I've received your message about the Wealth Blueprint money coaching and education framework. I'll get back to you within one business day.
            </p>
            
            <p className="text-charcoal-600 text-center text-sm md:text-base mb-8 max-w-2xl mx-auto">
              If you need me sooner,{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-800 font-semibold hover:text-navy-600 transition-colors"
              >
                WhatsApp me on {PHONE_DISPLAY_AU}.
              </a>
            </p>
            
            <div className="text-center">
              <Link href="/" className="btn-primary inline-block">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
