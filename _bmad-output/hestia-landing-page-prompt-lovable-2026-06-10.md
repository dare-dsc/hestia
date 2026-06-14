---
title: "Hestia — Landing Page Prompt (Lovable)"
created: "2026-06-10"
inputs:
  - "_bmad-output/hestia-landing-design-brief-2026-06-10.md"
  - "_bmad-output/hestia-landing-page-prompt-2026-06-10.md"
purpose: "Lovable.dev-ready prompt (React + Vite + Tailwind + shadcn/ui) for the Hestia landing page"
---

# Hestia Landing Page — Lovable Prompt

Paste everything below the line into Lovable as your first message.

---

Create a single-page landing site for **Hestia**, a home-relief service launching in
Nairobi, Kenya. It is **not** a maid bureau or listing platform — the product is not
the worker, it's a restored home. The promise: *"Hestia restores the home when life
gets too busy"* and *"I came home, and life felt lighter."* It's currently launching
as a **"Founding Homes" trial programme** in Kilimani, Lavington, Westlands and
Kileleshwa for overwhelmed dual-income couples, single professionals, bachelors, new
parents and diaspora returnees aged 25–40.

**Design system** — set this up first as the global theme (CSS variables / Tailwind
config / shadcn theme tokens), then build every section from it:

- **Colors** (warm earth tones, light mode only):
  - `cream` `#FAF5EE` — page background
  - `cream-soft` `#F2E9DD` — alternating section background
  - `ink` `#211D19` — primary text + background for inverted/dark sections
  - `ink-soft` `#6F6459` — secondary/body text
  - `clay` `#C1502E` — primary accent (CTAs, eyebrow labels, icon strokes)
  - `clay-dark` `#9C3F22` — accent hover state
  - `line` `#E6DCCD` — borders/dividers
- **Typography**: load **Fraunces** (serif/display) from Google Fonts for all
  headings (h1–h3), italic pull-quotes, and numbered/lettered labels; **Inter**
  (sans) for body copy, nav, buttons, and small uppercase tracked-out "eyebrow"
  labels (`text-xs font-semibold uppercase tracking-[0.25em] text-clay`).
- **Logo / mark — "Mark of Contact"**: a simple inline SVG, large outlined circle
  (stroke = currentColor, strokeWidth 1.5, viewBox `0 0 40 40`, circle at `cx=18
  cy=20 r=13`) touched at its upper-right edge by a smaller solid `clay` circle
  (`cx=29 cy=11 r=5`). Represents "Care" — one form attended to by another. Reuse
  this outline-circle + solid-clay-dot grammar for small icons (e.g. trust
  checkmarks: outlined circle with a clay checkmark inside).
- **Layout**: centered `max-w-6xl` container with generous side padding. Sections
  stack with a top border and alternate `cream` / `cream-soft` backgrounds for
  rhythm, with large vertical padding (`py-20`/`py-28` equivalent). Each section
  opens with a small clay eyebrow label, then a serif heading, then optional
  ink-soft body text or an italic serif pull-quote.
- **Cards**: rounded corners, `line`-colored 1px border, `cream` or `cream-soft`
  background. The single most important element on the page (the flagship package
  card and the final CTA band) inverts to a dark `ink` background with `cream` text.
- **Buttons** (pill-shaped, `rounded-full`):
  - Primary: `clay` background, `cream` text, darkens to `clay-dark` on hover
  - Secondary: `ink/20` border, `ink` text, border darkens on hover
  - Ghost/link: `clay` text, underlined
- **No stock photography or illustrations** — typography, color, whitespace, and the
  Mark of Contact + outline-circle icon family carry the entire visual design.

