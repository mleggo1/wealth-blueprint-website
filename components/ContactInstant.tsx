import { PHONE_DISPLAY_AU, PHONE_DISPLAY_INTL, SMS_URL, TEL_URL, WHATSAPP_URL } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SmsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8a10.2 10.2 0 01-2.72-.36L4 20.5 5.1 17A7.4 7.4 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 5.6c0-1 .8-1.8 1.8-1.8h2.1c.8 0 1.5.5 1.7 1.3l.6 2.3c.2.7-.1 1.4-.7 1.8l-1.1.7c1.2 2.3 3.1 4.2 5.4 5.4l.7-1.1c.4-.6 1.1-.9 1.8-.7l2.3.6c.8.2 1.3.9 1.3 1.7v2.1c0 1-.8 1.8-1.8 1.8C8.9 20.7 3.5 15.3 3.5 8.4V5.6z"
      />
    </svg>
  );
}

export default function ContactInstant() {
  return (
    <div className="surface p-5 md:p-7">
      <p className="text-xs font-semibold text-charcoal-500 mb-1.5 uppercase tracking-wide">
        Message me now
      </p>
      <p className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
        {PHONE_DISPLAY_AU}
      </p>
      <p className="text-sm text-charcoal-600 mt-1 mb-5">
        {PHONE_DISPLAY_INTL} outside Australia
      </p>

      <div className="flex flex-col gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 min-h-[56px] bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <WhatsAppIcon className="h-6 w-6" />
          </span>
          <span className="flex-1 text-left leading-tight">
            <span className="block text-base">WhatsApp me</span>
            <span className="block text-xs font-medium text-white/85">Fastest reply · recommended</span>
          </span>
        </a>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={SMS_URL}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-white text-navy-800 px-4 py-3 rounded-xl font-semibold border border-charcoal-200 hover:border-navy-800 hover:bg-navy-50 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <SmsIcon className="h-5 w-5" />
            Send a text
          </a>
          <a
            href={TEL_URL}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-white text-navy-800 px-4 py-3 rounded-xl font-semibold border border-charcoal-200 hover:border-navy-800 hover:bg-navy-50 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <PhoneIcon className="h-5 w-5" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
