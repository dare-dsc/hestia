import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { CONTACT, SOCIALS } from "../content/hestia";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--footer-bg)", color: "var(--footer-fg)" }}
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-8">
        <div>
          <p className="font-display text-2xl tracking-tight mb-3">Hestia</p>
          <p className="text-sm leading-relaxed opacity-70 max-w-xs">
            Vetted household help for Nairobi homes — verified, scheduled,
            and one call away.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-4">
            Talk to us
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone size={14} weight="fill" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SOCIALS.email}`}
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <EnvelopeSimple size={14} weight="fill" />
                {SOCIALS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-4">
            Follow along
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <InstagramLogo size={14} weight="fill" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <FacebookLogo size={14} weight="fill" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <TiktokLogo size={14} weight="fill" />
                TikTok
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <LinkedinLogo size={14} weight="fill" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <YoutubeLogo size={14} weight="fill" />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 text-center text-xs opacity-50">
          <span>&copy; 2026 Hestia. Nairobi, Kenya.</span>
        </div>
      </div>
    </footer>
  );
}
