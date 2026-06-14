import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  WhatsappLogo,
  SealCheck,
  ArrowDown,
} from "@phosphor-icons/react";
import { CONTACT, TRUST_DIMENSIONS, FOUNDING_OFFER } from "../content/hestia";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

type Room = {
  id: string;
  time: string;
  title: string;
  body: string;
  image: string;
  align: "left" | "right";
  noteTitle?: string;
  noteMeta?: string;
  note?: string[];
};

const ROOMS: Room[] = [
  {
    id: "kitchen",
    time: "18:06 — the door swings open",
    title: "Hestia already knew what you'd need.",
    body: "The counters are clear, the shoes are back by the rack, and there's a note on the fridge — not an apology, not a to-do list. Just a record of the small things you mentioned once: the unscented detergent, beans soaking for tomorrow, the school run moved to Friday. Hestia keeps track, so you don't have to repeat yourself.",
    image: "hestia-kitchen-detail",
    align: "right",
    noteTitle: "Trust Packet note",
    note: [
      "Fit note: unscented detergent, school run moved to Friday.",
      "Reference and ID checked before the first visit.",
    ],
  },
  {
    id: "living-room",
    time: "later — homework, mostly done",
    title: "The kids didn't notice anything was different.",
    body: "Dinner's eaten, bath time happened roughly on schedule, and tonight feels like any other evening. Not because it's always the same face at the door — but because Hestia keeps the rhythm of the house steady, whoever's covering it that day.",
    image: "hestia-living-calm",
    align: "left",
    noteTitle: "Day 7 check-in",
    noteMeta: "Routine held",
    note: [
      "Dinner and bath time are landing on schedule.",
      "Next check-in: day 30, before small issues become big ones.",
    ],
  },
  {
    id: "bedroom",
    time: "21:00 — the house has gone quiet",
    title: "Thirty days in, this stopped feeling like a trial.",
    body: "Bags are packed for the morning, the lights are off in the right rooms, and nobody had to ask twice. Things will change eventually — someone will need a day off, a schedule will shift — but that's a call to Hestia, not a reset. The handover happens before it becomes your problem.",
    image: "hestia-bedroom-quiet",
    align: "right",
    noteTitle: "Day 30 check-in",
    noteMeta: "Confirmed: routine carries over",
    note: [
      "Both check-ins clear — no changes needed on your end.",
      "Fit notes and house rules stay on file for the next rotation.",
    ],
  },
];

const STAMP_ROTATIONS = [-6, 5, -3, 8, -5, 3, -8];

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const SCHEDULE = [
  { label: "Cleaning", active: [true, false, false, true, false, false, false] },
  { label: "Cooking", active: [true, true, true, true, true, false, false] },
];

const HOUSEHOLD_FEARS = [
  "Turnover",
  "Theft anxiety",
  "Privacy",
  "No-shows",
  "Unclear duties",
  "Poor handover",
];

const OFFER_POINTS = [
  "5 founding Runda-area homes",
  "Trust Packet before placement",
  "KES 5,000 trust setup",
];

const REFERRAL_COMPARISON = [
  {
    label: "A referral gives you a name.",
    detail:
      "Useful, but usually informal: few written checks, unclear terms, and no one owned the follow-up.",
  },
  {
    label: "Hestia gives you a checked path.",
    detail:
      "Identity, references, fit notes, house rules, trial support, and 7-day and 30-day check-ins.",
  },
];

