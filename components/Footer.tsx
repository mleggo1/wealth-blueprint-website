import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gold-500">Wealth</span><span className="text-white">Blueprint</span>
            </div>
            <p className="text-charcoal-300 mb-4 max-w-md">
              Build Wealth. Live Free. Your path to financial freedom through strategic investing and intelligent wealth building.
            </p>
            <div className="mb-4">
              <p className="text-sm font-semibold text-charcoal-300 mb-2">Contact</p>
              <a 
                href="tel:+61428333006" 
                className="text-gold-400 hover:text-gold-300 transition-colors text-sm block"
              >
                📞 0428 333 006
              </a>
              <a 
                href="tel:+61428333006" 
                className="text-charcoal-400 hover:text-gold-400 transition-colors text-xs block mt-1"
              >
                +61 428 333 006
              </a>
            </div>
            <p className="text-sm text-charcoal-400">
              © {currentYear} Wealth Blueprint. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-charcoal-300">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gold-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-charcoal-300">
              <li>
                <Link href="/privacy" className="hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="text-sm text-charcoal-400 max-w-4xl space-y-4">
            <p className="font-semibold text-charcoal-300 mb-2">DISCLAIMER:</p>
            <p>
              Any information, tools or content on this website are general in nature and do not constitute financial advice or a recommendation. This material has been prepared without taking into account your objectives, financial situation or needs.
            </p>
            <p>
              Wealth Blueprint Coaching is not authorised under an Australian Financial Services (AFS) Licence to provide personal financial advice on financial products. We are not financial advisers and therefore not authorised to offer personal financial advice.
            </p>
            <p>
              You should consider seeking independent advice from a licensed financial adviser before acting on any information, strategies or products mentioned on this website, to ensure they are appropriate for your personal circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

