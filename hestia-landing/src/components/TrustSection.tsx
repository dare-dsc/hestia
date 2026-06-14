const TRUST_POINTS = [
  {
    title: "Verified Partners",
    description:
      "Government ID and a police clearance (DCI) certificate on file for every Hestia Home Care Partner.",
  },
  {
    title: "Identifiable presence",
    description: "Uniformed and easy to recognise the moment they arrive.",
  },
  {
    title: "Supervised first visit",
    description:
      "A founder or supervisor is present for your first visit, every time.",
  },
  {
    title: "Clear pricing",
    description: "One price, agreed upfront. No hidden costs, ever.",
  },
  {
    title: "You're in control",
    description:
      "Be present for the whole visit, or come and go as you please.",
  },
  {
    title: "A founder you can reach",
    description:
      "Not a call centre. A real person, accountable for what happens in your home.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Why let us in
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            Trust isn&rsquo;t assumed. It&rsquo;s built.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Letting someone into your home is a big ask. Here&rsquo;s how we
            earn it — before you ever say yes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="flex gap-4">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-shrink-0 text-clay"
              >
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M6 10.5l2.5 2.5L14 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="font-serif text-lg">{point.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
