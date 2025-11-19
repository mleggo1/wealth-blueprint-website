import Link from "next/link";

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
              I've received your message about your Wealth Blueprint. I'll review your details and get back to you within one business day.
            </p>
            
            <p className="text-charcoal-600 text-center text-sm md:text-base mb-8 max-w-2xl mx-auto">
              If your matter is urgent, you can call me on{" "}
              <a 
                href="tel:+61428333006" 
                className="text-navy-800 font-semibold hover:text-navy-600 transition-colors"
              >
                0428 333 006
              </a>
              {" "}(<a 
                href="tel:+61428333006" 
                className="text-navy-800 font-semibold hover:text-navy-600 transition-colors"
              >
                +61 428 333 006
              </a>{" "}outside Australia).
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