**Tone/voice** for all copy: calm, not urgent; specific, not generic ("the sink is
full, the clothes on the chair," never "your home is messy"); personal before
corporate. Never use the words "maids," "agency," "workers available," "trust us,"
or "Uber for maids" — instead: "we restore the home," "we stay involved," "let us
prove the feeling first," "we design support around your specific pain stack."

**Functionality**: this is a content-only marketing site — no auth, no database, no
forms. Every call-to-action button is a link to WhatsApp with a pre-filled message:
`https://wa.me/254700000000?text=` + URL-encoded message (use a small shared helper
function for this). Fully responsive, single column on mobile.

**Build these sections in order:**

1. **Header** — Mark of Contact logo + "Hestia" serif wordmark on the left. Nav
   links to "Trial packages", "How it works", "Trust" sections. Right-aligned
   WhatsApp button: "Message us" → *"Hi Hestia, I'd like to know more about a
   trial."*

2. **Hero** — Eyebrow: "Founding Homes · Kilimani, Lavington & Westlands". Large
   serif H1: "Hestia restores the home when life gets too busy." Body: "The dishes.
   The laundry on the chair. No proper food in the house. We handle the backlog so
   you come home to relief — not another job waiting for you." Primary CTA: "Book
   your Home Reset trial" → *"Hi Hestia, I'd like to book a Home Reset trial."*
   Secondary text link: "See how it works" (scrolls to How It Works). Small line
   below: "One visit. One clear price. No commitment after." Add a subtle warm
   radial gradient accent (clay at low opacity) in one corner.

3. **Problem** (`cream-soft` background) — Eyebrow: "Sound familiar?" H2: "Your life
   is moving faster than your home can keep up." Italic serif pull-quote: "You come
   home. The sink is full. The clothes are on the chair. And you just sit down —
   because where do you even start?" Body paragraph reframing: this was never about
   needing a maid — dishes accumulate, clean clothes run out, food disappears, the
   backlog compounds until Sunday becomes a chore marathon or a guest visit triggers
   a panic clean. Beside it, a list titled "What you've probably already tried" with
   five struck-through attempts and a one-line note each: "A mama fua for laundry —
   but nothing else piles up less"; "A bureau cleaner — who came once and never
   returned"; "Asking a relative — unreliable, and it costs the relationship";
   "Takeaway — solves food for one night, not the home"; "Doing nothing — until the
   backlog breaks you."

4. **Feelings** (`cream` background) — Eyebrow: "What changes." H2: "The product
   isn't a worker. It's a feeling." Italic serif pull-quote: "I came home, and life
   felt lighter." Three columns, each numbered 01/02/03 in clay serif:
   - **Relief** — "The mess is handled. The pile is gone. The sink is clear. You can
     finally exhale."
   - **Care** — "Your home feels touched by someone who noticed what needed doing —
     not just what was asked."
   - **Continuity** — "Not a one-time rescue. Hestia learns your home and becomes
     part of its rhythm — week after week."

5. **Services** (`cream-soft` background) — Eyebrow: "What we handle." H2: "The full
   domestic backlog — or just the part that's piling up." Five cards: **Cleaning**
   (kitchen, bathrooms, floors and surfaces — reset and wiped down), **Dishes**
   (cleared, washed, and put away — the sink, empty), **Laundry** (washed, dried,
   folded, sorted, ironed where needed), **Home-style meals** (real Kenyan cooking —
   chapati and stew, ugali and greens, pilau — food that feels like home), **Tidy &
   reset** (organising, bedding, and small resets that make a home feel cared for).
   Below the cards, an italic serif line: "Not all of this, every visit. Some homes
   are buried in laundry. Some have no food in the house. Some just need the kitchen
   reset. We shape each visit to your home's specific pain stack."

6. **Trial Packages** (`cream` background, anchor id "packages") — Eyebrow: "Founding
   trial packages." H2: "Three ways to start." Body: "Pick the trial that matches
   your home's pain point. One visit, one clear price, no commitment after." Three
   cards:
   - **Home Reset** *(flagship — inverted dark `ink`/`cream` card, marked
     "Flagship")* — "We restore the house from chaos to livable." A full domestic
     reset for overwhelmed homes — dishes, kitchen, bathrooms, floors, laundry, and
     a general tidy. CTA: "Book the Home Reset trial" → *"Hi Hestia, I'd like to
     book the Home Reset trial."*
   - **Laundry + Cleaning Relief** — "Clean clothes, clean space, less stress." For
     bachelors and busy professionals — clothes washed, folded and ironed where
     possible, bedroom tidy, bathroom and kitchen clean. CTA: "Book Laundry +
     Cleaning" → *"Hi Hestia, I'd like to book the Laundry + Cleaning Relief
     trial."*
   - **Mother's Touch Meal + Clean Kitchen** — "Not fast food. Home food." A simple
     Kenyan home meal prepared, kitchen cleaned, dishes handled, and a light tidy.
     CTA: "Book Mother's Touch" → *"Hi Hestia, I'd like to book the Mother's Touch
     Meal + Clean Kitchen trial."*

7. **How It Works** (`cream-soft` background, anchor id "how-it-works") — Eyebrow:
   "How it works." H2: "You're not just a customer. You're a founding home." Body:
   "Phase 1 is a manual founding homes programme. We're working closely with a small
   number of households to prove the feeling before we scale — and you're helping
   shape what Hestia becomes." A small callout box: "Currently serving — Kilimani ·
   Lavington · Westlands · Kileleshwa, Nairobi." Then four numbered steps: (1)
   "Message us on WhatsApp — tell us a little about your home and which trial fits";
   (2) "We come understand your home — a short visit to map your home's specific
   pain stack"; (3) "Your first trial, supervised — a founder or supervisor is
   present for the first visit, one clear price, no commitment after"; (4) "If it
   feels lighter, we build your plan — weekly or monthly support shaped around your
   home's rhythm."

8. **Trust** (`cream` background, anchor id "trust") — Eyebrow: "Why let us in." H2:
   "Trust isn't assumed. It's built." Body: "Letting someone into your home is a big
   ask. Here's how we earn it — before you ever say yes." Six items, each with the
   outline-circle + clay checkmark icon: "Verified Partners — Government ID and a
   police clearance (DCI) certificate on file for every Hestia Home Care Partner";
   "Identifiable presence — Uniformed and easy to recognise the moment they arrive";
   "Supervised first visit — A founder or supervisor is present for your first
   visit, every time"; "Clear pricing — One price, agreed upfront. No hidden costs,
   ever"; "You're in control — Be present for the whole visit, or come and go as you
   please"; "A founder you can reach — Not a call centre. A real person, accountable
   for what happens in your home."

9. **Final CTA** (full-width `ink` background, `cream` text) — H2: "Ready for your
   home to feel lighter?" Body: "One visit. One clear price. No commitment after. If
   you want your home back — not Saturday, this week — message us." Primary CTA:
   "Book your trial on WhatsApp" → *"Hi Hestia, I'd like to book a trial."*

10. **Footer** (`ink` background, `cream`/70 text) — Mark of Contact logo + "Hestia"
    wordmark. Location line: "Nairobi, Kenya — Founding Homes programme." Link:
    "Message us on WhatsApp" → *"Hi Hestia, I'd like to know more."*
