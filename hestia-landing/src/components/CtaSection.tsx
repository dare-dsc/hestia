import { WhatsAppButton } from "./WhatsAppButton";

export function CtaSection() {
  return (
    <section className="border-t border-line bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
        <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
          Ready for your home to feel lighter?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">
          One visit. One clear price. No commitment after. If you want your
          home back — not Saturday, this week — message us.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton message="Hi Hestia, I'd like to book a trial.">
            Book your trial on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
