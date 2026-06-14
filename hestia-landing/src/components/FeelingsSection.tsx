const FEELINGS = [
  {
    label: "01",
    title: "Relief",
    description:
      "The mess is handled. The pile is gone. The sink is clear. You can finally exhale.",
  },
  {
    label: "02",
    title: "Care",
    description:
      "Your home feels touched by someone who noticed what needed doing — not just what was asked. A mother's touch.",
  },
  {
    label: "03",
    title: "Continuity",
    description:
      "Not a one-time rescue. Hestia learns your home and becomes part of its rhythm — week after week.",
  },
];

export function FeelingsSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            What changes
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            The product isn&rsquo;t a worker. It&rsquo;s a feeling.
          </h2>
          <p className="mt-5 font-serif text-xl italic leading-relaxed text-ink-soft">
            &ldquo;I came home, and life felt lighter.&rdquo;
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {FEELINGS.map((feeling) => (
            <div key={feeling.label}>
              <span className="font-serif text-sm text-clay">
                {feeling.label}
              </span>
              <h3 className="mt-3 font-serif text-2xl">{feeling.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {feeling.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
