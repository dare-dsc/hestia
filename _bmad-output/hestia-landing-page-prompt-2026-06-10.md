---
title: "Hestia — Landing Page Build Prompt"
created: "2026-06-10"
inputs:
  - "_bmad-output/hestia-landing-design-brief-2026-06-10.md"
  - "_bmad-output/planning-artifacts/product-brief-hestia.md"
  - "hestia-landing/ (live reference implementation)"
purpose: "Single, self-contained prompt for building/regenerating the Hestia landing page in an AI builder (v0, Lovable, Bolt, Claude, etc.)"
---

# Hestia Landing Page — Build Prompt

Copy everything below the line into your tool of choice.

---

Build a single-page marketing landing site for **Hestia**, a home-relief service
launching in Nairobi, Kenya. Use Next.js 15 (App Router), TypeScript, and Tailwind
CSS v4. Mobile-first, fast, no stock photography — typography, color, and a single
simple SVG mark carry the design.

## Brand & positioning

- Hestia is **not** a maid bureau and **not** a listing platform. The product is not
  the worker — it's a restored home.
- One-line flag (use as the hero headline): **"Hestia restores the home when life
  gets too busy."**
- The promise / core feeling: *"I came home, and life felt lighter."*
- The deeper pain: *"My life is moving faster than my home can keep up."*
- Three Core Feelings — every section should land at least one of these:
  1. **Relief** — the mess is handled, the pile is gone, the sink is clear.
  2. **Care** — the home feels touched by someone who noticed what needed doing, not
     just what was asked.
  3. **Continuity** — not a one-time rescue; Hestia becomes part of the household
     rhythm.
- Currently launching as a **"Founding Homes" trial programme** in Kilimani,
  Lavington, Westlands, and Kileleshwa, Nairobi.
- Primary audience: overwhelmed dual-income couples, single professionals, and
  bachelors, 25–40, in those neighbourhoods. Secondary: new parents, diaspora
  returnees, busy singles.

## Voice & tone

