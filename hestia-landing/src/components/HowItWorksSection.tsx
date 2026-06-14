import { ZONE_1_AREAS } from "@/lib/site-config";

const STEPS = [
  {
    number: "1",
    title: "Message us on WhatsApp",
    description:
      "Tell us a little about your home and which trial fits — Home Reset, Laundry + Cleaning, or Mother's Touch.",
  },
  {
    number: "2",
    title: "We come understand your home",
    description:
      "A short visit to map your home's specific pain stack — what piles up first, and what's missing.",
  },
  {
    number: "3",
    title: "Your first trial, supervised",
    description:
      "A founder or supervisor is present for the first visit. One clear price. No commitment after.",
  },
  {
    number: "4",
    title: "If it feels lighter, we build your plan",
    description:
      "Weekly or monthly support, shaped around your home's rhythm — not a generic package.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              How it works
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              You&rsquo;re not just a customer. You&rsquo;re a founding home.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Phase 1 is a manual founding homes programme. We&rsquo;re
              working closely with a small number of households to prove the
              feeling before we scale — and you&rsquo;re helping shape what
              Hestia becomes.
            </p>

            <div className="mt-8 rounded-lg border border-line bg-cream px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                Currently serving
              </p>
              <p className="mt-2 leading-relaxed">
                {ZONE_1_AREAS.join(" · ")}, Nairobi
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-8">
              {STEPS.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="font-serif text-2xl text-clay">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
