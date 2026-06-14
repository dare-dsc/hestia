---
title: "Hestia — Landing Page & Platform Design Brief"
created: "2026-06-10"
inputs:
  - "_bmad-output/planning-artifacts/product-brief-hestia.md"
  - "_bmad-output/design-thinking-2026-05-26.md"
  - "_bmad-output/hestia-launch-script-2026-06-02.md"
  - "hestia-landing/ (live Next.js site — canonical visual reference)"
---

# Hestia — Landing Page & Platform Design Brief

## 0. Brand foundation (from the product brief)

This brief is grounded in the Product Brief, not the "a mother's touch" catchphrase
from the design-thinking session — that line still appears in a few places in the
current build (see note at the end of this section), but it is not the driver here.

**Core positioning** (from the Executive Summary):
- Hestia is **not** a maid bureau, not a listing platform.
- "The product is not the worker. The product is the feeling: *'I came home, and
  life felt lighter.'*"
- One-line flag: **"Hestia restores the home when life gets too busy."**
- The deeper pain Hestia answers: *"My life is moving faster than my home can keep
  up."* The emotional costs are shame (unannounced guests), fatigue (carrying the
  home alone), a hollow feeling (eating badly because the kitchen is a mess), and
  low-grade stress (the disorder waiting at home).

**The Three Core Feelings Hestia creates** — the emotional spine for all visual and
copy decisions:
1. **Relief** — the mess is handled. The pile is gone. The sink is clear.
2. **Care** — the home feels touched by someone who noticed what needed doing, not
   just what was asked.
3. **Continuity** — not a one-time rescue. Hestia becomes part of the household
   rhythm.

