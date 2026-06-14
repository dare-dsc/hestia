const SERVICES = [
  {
    title: "Cleaning",
    description: "Kitchen, bathrooms, floors and surfaces — reset and wiped down.",
  },
  {
    title: "Dishes",
    description: "Cleared, washed, and put away. The sink, empty.",
  },
  {
    title: "Laundry",
    description: "Washed, dried, folded, sorted — ironed where needed.",
  },
  {
    title: "Home-style meals",
    description:
      "Real Kenyan cooking — chapati and stew, ugali and greens, pilau. Food that feels like home.",
  },
  {
    title: "Tidy & reset",
    description:
      "Organising, bedding, and the small resets that make a home feel cared for.",
  },
];

export function ServicesSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            What we handle
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            The full domestic backlog — or just the part that&rsquo;s piling
            up.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-line bg-cream p-6"
            >
              <h3 className="font-serif text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-soft">
          Not all of this, every visit. Some homes are buried in laundry. Some
          have no food in the house. Some just need the kitchen reset. We
          shape each visit to your home&rsquo;s specific pain stack.
        </p>
      </div>
    </section>
  );
}
