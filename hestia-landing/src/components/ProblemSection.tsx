const ATTEMPTS = [
  {
    title: "A mama fua for laundry",
    note: "but nothing else piles up less",
  },
  {
    title: "A bureau cleaner",
    note: "who came once and never returned",
  },
  {
    title: "Asking a relative",
    note: "unreliable, and it costs the relationship",
  },
  {
    title: "Takeaway",
    note: "solves food for one night, not the home",
  },
  {
    title: "Doing nothing",
    note: "until the backlog breaks you",
  },
];

export function ProblemSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              Sound familiar?
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              Your life is moving faster than your home can keep up.
            </h2>

            <blockquote className="mt-8 border-l-2 border-ink pl-6 font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">
              &ldquo;You come home. The sink is full. The clothes are on the
              chair. And you just sit down — because where do you even
              start?&rdquo;
            </blockquote>

            <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">
              This was never about needing a maid. Dishes accumulate. Clean
              clothes run out. Proper food disappears. The backlog compounds
              until Sunday becomes a chore marathon — or a guest visit
              triggers a panic clean.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
              What you&rsquo;ve probably already tried
            </p>
            <ul className="mt-6 space-y-4">
              {ATTEMPTS.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-lg border border-line bg-cream px-5 py-4"
                >
                  <span className="mt-0.5 text-lg leading-none text-ink-soft">
                    &times;
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-sm text-ink-soft">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
