// TODO: replace with Hestia's real WhatsApp Business number before launch.
export const WHATSAPP_NUMBER = "254700000000";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ZONE_1_AREAS = ["Kilimani", "Lavington", "Westlands", "Kileleshwa"];
