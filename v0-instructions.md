# Blueprint Global — v0 Iteration #2

Attach this file in v0 along with the current App.jsx code.

---

This is iteration #2 of the landing page redesign. The current version already has several good fixes from iteration #1 (dual hero CTAs, geometric SVGs in How It Works, accordion FAQ with icons, "Who This Is For" cards). This prompt focuses on the remaining issues.

## Design System (unchanged)
- Colors: ink (#16181B), bronze (#9C7B52), porcelain (#F6F2EA), graphite (#2E3137), surface (#F6F2EA)
- Fonts: Inter (body, font-sans), Instrument Serif (italic headlines, font-drama), IBM Plex Mono (labels/data, font-data)
- Border radius: 2rem-3rem (pill shapes)
- Aesthetic: minimal, sophisticated, B2B premium

## CHANGES TO MAKE

### 1. EDUCATION SECTION — Complete rethink (most important change)

The current 9-card grid is the wrong format for this message. Nine equal cards turns a powerful insight into a catalog. The point isn't "here are 9 services" — it's "the problem is way bigger than you think, and these areas are all connected."

**Replace the 9-card grid with "Three Pillars":**

Group the 9 problem areas into 3 thematic pillars. Each pillar is a column containing 3 related items:

**Pillar 1: "Capital & Access"** — your financial infrastructure
- Tax Residency
- Banking & Capital Access
- Digital Asset Integration

**Pillar 2: "Structure & Protection"** — your legal architecture
- Ownership Structures
- Risk & Asset Protection
- Succession & Estate

**Pillar 3: "Life & Mobility"** — your personal freedom
- Citizenship & Mobility
- Healthcare Access
- Education Planning

**Layout:**
- Section header stays: "Most people don't know these problems exist — until they're stuck."
- Below the header: 3 columns (stacked on mobile), each with:
  - A pillar title (font-drama italic, text-2xl, text-bronze) — "Capital & Access", "Structure & Protection", "Life & Mobility"
  - A thin horizontal bronze/20 line below the title
  - 3 items stacked vertically within the column. Each item shows:
    - The icon (bronze, size 20) inline with the title (font-medium, text-base, text-ink)
    - Below the title: ONLY the problem sentence (text-sm, text-graphite, leading-relaxed) — the one-liner from "The problem:" field. NOT the solution text.
    - Subtle bottom border (graphite/5) between items
- NO cards, NO white backgrounds, NO rounded borders, NO shadows. Just clean typography on the porcelain background. The content breathes.
- The "What we do:" solution text is deliberately omitted here — it comes later in "What You Get." This section is about making the visitor feel the SCOPE of the problem, not reassuring them yet.

**Why this works better than 9 cards:**
- Reduces cognitive load from 9 independent items to 3 organized themes
- Shows intellectual rigor — Blueprint thinks in systems, not checklists
- The grouping itself communicates "these are connected" without saying it
- Section height drops by ~60%
- The visitor scans 3 pillar titles and instantly grasps the scope, then reads details only if curious
- Withholding solutions creates tension that the next section resolves

### 2. WHAT YOU GET — Convert from cards to numbered list

The current 2x3 card grid looks too similar to the Education section. Replace with a stacked numbered list:

- Each deliverable is a horizontal row (not a card):
  - LEFT: Large bronze number (font-data, text-5xl or text-6xl, text-bronze/25) — "01", "02", etc.
  - A thin vertical line (1px, bronze/15, full height of the row) separating number from content
  - RIGHT: Title (font-medium, text-xl, text-ink) on the first line, description (text-graphite, text-[15px], leading-relaxed) below
- Each row separated by a thin horizontal line (graphite/10)
- No cards, no backgrounds, no shadows, no border-radius
- Keep the section header: "Tangible outcomes. Not just advice."
- This creates a clean, editorial feel — like a table of contents in a premium publication

### 3. SOCIAL PROOF — Honest credibility signal (no fake numbers)

Do NOT use invented statistics like "200+ Structures" or "9 Jurisdictions" — those are fabricated.

Instead, add a slim trust band between the "What You Get" section and the "Start Your Blueprint" CTA. Options (implement whichever feels most natural):

**Option A — Framework credibility signal:**
A single centered line on a dark (bg-ink) strip:
"One framework. Nine interconnected layers. Every structure built from the same foundation."
Style: font-sans, text-lg, text-surface/60, py-12. Subtle, confident, no numbers to verify.

**Option B — Professional trust markers:**
A horizontal row of 3 trust items (no cards, just text):
- ShieldCheck icon + "CPA-Led Coordination"
- Globe icon + "Multi-Jurisdictional Network"
- Lock icon + "Compliance-First Approach"
Style: font-data, text-xs, uppercase, tracking-widest, text-surface/50. Centered row with thin vertical dividers.

**Option C — Skip it entirely.** The About section with CPA Ontario badge and LinkedIn already provides credibility. If neither Option A nor B feels natural, just leave the flow as: What You Get → CTA → Who This Is For.

### 4. ABOUT SECTION — Verify these elements are present

Check that the About section ("Meet the Architect") includes:
- Photo: w-40/w-52 with ring-2 ring-bronze/30
- Name: "Martin Popiel, CPA"
- Subtitle: "Chartered Professional Accountant (CPA)"
- Bio paragraphs (keep as-is)
- **Credential badges row with ALL of these:**
  - ShieldCheck icon + "CPA Ontario" badge (bg-porcelain, text-ink/80)
  - MapPin icon + "40+ Countries" badge
  - Network icon + "Global Partner Network" badge
  - LinkedIn icon + "LinkedIn" badge — linked to https://www.linkedin.com/in/martinpopiel/ — styled with bg-[#0A66C2]/10 and text-[#0A66C2], with this inline SVG:
```jsx
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
```

If any of these are missing, add them.

### 5. FOOTER — Fix copyright line

The copyright line must say ONLY:
```
© {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.
```

Do NOT include "CPA Ontario, Canada" in the footer copyright. That credential now lives in the About section badges.

Keep the footer disclaimer paragraph exactly as-is (the one about "Blueprint Global coordinates international structuring...").

### 6. MOBILE HAMBURGER MENU — Verify or add

If not already present: add a hamburger menu icon (Menu from lucide-react, or 3 horizontal lines) that appears on mobile (md:hidden). On tap, open a slide-in drawer or full-screen overlay with:
- Nav links stacked vertically (What We Do, How It Works, About)
- "Client Login" link
- "Try the Demo" button (full width)
- Close (X) button
- Style: bg-ink, text-surface, bronze accents

### 7. VISUAL RHYTHM — Footer transition fix

The FAQ section and Footer currently both use bg-ink, so the rounded-top on the footer creates a weird gap/overlap. Either:
- Remove the rounded top from the footer (simplest)
- OR add a thin horizontal line (bronze/10) between FAQ and Footer as a section break

## DO NOT CHANGE
- Hero section (dual CTAs working well)
- Trust Band (icons landed nicely)
- "Who This Is For" section (card redesign is good)
- How It Works section (geometric SVGs working)
- FAQ section (accordion with icons working)
- CTA variations ("Start Your Blueprint" etc.)
- All copy text (keep every word as-is except where I specified structural changes above)
- Color palette, fonts, overall section order

## GSAP NOTE
Keep all GSAP imports/animations removed for v0 preview. I'll re-add them after.

---

Paste the current App.jsx code below:

```jsx
[PASTE APP.JSX CODE HERE]
```
