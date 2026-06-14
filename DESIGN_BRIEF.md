# Hestia Website — Design Brief
*For use with Google Stitch or any design tool*

---

## 1. Brand Overview

**Brand name:** Hestia
**Tagline:** "A mother's touch" / "Restore the home when life gets too busy"
**Market:** Nairobi, Kenya — Kilimani, Lavington, Westlands, Kileleshwa, Runda
**What it is:** A premium vetted domestic help agency. Not a bureau, not a direct hire — a managed service that handles verification, scheduling, and follow-up.
**Core differentiator:** The "Trust Packet" — identity checks, references, and fit notes delivered to the client before anyone enters the home, followed by Day 7 and Day 30 check-ins.
**Conversion path:** WhatsApp-first. Every CTA opens a WhatsApp chat. No booking forms, no account creation.

---

## 2. Color Palette

| Name | Hex | Usage |
|---|---|---|
| Cream | `#faf5ee` | Page background |
| Cream Soft | `#f2e9dd` | Alternate section background, soft card fill |
| Ink | `#211d19` | Primary text, dark section backgrounds |
| Ink Soft | `#6f6459` | Secondary / muted text |
| Clay | `#c1502e` | Brand accent — buttons, labels, icons, highlights |
| Clay Dark | `#9c3f22` | Clay hover state |
| Line | `#e6dccd` | Borders and dividers |

**Dark sections** use Ink (`#211d19`) as background with Cream text. The CTA section, flagship package card, and footer all use this treatment.

**The live site** also uses a slightly warmer Clay variant (`#c2694a`) in some explorations — either value works.

---

## 3. Typography

| Role | Font | Weight / Style |
|---|---|---|
| Display / Headings | Fraunces (serif) | Variable — used for all section headings, hero text, package names, italic callouts |
| Body | Inter (or Plus Jakarta Sans) | Regular 400, Medium 500 |
| Labels / Metadata | System monospace | Small, uppercase, tracked — used for section eyebrows like "Founding trial packages" |

**Typographic patterns:**
- Section label: `10–12px · all caps · letter-spacing 0.25em · Clay color`
- Section heading: `30–48px · Fraunces · tight leading (1.05–1.1)`
- Body copy: `16–18px · Inter · relaxed leading (1.6–1.7) · Ink Soft color`
- Button text: `13–14px · semibold · tracked`

---

## 4. Page Structure (Current Live Site)

The live site is a single-page layout with these sections in order:

### 4.1 Header
- Fixed top bar, full-width
- Left: Logo (SVG circle + small clay dot) + "Hestia" wordmark in Fraunces
- Center: Navigation links — Trial packages / How it works / Trust
- Right: WhatsApp CTA button (pill shape, Clay background)
- Bottom border separates from page content

### 4.2 Hero
- Location badge: "Founding Homes · Kilimani, Lavington & Westlands" (Clay, uppercase, tracked)
- Headline: "Hestia restores the home when life gets too busy." (Fraunces, large)
- Subhead: Pain-point copy — dishes, laundry, no food in the house
- Primary CTA: WhatsApp button — "Book your Home Reset trial"
- Secondary link: "See how it works" (underlined text link)
- Footnote: "One visit. One clear price. No commitment after."
- Subtle radial gradient in Clay tint at top-right corner

### 4.3 Problem Section
- Headline: Frames the problem plainly
- Body: Empathy copy — validates what the client has already tried
- Pill/tag list of failed alternatives: mama fua, bureau cleaner, relatives, takeaway, doing nothing

### 4.4 Feelings Section
- 3-column grid
- Three outcome pillars: **Relief**, **Care**, **Continuity**
- Each has a short description of what that outcome means in practice

### 4.5 Services Section
- 5 service cards (grid):
  1. Cleaning
  2. Dishes
  3. Laundry
  4. Home-style meals
  5. Tidy & reset
- Framed as "shaped around your home's specific pain stack" — not a menu, but a fit

### 4.6 Packages Section
- Heading: "Three ways to start"
- 3-column card grid, one flagship card (dark/ink background), two secondary cards
- **Home Reset** (Flagship): Full domestic reset — dishes, kitchen, bathrooms, floors, laundry, tidy
- **Laundry + Cleaning Relief**: Clothes washed, folded, ironed; bedroom/bathroom/kitchen clean
- **Mother's Touch Meal + Clean Kitchen**: Home meal prepared; kitchen cleaned; dishes handled; light tidy
- All cards: service name (Fraunces), italic tagline, description, WhatsApp CTA button
- Flagship card: Clay CTA button; secondary cards: outlined/bordered CTA button

### 4.7 How It Works Section
- Heading: "How Hestia works"
- 4-step numbered process:
  1. Call or WhatsApp Hestia (15 min, no pressure)
  2. We build your Trust Packet (identity, references, skills, fit notes — in writing)
  3. They start, on schedule (Hestia manages the handover if anything changes)
  4. We check in — day 7 and day 30 (proactive follow-up, not waiting for a complaint)
- Side card: Serving areas list (Kilimani, Lavington, Westlands, Kileleshwa)