export default function ThursdaySixPM() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const heroChromeRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The door opens — pinned hero, scrubbed.
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })
        .to(leftDoorRef.current, { xPercent: -100, ease: "none" }, 0)
        .to(rightDoorRef.current, { xPercent: 100, ease: "none" }, 0)
        .to(heroChromeRef.current, { opacity: 0, ease: "none" }, 0)
        .to(heroRevealRef.current, { opacity: 1, ease: "none" }, 0.15);

      // Each room: image drifts (parallax), text reveals on entry.
      gsap.utils.toArray<HTMLElement>(".room-section").forEach((section) => {
        const image = section.querySelector<HTMLElement>(".room-image");
        const text = section.querySelector<HTMLElement>(".room-text");

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.18, yPercent: -6 },
            {
              scale: 1,
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        if (text) {
          gsap.from(text, {
            opacity: 0,
            y: 56,
            duration: 1,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: text,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      // Seven-checks spotlight glow drifts slightly on scroll.
      gsap.utils.toArray<HTMLElement>(".checks-section").forEach((section) => {
        const spotlight = section.querySelector<HTMLElement>(".checks-spotlight");
        if (!spotlight) return;

        gsap.fromTo(
          spotlight,
          { yPercent: -14 },
          {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // Generic fade-up reveals for interstitial / proof / schedule sections.
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Seven-checks list rows.
      gsap.from(".check-row", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".checks-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Schedule day-pills.
      gsap.from(".day-pill", {
        opacity: 0,
        scale: 0.6,
        duration: 0.4,
        stagger: 0.03,
        ease: "back.out(1.7)",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".schedule-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Closing CTA reveal.
      gsap.from(".closing-reveal", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".closing-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="theme-thursday relative">
      <div className="grain" />

      {/* Chrome */}
      <header className="fixed top-3 inset-x-3 md:top-5 md:inset-x-6 z-40 flex items-center justify-between rounded-2xl px-4 md:px-6 py-2.5 md:py-3 bg-[var(--surface)]/80 backdrop-blur-xl backdrop-saturate-150 border border-[var(--clay)]/20 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="block h-10 w-10 md:h-11 md:w-11 overflow-hidden rounded-full bg-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <img
              src="/images/logo.png"
              alt="Hestia"
              className="h-full w-full scale-110 object-contain object-center"
            />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--clay)]/40 bg-[var(--surface)] text-[var(--ink)] px-4 py-2 text-sm font-semibold tracking-tight transition-transform active:scale-[0.97] active:translate-y-[1px]"
          >
            <Phone size={15} weight="fill" />
            Call
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--clay)] text-[var(--surface)] px-4 py-2 text-sm font-semibold tracking-tight transition-transform active:scale-[0.97] active:translate-y-[1px]"
          >
            <WhatsappLogo size={15} weight="fill" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO — the door */}
      <section ref={heroRef} className="relative h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero1.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.18)_78%)]" />
          <div
            ref={heroRevealRef}
            className="absolute inset-0 flex items-center justify-center px-6 opacity-0"
          >
            <div className="max-w-[34rem] rounded-[1.5rem] border border-white/18 bg-[var(--ink)]/52 px-6 py-7 text-center text-[var(--surface)] shadow-[0_28px_80px_-34px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl md:max-w-3xl md:px-10 md:py-9">
              <p className="font-display italic text-[2rem] leading-[1.02] [text-shadow:0_2px_18px_rgba(0,0,0,0.42)] md:text-7xl">
                Nothing is on fire.
              </p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[var(--surface)]/88 [text-shadow:0_1px_12px_rgba(0,0,0,0.38)] md:text-lg">
                Because the person entering your home was checked before they
                arrived, and Hestia is still reachable after they start.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={leftDoorRef}
          className="absolute inset-y-0 left-0 w-1/2 flex flex-col items-end justify-center pr-4 md:pr-10 text-right"
          style={{ background: "#ffbf00" }}
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-2 md:mb-4" style={{ color: "#0a0908cc" }}>
            Nairobi · Thu
          </span>
          <h1 className="font-display text-[13vw] md:text-[7.5vw] leading-[0.95]" style={{ color: "#0a0908" }}>
            It&rsquo;s
            <br />
            6pm.
          </h1>
        </div>
        <div
          ref={rightDoorRef}
          className="absolute inset-y-0 right-0 w-1/2 flex flex-col items-start justify-center pl-4 md:pl-10"
          style={{ background: "#0a0908" }}
        >
          <h1 className="font-display text-[13vw] md:text-[7.5vw] leading-[0.95]" style={{ color: "#c9a96e" }}>
            You&rsquo;re
            <br />
            home.
          </h1>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mt-2 md:mt-4" style={{ color: "#c9a96e99" }}>
            Every time
          </span>
        </div>

        <div
          ref={heroChromeRef}
          className="absolute inset-x-0 bottom-28 flex flex-col items-center gap-3 md:bottom-10"
        >
          <p className="font-body text-sm md:text-base text-center max-w-xl px-6 font-bold" style={{ color: "#ffffffcc" }}>
            Hestia keeps this house running on schedule, with the checks,
            terms, and follow-up handled before you get home.
          </p>
          <div className="hidden md:flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,191,0,0.12)]" style={{ borderColor: "#ffbf0033", background: "#ffbf000f" }}>
            {OFFER_POINTS.map((point) => (
              <span
                key={point}
                className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
                style={{ background: "#ffffff18", color: "#ffffffcc" }}
              >
                {point}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em]" style={{ color: "#ffffff99" }}>
            Scroll to walk in
            <ArrowDown size={14} className="animate-bounce" />
          </span>
        </div>
      </section>

      {/* ROOMS */}
      <main className="relative z-10 bg-[var(--bg)]">
        {ROOMS.map((room) => (
          <section
            key={room.id}
            className="room-section relative mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-32"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                room.align === "left" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[4/5]">
                <img
                  src={img(room.image, 1200, 1500)}
                  alt=""
                  className="room-image absolute inset-0 h-[112%] w-full object-cover"
                />
                {room.note && (
                  <div className="absolute top-5 right-5 md:top-8 md:right-8 z-10 max-w-[11rem] md:max-w-[13rem] -rotate-2">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-4 w-12 rounded-sm bg-[var(--clay)]/30" />
                    <div className="rounded-sm bg-[var(--surface)] border border-[var(--line)] p-3.5 shadow-[0_18px_40px_-20px_rgba(43,36,32,0.45)]">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--clay)] mb-2">
                        {room.noteTitle ?? "Hestia note"}
                      </p>
                      {room.note.map((line) => (
                        <p
                          key={line}
                          className="font-display text-[13px] md:text-sm leading-snug mb-1 last:mb-0"
                        >
                          {line}
                        </p>
                      ))}
                      {room.noteMeta && (
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--clay)] mt-2.5">
                          {room.noteMeta}
                        </p>
                      )}
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)] mt-2.5 pt-2 border-t border-[var(--line)]">
                        — Hestia
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="room-text max-w-xl">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--clay)] mb-4">
                  {room.time}
                </p>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-5">
                  {room.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                  {room.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* THE CALL */}
        <section className="relative mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
          <div className="reveal max-w-2xl border-l-2 border-[var(--clay)] pl-6 md:pl-10 md:ml-[8vw]">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--clay)] mb-4">
              Before any of this — one phone call
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] mb-6">
              We start by naming what went wrong before.
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
              <p>
                Every household runs differently — different routines,
                different worries, different things that matter and things
                that genuinely don&rsquo;t. Before anyone sets foot in your
                home, Hestia starts with a short call about what
                &ldquo;good&rdquo; looks like for your family specifically.
              </p>
              <p>
                And after that? If a placement isn&rsquo;t quite right, if
                someone needs to be swapped in or out, if your week
                changes — that&rsquo;s still just a call to Hestia. Not a
                renegotiation. Not starting over. We handle the adjustment.
                You keep your evening.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {HOUSEHOLD_FEARS.map((fear) => (
                <span
                  key={fear}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)]"
                >
                  {fear}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--clay)] text-[var(--surface)] px-5 py-3 text-sm font-semibold tracking-tight transition-transform active:scale-[0.97]"
              >
                <WhatsappLogo size={16} weight="fill" />
                WhatsApp Hestia
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 transition-colors hover:border-[var(--clay)]"
              >
                <Phone size={15} weight="fill" className="text-[var(--clay)]" />
                <span className="font-mono text-sm">{CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* REFERRAL CONTRAST */}
        <section className="relative mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24 border-t border-[var(--line)]">
          <div className="reveal grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--clay)] mb-4">
                The trusted workaround
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-5">
                A name is useful.
                <br />
                Evidence is better.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                Referrals still matter. Hestia just adds the part referrals
                usually skip: written checks, clear terms, and someone
                accountable after the first day.
              </p>
            </div>
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {REFERRAL_COMPARISON.map((item, i) => (
                <div key={item.label} className="py-6 md:py-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--clay)] text-[var(--surface)] font-mono text-xs">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--ink-soft)]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEVEN CHECKS */}
        <section className="checks-section relative overflow-hidden py-20 md:py-32" style={{ background: "#0a0908" }}>
          <div
            className="checks-spotlight pointer-events-none absolute inset-x-0 -top-1/4 h-[150%]"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 20%, #ffbf0018 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal max-w-2xl mb-14 md:mb-20">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--clay)] mb-4">
                The people Hestia sends
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-5 text-white">
                Seven checks.
                <br />
                Stamped before anyone starts.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/75">
                Whoever&rsquo;s placed in your home — this week, or after a
                rotation — has been through the same seven checks. You
                don&rsquo;t vet a stranger, and you don&rsquo;t start over
                when schedules change.
              </p>
            </div>

            <div className="checks-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {TRUST_DIMENSIONS.map((dim, i) => (
                <div
                  key={dim.id}
                  className="check-row relative rounded-sm border border-white/15 bg-white/[0.07] p-6 pt-12 md:p-7 md:pt-14 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]"
                >
                  <div
                    className="absolute -top-4 right-5 md:right-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-dashed border-[var(--clay)] md:h-20 md:w-20"
                    style={{
                      background: "#0a0908",
                      transform: `rotate(${STAMP_ROTATIONS[i % STAMP_ROTATIONS.length]}deg)`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <SealCheck
                        size={18}
                        weight="fill"
                        className="text-[var(--clay)]"
                      />
                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--clay)]">
                        Verified
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[var(--clay)]">
                    0{i + 1}
                  </span>
                  <p className="font-display text-xl md:text-2xl leading-snug text-white mt-2 mb-2">
                    {dim.label}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
                    {dim.question}
                  </p>
                  <p className="text-sm leading-relaxed text-white/75">
                    {dim.detail}
                  </p>
                </div>
              ))}

              <div className="check-row relative rounded-sm border border-dashed border-[var(--clay)]/50 bg-white/[0.07] p-6 md:p-7 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--clay)]">
                    Trust Packet
                  </p>
                  <span className="-rotate-6 rounded-full border border-[var(--clay)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--clay)]">
                    reviewed
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="block font-semibold text-white">
                      Before start
                    </span>
                    <span className="text-white/75">
                      ID, references, skills, and fit notes.
                    </span>
                  </p>
                  <p>
                    <span className="block font-semibold text-white">
                      After start
                    </span>
                    <span className="text-white/75">
                      Day 7 and day 30 check-ins.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELIEF, ON A SCHEDULE */}
        <section className="relative mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--clay)] mb-4">
                What happens next is up to you
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-5">
                Cleaning twice a week. Cooking on weekdays. Whatever your week
                needs.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                Tell Hestia how often, which days, and what&rsquo;s
                included — then change it whenever your life does. More help
                before guests arrive, less during a quiet month. One call,
                and it&rsquo;s adjusted by the next visit.
              </p>
            </div>

            <div className="schedule-card reveal rounded-md border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ink-soft)] mb-6">
                Example household plan
              </p>
              <div className="space-y-6">
                {SCHEDULE.map((row) => (
                  <div key={row.label}>
                    <p className="text-sm font-semibold mb-2.5">
                      {row.label}
                    </p>
                    <div className="flex gap-2">
                      {DAYS.map((d, i) => (
                        <span
                          key={i}
                          className={`day-pill flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full text-xs font-mono ${
                            row.active[i]
                              ? "bg-[var(--clay)] text-[var(--surface)]"
                              : "border border-[var(--line)] text-[var(--ink-soft)]"
                          }`}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 pt-5 border-t border-[var(--line)] text-xs leading-relaxed text-[var(--ink-soft)]">
                Adjust days, add a service, or pause anytime — it&rsquo;s one
                call to Hestia, not a new contract.
              </p>
              <div className="mt-5 rounded-sm bg-[var(--clay-soft)] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--clay)] mb-2">
                  Founding Runda placement
                </p>
                <p className="font-display text-2xl leading-tight">
                  KES 5,000 trust setup
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                  Includes the needs call, Trust Packet, trial support, written
                  terms, and day 7/day 30 check-ins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING / CTA */}
        <section className="closing-section relative px-5 md:px-10 py-24 md:py-36 bg-[var(--ink)] text-[var(--surface)] overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img
              src={img("hestia-evening-calm", 1920, 1200)}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="closing-reveal font-display text-4xl md:text-6xl leading-[1.05] mb-6">
              Tell us what your week
              <br />
              should look like.
            </h2>
            <p className="closing-reveal text-base md:text-lg leading-relaxed text-[var(--surface)]/75 mb-10 max-w-xl mx-auto">
              One call gets you a plan, a placement, and a number
              that&rsquo;s always yours — for schedule changes, concerns, or
              just to ask how it&rsquo;s going.
            </p>
            <div className="closing-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--clay)] text-[var(--surface)] px-7 py-3.5 text-base font-semibold tracking-tight transition-transform active:scale-[0.97]"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp Hestia
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--surface)]/30 px-7 py-3.5 text-base font-semibold tracking-tight transition-transform active:scale-[0.97] hover:bg-[var(--surface)]/10"
              >
                <Phone size={18} weight="fill" />
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="closing-reveal mx-auto mt-8 max-w-2xl overflow-hidden rounded-sm border border-[var(--surface)]/15 bg-[var(--surface)]/8 text-left backdrop-blur-sm">
              <div className="grid grid-cols-1 divide-y divide-[var(--surface)]/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--surface)]/48">
                    Opening group
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight">
                    Nairobi and Kiambu Areas
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--surface)]/48">
                    Setup
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight">
                    {FOUNDING_OFFER.price}
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--surface)]/48">
                    Follow-up
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight">
                    Day 7 and day 30
                  </p>
                </div>
              </div>
              <p className="border-t border-[var(--surface)]/12 p-4 text-xs leading-relaxed text-[var(--surface)]/58">
                Placement depends on household fit and worker availability. If
                the first match is not working, Hestia steps back in to support
                the handover or replacement.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <div className="fixed bottom-3 inset-x-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-[var(--clay)]/20 bg-[var(--surface)]/95 p-2 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden">
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--clay)]/30 bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--ink)] transition-transform active:scale-[0.97]"
        >
          <Phone size={15} weight="fill" className="text-[var(--clay)]" />
          Call
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--clay)] px-4 py-3 text-sm font-semibold text-[var(--surface)] transition-transform active:scale-[0.97]"
        >
          <WhatsappLogo size={15} weight="fill" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
