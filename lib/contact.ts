export const PHONE_DISPLAY_AU = "0428 333 006";
export const PHONE_DISPLAY_INTL = "+61 428 333 006";
export const PHONE_E164 = "61428333006";

const WHATSAPP_PREFILL = encodeURIComponent(
  "Hi Michael, I'd like to book a free discovery session."
);

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${WHATSAPP_PREFILL}`;
export const SMS_URL = `sms:+${PHONE_E164}`;
export const TEL_URL = `tel:+${PHONE_E164}`;
