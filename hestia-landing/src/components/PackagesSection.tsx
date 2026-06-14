import { WhatsAppButton } from "./WhatsAppButton";

const PACKAGES = [
  {
    flagship: true,
    name: "Home Reset",
    tagline: "We restore the house from chaos to livable.",
    description:
      "A full domestic reset for overwhelmed homes — dishes, kitchen, bathrooms, floors, laundry, and a general tidy. The flagship trial.",
    cta: "Book the Home Reset trial",
    message: "Hi Hestia, I'd like to book the Home Reset trial.",
  },
  {
    flagship: false,
    name: "Laundry + Cleaning Relief",
    tagline: "Clean clothes, clean space, less stress.",
    description:
      "For bachelors and busy professionals. Clothes washed, folded and ironed where possible. Bedroom tidy, bathroom and kitchen clean.",
    cta: "Book Laundry + Cleaning",
    message: "Hi Hestia, I'd like to book the Laundry + Cleaning Relief trial.",
  },
  {
    flagship: false,
    name: "Mother's Touch Meal + Clean Kitchen",
    tagline: "Not fast food. Home food.",
    description:
      "For anyone tired of eating badly. A simple Kenyan home meal prepared, kitchen cleaned, dishes handled, and a light tidy.",
    cta: "Book Mother's Touch",
    message:
      "Hi Hestia, I'd like to book the Mother's Touch Meal + Clean Kitchen trial.",
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Founding trial packages
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            Three ways to start
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Pick the trial that matches your home&rsquo;s pain point. One
            visit, one clear price, no commitment after.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl p-8 ${
                pkg.flagship
                  ? "bg-ink text-cream"
                  : "border border-line bg-cream-soft text-ink"
              }`}
            >
              {pkg.flagship && (
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
                  Flagship
                </span>
              )}
              <h3
                className={`font-serif text-2xl ${pkg.flagship ? "mt-3" : ""}`}
              >
                {pkg.name}
              </h3>
              <p
                className={`mt-3 font-serif text-lg italic ${
                  pkg.flagship ? "text-cream/80" : "text-ink-soft"
                }`}
              >
                {pkg.tagline}
              </p>
              <p
                className={`mt-4 flex-1 leading-relaxed ${
                  pkg.flagship ? "text-cream/70" : "text-ink-soft"
                }`}
              >
                {pkg.description}
              </p>
              <WhatsAppButton
                message={pkg.message}
                variant={pkg.flagship ? "primary" : "secondary"}
                className={`mt-8 w-full ${
                  !pkg.flagship ? "border-ink/20 hover:border-ink/40" : ""
                }`}
              >
                {pkg.cta}
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
