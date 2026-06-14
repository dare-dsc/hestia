import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7 text-ink" />
          <span className="font-serif text-xl tracking-wide">Hestia</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#packages" className="hover:text-ink">
            Trial packages
          </a>
          <a href="#how-it-works" className="hover:text-ink">
            How it works
          </a>
          <a href="#trust" className="hover:text-ink">
            Trust
          </a>
        </nav>

        <WhatsAppButton
          className="px-5 py-2.5 text-xs sm:text-sm"
        >
          Message us
        </WhatsAppButton>
      </div>
    </header>
  );
}