Calm, not urgent. Specific, not generic ("the sink is full, the clothes on the
chair" — never "your home is messy"). Personal before corporate.

| Don't say | Say instead |
|---|---|
| "We supply maids" | "We restore the home" |
| "We have workers available" | "We provide trusted home relief" |
| "We are an agency" | "We stay involved" |
| "We connect you to someone" | "We understand your home's pain point" |
| "Trust us" | "Let us prove the feeling first" |
| "We can do everything" | "We design support around your specific pain stack" |
| "Like Uber for maids" | "Hestia brings order, food, and care back into your home" |

## Visual system

**Palette** — warm earth tones (CSS custom properties + Tailwind v4 `@theme`):

| Token | Hex | Use |
|---|---|---|
| `--color-cream` | `#faf5ee` | Page background |
| `--color-cream-soft` | `#f2e9dd` | Alternating section background |
| `--color-ink` | `#211d19` | Primary text; background for inverted/dark sections |
| `--color-ink-soft` | `#6f6459` | Secondary/body text |
| `--color-clay` | `#c1502e` | Accent — CTAs, eyebrow labels, icon strokes |
| `--color-clay-dark` | `#9c3f22` | Accent hover state |
| `--color-line` | `#e6dccd` | Borders, dividers, card outlines |

**Typography**: Google Fonts **Fraunces** (serif/display) for all headings (h1–h3),
italic pull-quotes, and numbered/lettered labels. **Inter** (sans) for body copy,
nav, buttons, and small uppercase "eyebrow" labels (`text-xs font-semibold uppercase
tracking-[0.25em] text-clay`).

**The mark ("Mark of Contact")**: a simple SVG logo — a large outlined circle
(`stroke="currentColor"`, `strokeWidth="1.5"`, viewBox `0 0 40 40`, circle at
`cx=18 cy=20 r=13`) with a smaller solid clay-colored circle (`cx=29 cy=11 r=5`)
touching its upper-right edge. Read it as the **Care** feeling made visual: one form
attended to by another. Reuse the outline-circle + solid-clay-dot grammar for small
icons elsewhere on the page (e.g. trust checkmarks: an outlined circle with a clay
checkmark inside).

**Layout grammar**:
- Container: `mx-auto max-w-6xl px-6 sm:px-10`.
- Sections stack with `border-t border-line`, alternating `bg-cream` /
  `bg-cream-soft` backgrounds for rhythm. Section vertical padding: `py-20 sm:py-28`.
- Section intro pattern: small clay eyebrow label → serif `h2` (`text-3xl
  sm:text-4xl leading-snug`) → optional ink-soft supporting paragraph or italic
  serif pull-quote.
- Cards: `rounded-lg border border-line bg-cream p-6` (or `bg-cream-soft` for
  contrast on a cream section).
- The single most important element on the page (flagship package, final CTA)
  inverts to `rounded-2xl` / full-bleed `bg-ink text-cream`, with `text-cream/70`–
  `/80` for secondary text inside.
- CTAs are pill-shaped (`rounded-full`, `px-7 py-3.5`, `text-sm font-semibold`).
  - Primary: `bg-clay text-cream hover:bg-clay-dark`
  - Secondary: `border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]`
  - Ghost/link: `text-clay underline underline-offset-4 hover:text-clay-dark`

**Conversion mechanism**: every CTA links to WhatsApp via a `wa.me` deep link with a
pre-filled message — `https://wa.me/<NUMBER>?text=<url-encoded message>`. There is no
booking form, account system, or payment flow. Centralize the phone number and a
`whatsappLink(message)` helper in one config file.

## Page structure (in order)

### 1. Header
Logo mark + "Hestia" wordmark (serif) on the left. Nav links: "Trial packages", "How
it works", "Trust" (anchor links to those sections). Right-aligned WhatsApp CTA
button: "Message us" → *"Hi Hestia, I'd like to know more about a trial."*

### 2. Hero
- Eyebrow: "Founding Homes · Kilimani, Lavington & Westlands"
- H1 (serif, large): "Hestia restores the home when life gets too busy."
- Supporting paragraph: "The dishes. The laundry on the chair. No proper food in the
  house. We handle the backlog so you come home to relief — not another job waiting
  for you."
- Primary CTA: "Book your Home Reset trial" → *"Hi Hestia, I'd like to book a Home
  Reset trial."*
- Secondary link: "See how it works" (anchor to How It Works)
- Small reassurance line below: "One visit. One clear price. No commitment after."
- Subtle warm radial gradient accent in the corner using the clay color at low
  opacity.

### 3. Problem section (bg-cream-soft)
- Eyebrow: "Sound familiar?"
- H2: "Your life is moving faster than your home can keep up."
- Italic serif pull-quote: *"You come home. The sink is full. The clothes are on the
  chair. And you just sit down — because where do you even start?"*
- Supporting paragraph reframing: this was never about needing a maid — dishes
  accumulate, clean clothes run out, food disappears, the backlog compounds until
  Sunday becomes a chore marathon or a guest visit triggers a panic clean.
- Side list, "What you've probably already tried" — five items, each a struck-out
  attempt with a one-line note on why it didn't work:
  - A mama fua for laundry — but nothing else piles up less
  - A bureau cleaner — who came once and never returned
  - Asking a relative — unreliable, and it costs the relationship
  - Takeaway — solves food for one night, not the home
  - Doing nothing — until the backlog breaks you

### 4. Feelings section (bg-cream)
- Eyebrow: "What changes"
- H2: "The product isn't a worker. It's a feeling."
- Italic serif pull-quote: *"I came home, and life felt lighter."*
- Three-column layout, each numbered (01/02/03, serif, clay):
  - **Relief** — the mess is handled, the pile is gone, the sink is clear, you can
    finally exhale.
  - **Care** — your home feels touched by someone who noticed what needed doing —
    not just what was asked.
  - **Continuity** — not a one-time rescue; Hestia learns your home and becomes
    part of its rhythm, week after week.

### 5. Services section (bg-cream-soft)
- Eyebrow: "What we handle"
- H2: "The full domestic backlog — or just the part that's piling up."
- Five cards in a row (responsive grid): Cleaning, Dishes, Laundry, Home-style meals
  (chapati and stew, ugali and greens, pilau — "food that feels like home"), Tidy &
  reset.
- Closing italic serif line: "Not all of this, every visit. Some homes are buried in
  laundry. Some have no food in the house. Some just need the kitchen reset. We
  shape each visit to your home's specific pain stack."

### 6. Packages section — `id="packages"` (bg-cream)
- Eyebrow: "Founding trial packages"
- H2: "Three ways to start"
- Supporting line: "Pick the trial that matches your home's pain point. One visit,
  one clear price, no commitment after."
- Three cards:
  1. **Home Reset** *(flagship — inverted bg-ink/text-cream card)* — "We restore the
     house from chaos to livable." Full domestic reset: dishes, kitchen, bathrooms,
     floors, laundry, general tidy. CTA: "Book the Home Reset trial."
  2. **Laundry + Cleaning Relief** — "Clean clothes, clean space, less stress." For
     bachelors and busy professionals — clothes washed/folded/ironed, bedroom tidy,
     bathroom and kitchen clean. CTA: "Book Laundry + Cleaning."
  3. **Mother's Touch Meal + Clean Kitchen** — "Not fast food. Home food." A simple
     Kenyan home meal prepared, kitchen cleaned, dishes handled, light tidy. CTA:
     "Book Mother's Touch."
- Each CTA is a WhatsApp deep link with a package-specific pre-filled message.

### 7. How It Works section — `id="how-it-works"` (bg-cream-soft)
- Eyebrow: "How it works"
- H2: "You're not just a customer. You're a founding home."
- Supporting paragraph: Phase 1 is a manual founding-homes programme — working
  closely with a small number of households to prove the feeling before scaling.
- "Currently serving" callout box listing the zone areas (Kilimani, Lavington,
  Westlands, Kileleshwa, Nairobi).
- Numbered steps (1–4):
  1. Message us on WhatsApp — tell us about your home and which trial fits.
  2. We come understand your home — a short visit to map your pain stack.
  3. Your first trial, supervised — a founder/supervisor present, one clear price,
     no commitment after.
  4. If it feels lighter, we build your plan — weekly or monthly support shaped to
     your home's rhythm.

### 8. Trust section — `id="trust"` (bg-cream)
- Eyebrow: "Why let us in"
- H2: "Trust isn't assumed. It's built."
- Supporting line: letting someone into your home is a big ask — here's how we earn
  it before you say yes.
- Six items in a grid, each with the outline-circle + clay-checkmark icon:
  - Verified Partners — government ID + DCI police clearance on file for every
    Hestia Home Care Partner
  - Identifiable presence — uniformed and easy to recognise on arrival
  - Supervised first visit — a founder or supervisor present every time
  - Clear pricing — one price agreed upfront, no hidden costs
  - You're in control — be present for the whole visit, or come and go
  - A founder you can reach — a real person, accountable for what happens in your
    home

### 9. Final CTA section (full-bleed bg-ink text-cream)
- H2: "Ready for your home to feel lighter?"
- Supporting line: "One visit. One clear price. No commitment after. If you want
  your home back — not Saturday, this week — message us."
- Primary CTA: "Book your trial on WhatsApp"

### 10. Footer (bg-ink text-cream/70)
- Logo mark + "Hestia" wordmark
- Location line: "Nairobi, Kenya — Founding Homes programme"
- "Message us on WhatsApp" link

## Technical notes

- Centralize the WhatsApp number and zone areas (`["Kilimani", "Lavington",
  "Westlands", "Kileleshwa"]`) in a small config/lib file with a `whatsappLink(text)`
  helper that returns `https://wa.me/<number>?text=${encodeURIComponent(text)}`.
- Page `<title>`: "Hestia — Restore the home when life gets too busy." Meta
  description should mention the founding-homes programme and the zone areas.
- No images/illustrations required for v1 — rely on type, color, whitespace, and the
  Mark of Contact + outline-circle icon family.
- Fully responsive: single column on mobile, multi-column grids from `sm`/`lg`
  breakpoints as described per section above.