**A note on "a mother's touch":** the current `hestia-landing` build uses this phrase
in three places — the footer tagline, a sentence inside the "Care" feeling
description, and the name of trial Package C ("Mother's Touch Meal + Clean
Kitchen," which is the literal Option C name in the Product Brief). Per this
direction, the phrase shouldn't be the *organizing* idea for new design work. Worth
flagging for a future pass: the footer tagline and the "Care" sentence could be
swapped for Product Brief language (e.g. the one-line flag, or *"I came home, and
life felt lighter"*) — but that's a copy decision, not made here.

---

## Prompt A — For AI design/code tools (extending `hestia-landing`)

> You are extending the Hestia marketing site — Next.js 15, App Router, Tailwind v4,
> TypeScript. Match the existing design system exactly. Do not introduce new colors,
> fonts, or layout idioms without a strong reason — the system below is deliberate
> and already shipped.
>
> **Brand in one line:** Hestia is a home-relief service for overwhelmed Kenyan
> households. Hestia is not a maid bureau or listing platform — the product is not
> the worker, it's a restored home. One-line flag: *"Hestia restores the home when
> life gets too busy."* The feeling it delivers: *"I came home, and life felt
> lighter."*
>
> **The Three Core Feelings** drive emotional tone — every section should land one of:
> **Relief** (the backlog is gone), **Care** (someone noticed what needed doing),
> **Continuity** (this becomes part of your household rhythm).
>
> **Palette** (defined in `globals.css` as CSS custom properties + Tailwind v4 `@theme`):
> | Token | Hex | Use |
> |---|---|---|
> | `--color-cream` | `#faf5ee` | Page background |
> | `--color-cream-soft` | `#f2e9dd` | Alternating section background |
> | `--color-ink` | `#211d19` | Primary text; background for "inverted"/dark sections |
> | `--color-ink-soft` | `#6f6459` | Secondary/body text |
> | `--color-clay` | `#c1502e` | Accent — CTAs, eyebrow labels, icon strokes, the "touch" dot in the mark |
> | `--color-clay-dark` | `#9c3f22` | Accent hover state |
> | `--color-line` | `#e6dccd` | Borders, dividers, card outlines |
>
> **Typography**:
> - **Fraunces** (serif/display, `--font-display`) — all headings (h1–h3), pull-quotes
>   (set in italic), numbered/lettered labels ("01", "1", "Flagship").
> - **Inter** (sans, `--font-body`) — body copy, nav, buttons, and the small uppercase
>   "eyebrow" labels (`text-xs font-semibold uppercase tracking-[0.25em] text-clay`).
>
> **Layout grammar**:
> - Container: `mx-auto max-w-6xl px-6 sm:px-10`.
> - Sections stack with `border-t border-line`, alternating `bg-cream` /
>   `bg-cream-soft` for rhythm. Section vertical padding: `py-20 sm:py-28`.
> - Section intro pattern: small clay eyebrow label → serif `h2` (text-3xl/text-4xl,
>   `leading-snug`) → optional `ink-soft` supporting paragraph or italic serif
>   pull-quote.
> - Cards: `rounded-lg border border-line bg-cream p-6` (or `bg-cream-soft` on a
>   `bg-cream` section, for contrast).
> - Feature/flagship elements invert to `rounded-2xl bg-ink text-cream` with
>   `text-cream/70`–`/80` for secondary text inside.
> - CTAs are pill-shaped (`rounded-full`), WhatsApp-first via `wa.me` deep links
>   (`whatsappLink()` in `src/lib/site-config.ts`, rendered by `WhatsAppButton`):
>   - `primary`: `bg-clay text-cream hover:bg-clay-dark`
>   - `secondary`: `border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]`
>   - `ghost`: `text-clay underline underline-offset-4 hover:text-clay-dark`
>
> **The mark ("Mark of Contact")**: `Logo.tsx` — a large outlined circle
> (`stroke="currentColor"`, `strokeWidth="1.5"`) with a smaller solid `clay` circle
> touching its upper-right edge. Read it as the **Care** feeling made visual: one
> form, attended to by another. Reuse this outline-circle + solid-clay-dot grammar
> for new icons/accents (the Trust section's checkmark icon already follows this —
> outlined circle, clay stroke, checkmark inside).
>
> **Voice** — apply the Product Brief's "What Hestia Does Not Say" table to all new copy:
> | Don't say | Say instead |
> |---|---|
> | "We supply maids" | "We restore the home" |
> | "We have workers available" | "We provide trusted home relief" |
> | "We are an agency" | "We stay involved" |
> | "We connect you to someone" | "We understand your home's pain point" |
> | "Trust us" | "Let us prove the feeling first" |
> | "We can do everything" | "We design support around your specific pain stack" |
> | "Like Uber for maids" | "Hestia brings order, food, and care back into your home" |
>
> Other voice rules: calm, not urgent. Specific, not generic ("the sink is full, the
> clothes on the chair" — never "your home is messy"). Personal before corporate.
> Recurring anchor lines to reuse verbatim: *"My life is moving faster than my home
> can keep up,"* *"I don't have to carry this alone anymore,"* *"I came home, and
> life felt lighter,"* *"You come home, and the house feels like yours again."*
>
> **When building new sections or platform screens** (booking flow, partner profile,
> dashboard, etc.):
> - Reuse the eyebrow + serif-heading + ink-soft-body intro pattern for every new
>   section.
> - Keep alternating cream/cream-soft section backgrounds for rhythm; reserve
>   `bg-ink text-cream` for the single most important element on a page (flagship
>   package, final CTA).
> - Extend the Mark of Contact grammar (outline shape + solid clay dot) for new
>   icons, status indicators, or loading states — don't introduce a second icon
>   style.
> - WhatsApp remains the only conversion path until a booking platform exists —
>   don't add forms, modals, or account flows without checking this is still true.

---

## Prompt B — For a human designer (what the dev build doesn't cover)

> **The brand**: Hestia is a home-relief service launching in Nairobi (Kilimani,
> Lavington, Westlands, Kileleshwa) under a "Founding Homes" trial programme. It is
> explicitly **not** a maid bureau or listing platform — it sells the *feeling* of a
> home restored, delivered by trained "Hestia Home Care Partners." One-line flag:
> *"Hestia restores the home when life gets too busy."*
>
> **The emotional core — Three Core Feelings**:
> 1. **Relief** — the mess is handled, the pile is gone, the sink is clear.
> 2. **Care** — the home feels touched by someone who noticed what needed doing.
> 3. **Continuity** — not a rescue, a rhythm — Hestia becomes part of the household.
>
> **Who needs to feel this**:
> | Audience | Who they are | What they need to feel |
> |---|---|---|
> | **Overwhelmed Busy Professional** (primary) | Dual-income couples, single professionals, bachelors, 25–40, Kilimani/Lavington/Westlands/Kileleshwa | "Someone finally gets it — my house is a disaster and I have no energy to fix it" |
> | **New Parent** | Domestic load doubled, capacity unchanged | Maternal-quality relief, high loyalty |
> | **Diaspora Returner** | KES 200K+/month, used structured home services abroad | Structured, professional, reliable — not informal |
> | **Busy Single** | Bachelor/bachelorette living alone | The exact bundle (laundry + cleaning + simple meal) for one person |
> | **Hestia Home Care Partners** (supply side) | Trained, trusted people — Hestia is their professional home | Pride, dignity, a visible career ladder (Partner → Senior Partner → Supervisor → Trainer) |
>
> **The mark already chosen**: from a design-thinking session, the team selected
> **"The Mark of Contact"** — a single, minimal mark of one form making deliberate
> contact with another (not a house, hand, or hearth — those were explored and
> rejected as category-generic). It's been prototyped in code as a large outlined
> circle touched by a small solid terracotta dot. Treat this as **directionally
> locked** — read it as the **Care** feeling made visual ("the home feels touched by
> someone who noticed"), and as **Continuity** (an ongoing point of contact, not a
> one-off). The job is to refine/vectorize it into a real mark system, not replace
> the concept.
>
> **The palette already chosen**: warm earth tones — cream (`#faf5ee`/`#f2e9dd`),
> near-black ink (`#211d19`), warm grey-brown (`#6f6459`), and a terracotta/clay
> accent (`#c1502e`/`#9c3f22`). Typography is Fraunces (a warm serif) for
> headings/quotes and Inter for body — also locked.
>
> **The Trust Architecture** (from the Product Brief — has direct visual implications):
> - *Client-facing trust signals*: government ID + DCI police clearance per Partner,
>   a uniform/identifiable presence, a supervisor present at the first visit, clear
>   upfront pricing, the client free to be present throughout, a reachable founder.
> - *Partner-facing trust signals*: a steady booking calendar, on-time payment, a
>   reputation profile that builds over time, a visible senior career path (Partner →
>   Senior Partner → Supervisor → Trainer), and the identity *"I am a Hestia Home Care
>   Partner"* — not "a random cleaner."
>
> ### What's needed
>
> 1. **Refined Mark of Contact** — production-ready vector mark. Explore weight,
>    proportion, and whether the "touch" should feel like a fingertip, a held breath,
>    or an impression.
> 2. **Photography direction** — the current site has *no* photography, only type and
>    line icons. Define a direction for: real Kenyan homes (lived-in, not
>    showroom-staged), real Hestia Home Care Partners (dignified, professional —
>    never posed as "domestic worker" stereotypes), and home-style food (chapati,
>    ugali, pilau — "not fast food, not hotel food"), working against the warm
>    cream/clay palette.
> 3. **Partner-facing identity** — a uniform/ID badge concept, and a "profile card"
>    visual language that could later represent a Partner's reputation/tier from the
>    career ladder above. Should feel aspirational, not corporate-uniform.
> 4. **Social & ad templates** — the launch script specifies vertical video (9:16),
>    auto-captions, a warm "Film/Golden" color grade at 25–30%, and a bold
>    text-overlay treatment for the filter line ("Not Saturday. This week."). Produce
>    a caption/overlay style and a small end-card/bug using the Mark of Contact,
>    consistent with the cream/clay palette, for WhatsApp Status, Reels, and TikTok.
> 5. **Icon set** — beyond the Trust section's single checkmark icon, the platform
>    needs icons for the five service categories (cleaning, dishes, laundry, meals,
>    tidy/reset) and future platform UI (booking steps, statuses). Extend the
>    outline-circle + clay-accent grammar of the Mark of Contact into a small,
>    consistent icon family.
>
> ### Tone guardrails — "What Hestia Does Not Say" (apply to all visual decisions, not just copy)
>
> | Don't say / show | Say / show instead |
> |---|---|
> | "We supply maids" | "We restore the home" |
> | "We have workers available" | "We provide trusted home relief" |
> | "We are an agency" | "We stay involved" |
> | "We connect you to someone" | "We understand your home's pain point" |
> | "Trust us" | "Let us prove the feeling first" |
> | "We can do everything" | "We design support around your specific pain stack" |
> | "Like Uber for maids" | "Hestia brings order, food, and care back into your home" |
>
> **Reference**: the live `hestia-landing` site (cream/clay/ink palette, Fraunces +
> Inter, Mark of Contact logo) is the canonical starting point — every new asset
> should feel like it belongs next to it.
