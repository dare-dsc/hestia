// Shared raw content for Hestia concept directions.
// Each direction adapts the voice/styling — the underlying facts stay consistent.

const WHATSAPP_STARTER =
  "Hi Hestia, I am interested in trusted home support. Can you help me start the Runda household placement?";

export const CONTACT = {
  phone: "+254 704 872 150",
  phoneDisplay: "0704872150",
  whatsapp: `https://wa.me/254704872150?text=${encodeURIComponent(
    WHATSAPP_STARTER,
  )}`,
  whatsappDisplay: "wa.me/254704872150",
  whatsappStarter: WHATSAPP_STARTER,
} as const;

export const SOCIALS = {
  instagram: "https://instagram.com/hestia.ke",
  facebook: "https://facebook.com/hestia.ke",
  tiktok: "https://tiktok.com/@hestia.ke",
  email: "hello@hestia.co.ke",
} as const;

export type TrustDimension = {
  id: string;
  question: string;
  label: string;
  detail: string;
};

// The 7 trust dimensions a household actually feels, reordered as a gradient
// from "who is this person" to "what protects both sides if it breaks."
export const TRUST_DIMENSIONS: TrustDimension[] = [
  {
    id: "identity",
    question: "Who is actually in my home?",
    label: "Identity, confirmed",
    detail:
      "National ID checked, address confirmed, and references called — not just listed.",
  },
  {
    id: "competence",
    question: "Can they really do the work?",
    label: "Skills, checked",
    detail:
      "Cooking, cleaning, childcare or care-of-elderly — assessed against what your home actually needs.",
  },
  {
    id: "safety",
    question: "Is my household safe?",
    label: "Conduct, vetted",
    detail:
      "Past employer conduct checked directly. No anonymous placements, ever.",
  },
  {
    id: "continuity",
    question: "Will it keep showing up?",
    label: "Continuity, managed",
    detail:
      "If a placement ever needs to change, Hestia manages the handover — your routine carries over, even when the person covering it does change.",
  },
  {
    id: "recourse",
    question: "What if it goes wrong anyway?",
    label: "Recourse, promised",
    detail:
      "If a placement isn't working, we step back in — replacement support, not a shrug.",
  },
  {
    id: "status",
    question: "Is this the sensible choice?",
    label: "A considered decision",
    detail:
      "The kind of choice you don't have to explain or defend to anyone — it's just handled.",
  },
  {
    id: "worker",
    question: "Are they treated fairly too?",
    label: "Fair terms, both ways",
    detail:
      "Clear pay, clear hours, clear expectations — because a treated-fairly worker is a worker who stays.",
  },
];

export type Step = {
  index: string;
  title: string;
  detail: string;
};

export const HOW_IT_WORKS: Step[] = [
  {
    index: "01",
    title: "Call or WhatsApp Hestia",
    detail:
      "Tell us what your home needs, how often, and what's gone wrong before. Fifteen minutes, no pressure.",
  },
  {
    index: "02",
    title: "We build your Trust Packet",
    detail:
      "Before anyone arrives, you see who they are: identity, references, skills, fit notes — in writing.",
  },
  {
    index: "03",
    title: "They start, on schedule",
    detail:
      "Hestia keeps the schedule running end to end. If who's covering it ever changes, the routine doesn't reset — you stop thinking about it, that's the point.",
  },
  {
    index: "04",
    title: "We check in — day 7 and day 30",
    detail:
      "If anything's off, we already know before you have to raise it. Replacement support if it's needed.",
  },
];

export const FOUNDING_OFFER = {
  title: "Founding Runda Household Placement",
  price: "KES 5,000",
  cadence: "one-time trust-setup fee",
  description:
    "For the first households in your area: a full Trust Packet, a matched placement, and our 7-day and 30-day check-ins — before regular service pricing begins.",
};
