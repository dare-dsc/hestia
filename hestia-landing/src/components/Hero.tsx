import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(193,80,46,0.12) 0%, rgba(193,80,46,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
          Founding Homes · Kilimani, Lavington &amp; Westlands
        </p>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl sm:leading-tight">
          Hestia restores the home when life gets too busy.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          The dishes. The laundry on the chair. No proper food in the house.
          We handle the backlog so you come home to relief — not another job
          waiting for you.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton>
            Book your Home Reset trial
          </WhatsAppButton>
          <a
            href="#how-it-works"
            className="text-sm font-semibold text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
          >
            See how it works
          </a>
        </div>

        <p className="mt-6 text-sm text-ink-soft">
          One visit. One clear price. No commitment after.
        </p>
      </div>
    </section>
  );
}