### 4.8 Trust Section
- Heading: "Trust isn't assumed. It's built."
- Subhead: "Letting someone into your home is a big ask. Here's how we earn it — before you ever say yes."
- 6 trust points in a 3-column grid, each with a check icon in Clay:
  1. Verified Partners — Government ID + DCI police clearance on file
  2. Identifiable presence — Uniformed, easy to recognise
  3. Supervised first visit — Founder or supervisor present
  4. Clear pricing — One price, agreed upfront, no hidden costs
  5. You're in control — Stay or leave as you please
  6. A founder you can reach — Not a call centre, a real accountable person

### 4.9 CTA Section
- Full-width dark section (Ink background)
- Headline: "Ready for your home to feel lighter?"
- Subhead: "One visit. One clear price. No commitment after. If you want your home back — not Saturday, this week — message us."
- Single WhatsApp button: "Book your trial on WhatsApp"

### 4.10 Footer
- Dark background (Ink), Cream text
- Left: Logo + "Hestia" + "A mother's touch" tagline
- Right: Location label + WhatsApp link ("Message us on WhatsApp")

---

## 5. UI Component Specs

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | Clay `#c1502e` | Cream `#faf5ee` | None | Clay Dark `#9c3f22` |
| Secondary | Transparent | Ink `#211d19` | Ink 20% | Ink 40% border |
| Ghost | Transparent | Clay `#c1502e` | None | Clay Dark, underline |

Shape: Fully rounded pill (`border-radius: 9999px`)
Padding: `14px 28px` (default), `10px 20px` (small/header variant)
Font: 13–14px semibold, tracked

### Cards
- Soft cards: Cream Soft background, `border: 1px solid #e6dccd`, `border-radius: 16px`, padding `32px`
- Flagship card: Ink background, Cream text, same radius
- Rounded corners: `16px` (packages), `8px` (trust points — no card, just icon + text)

### Navigation
- Transparent background (no fill), bottom border in Line color
- Links: 14px, medium weight, Ink Soft → Ink on hover
- No underlines on hover — color shift only

### Dividers / Section separators
- `border-top: 1px solid #e6dccd` between most sections

### Logo mark
- SVG: large circle (stroke, Ink color) + small filled circle offset to upper-right (Clay color)
- Used at 28×28px in header, 24×24px in footer

---

## 6. Layout Grid

- **Max content width:** 1152px (`max-w-6xl`)
- **Horizontal padding:** 24px mobile, 40px desktop (`px-6 sm:px-10`)
- **Section vertical spacing:** 80px mobile, 112px desktop (`py-20 sm:py-28`)
- **Card grid gaps:** 24px
- **Column patterns:**
  - Services: 1 col → 2 col → 5 col (responsive)
  - Packages: 1 col → 3 col
  - Trust: 1 col → 2 col → 3 col
  - Problem/HowItWorks: 12-col grid with 7+5 split on desktop

---

## 7. Animation & Motion (for reference)

The current site is mostly static. The design exploration (`ThursdaySixPM`) uses:
- GSAP scroll-pinned hero "door open" effect (two panels slide apart on scroll)
- Parallax image drift on room photos
- Staggered fade-up reveals on section entry
- Rotating "stamp" badges on trust check cards
- Fixed grain texture overlay (4.5% opacity, `mix-blend: overlay`)

For the redesign in Stitch, these can be recreated as:
- Scroll-triggered entrance animations on section content
- Subtle parallax on hero/CTA background images
- Staggered card reveals

---

## 8. Mobile Behaviour

- Header collapses to logo + single WhatsApp button (nav links hidden)
- Grids collapse to single column
- A **sticky bottom bar** (Call + WhatsApp buttons side by side) is recommended for mobile conversion — this pattern is used in the `ThursdaySixPM` concept and works well

---

## 9. Content Tone

- **Direct and warm.** No marketing fluff. Speaks to exhausted, busy Nairobi households.
- **Pain-first.** Opens with the problem (dishes, laundry, no food), not the solution.
- **Trust-forward.** Every section either builds trust or reduces friction.
- **No commitments.** "One visit. One clear price. No commitment after." is a recurring reassurance.
- **Conversational.** Copy is written as if a thoughtful person is explaining, not selling.

---

## 10. Key Pages / Routes

| Route | Description |
|---|---|
| `/` | Main landing page (described above) |
| `/thursday` | "Thursday, 6pm" editorial concept — full-bleed, cinematic, GSAP-animated. Useful reference for tone and elevated visual direction. |

---

## 11. Assets & Icons

- **Icons:** Phosphor Icons (`@phosphor-icons/react`) — Phone, WhatsappLogo, EnvelopeSimple, InstagramLogo, FacebookLogo, TiktokLogo, SealCheck
- **Brand images:** `/brand/hestia-logo.jpg`, `/brand/hestia-nav-logo.png`, `/brand/hestia-nav-mark.png`
- **No photography in current landing** — hero uses gradient only. The `ThursdaySixPM` concept uses `picsum.photos` placeholders for room photography.

For Stitch, photography of:
- A clean, warm Nairobi kitchen/living space
- A domestic worker arriving at a door
- Hands setting a table / folding laundry

...would strengthen the emotional impact significantly.

---

## 12. Contact & Social

| Channel | Value |
|---|---|
| WhatsApp | `+254 704 872 150` |
| Email | `hello@hestia.co.ke` |
| Instagram | `@hestia.ke` |
| Facebook | `@hestia.ke` |
| TikTok | `@hestia.ke` |
