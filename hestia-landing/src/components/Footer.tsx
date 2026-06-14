import { Logo } from "./Logo";
import { whatsappLink } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-center gap-2.5 text-cream">
          <Logo className="h-6 w-6" />
          <div>
            <p className="font-serif text-lg leading-none">Hestia</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em]">
              A mother&rsquo;s touch
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm sm:items-end">
          <p>Nairobi, Kenya — Founding Homes programme</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-cream/30 hover:text-cream hover:decoration-cream"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
