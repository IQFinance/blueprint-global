# How to Use v0 for Blueprint Global Redesign

## Step 1: Go to v0.dev
Open https://v0.dev and sign in (free tier works).

## Step 2: Start a new chat
Click "New Chat" or the composer.

## Step 3: Paste this prompt

Copy everything below the line and paste it as your first message in v0:

---

I need you to redesign this React + Tailwind landing page for a premium international structuring firm (HNW advisory). The current design has specific CRO and UI/UX problems I need you to fix. Keep all the same copy text but restructure the visual design and layout.

## Design System (keep these exact values)
- Colors: ink (#16181B), bronze (#9C7B52), porcelain (#F6F2EA), graphite (#2E3137), surface (#F6F2EA)
- Fonts: Inter (body, font-sans), Instrument Serif (italic headlines, font-drama), IBM Plex Mono (labels/data, font-data)
- Border radius: 2rem-3rem (pill shapes)
- Aesthetic: minimal, sophisticated, B2B premium — think private bank, not SaaS startup

## FIXES TO APPLY (all 18)

### 1. HERO — Add secondary CTA, remove disclaimer
- Keep the existing "Try the Demo" button as-is (white bg, dark text, pill shape) → links to https://app.blueprintglobal.io/onboarding
- ADD a second CTA button next to it: "See How It Works" — style as a ghost/outline button (transparent bg, white 1px border, white text, pill shape, same height as primary). This is an anchor link to `#how-it-works`.
- REMOVE the disclaimer paragraph at the bottom of the hero (the one starting with "Blueprint Global coordinates international structuring..."). This text stays ONLY in the footer.
- Keep everything else in the hero as-is (headline, subheadline, body copy, background image)

### 2. TRUST BAND — Normalize sizing, add icons
- Make all 3 items the same text size (all `text-2xl` — currently the first is `text-2xl` while the others are `text-3xl`)
- Add a small icon to the left of each value statement:
  - ShieldCheck icon (bronze, size 20) before "One Firm. The Full Picture."
  - Briefcase icon (bronze, size 20) before "CPA-Led"
  - FileText icon (bronze, size 20) before "Compliance-First"
- Keep the vertical dividers between items on desktop

### 3. EDUCATION SECTION — Compact the 9 cards
This is the most important visual fix. The current 3x3 grid of 9 large identical cards creates massive scroll fatigue. Redesign as:

- Keep ALL 9 items and their exact copy (title, problem text, solution text)
- Use a **compact 3x3 grid** where each cell shows ONLY:
  - The icon (bronze, in a subtle `bg-porcelain` circle)
  - The title (font-medium, text-lg, text-ink)
  - A 1-line summary (first sentence of the "problem" text, truncated, text-graphite, text-sm)
- On **click or hover**, the card expands inline (or opens a modal/overlay) to reveal the full "The problem:" and "What we do:" text
- Default collapsed state should make the entire section roughly 50% shorter than current
- **Alternative if expansion is too complex:** Show the 9 items as a network/constellation layout — each item is a node (icon + title) connected to adjacent nodes by thin (1px) bronze/10 lines. On hover, show the full text in a tooltip. This visually says "these problems are interconnected."

### 4. REMOVE THE BRIDGE SECTION
- Delete the `Bridge` component entirely. It is redundant with the MidPageCTA that precedes it (both say "here's what you walk away with")
- The flow becomes: Education → MidPageCTA → WhatYouGet (no bridge in between)
- In the App component, remove `<Bridge />` from the render

### 5. WHAT YOU GET — Differentiate from Education cards
- Do NOT use the same white rounded card grid as Education. Use a visually distinct treatment:
  - **Preferred:** A numbered list layout — large bronze numbers (`text-6xl`, `text-bronze/30`) on the left, content (title + description) on the right, separated by a thin vertical bronze/10 line. Each item stacked vertically with generous spacing.
  - **Alternative:** A 2-column layout where items alternate left/right alignment
  - **Alternative:** A horizontal timeline/stepper with connected dots
- The key requirement: this must NOT look like another grid of white rounded cards

### 6. CTA VARIATION — Make each MidPageCTA feel unique
There will be 2 MidPageCTAs remaining (after removing Bridge). All drive to the same destination: https://app.blueprintglobal.io/onboarding (free trial). Make them feel different:

- **First CTA** (after Education): Clean and simple. "Try the Demo" button. Below it: "Free. No account required." in small text.
- **Second CTA** (after WhatYouGet, dark variant): Different visual treatment — larger heading. Button text: "Start Your Blueprint" (same link). Add subtle trust text: "Used by entrepreneurs across 40+ countries."
- **Third CTA** (after HowItWorks): "Try the Demo" with the existing "Ready to start mapping?" headline. Add small friction-reducer: "It takes 5 minutes." below the button.

### 7. HOW IT WORKS — Replace placeholder images with geometric SVGs
The right 50% of each stacked card is currently a dark rectangle with ghost text ("MAP", "BUILD", "MAINTAIN"). Replace with meaningful geometric SVG compositions:

- **Map card:** Concentric circles (3 rings, bronze stroke 1px on dark bg) with 4-5 small dots at different positions around the rings. Suggests "scanning your situation from every angle." Like a radar visualization.
- **Build card:** A set of 5-6 connected rectangles/blocks forming a simple org-chart or architecture diagram. Lines connecting them. Bronze strokes on dark bg. Suggests "we construct the structure."
- **Maintain card:** A circular arrow (refresh/cycle) with 3 small icons at the cardinal points: a calendar, a checkmark, and a document. Bronze strokes on dark bg. Suggests "ongoing, cyclical management."

These are pure CSS/SVG — no external images. Use thin lines (1-2px), bronze color (#9C7B52), on the dark (#0E1014) background. Keep the sticky-stacking scroll behavior.

### 8. ABOUT SECTION — Larger photo, LinkedIn, more credentials
- Increase photo size: `w-40 h-40` (160px) on mobile, `w-52 h-52` (208px) on md+
- Change photo ring from `ring-4 ring-porcelain` to `ring-2 ring-bronze/30` for a subtle bronze accent
- Make the card wider: `max-w-5xl` instead of `max-w-4xl`
- **Add LinkedIn icon** as a badge in the credentials row:
```jsx
<a href="https://www.linkedin.com/in/martinpopiel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0A66C2]/10 px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-[#0A66C2] border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  LinkedIn
</a>
```
- **Add a CPA Ontario badge** (alongside the existing badges):
```jsx
<span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
  <ShieldCheck size={14} className="text-bronze"/> CPA Ontario
</span>
```
- Keep the existing "40+ Countries" and "Global Partner Network" badges
- The credential badges row should now show: CPA Ontario | 40+ Countries | Global Partner Network | LinkedIn

### 9. FAQ — Convert to accordion
- Show only the questions by default, with a ChevronDown icon (size 20, text-surface/40) on the right side of each row
- Clicking a question smoothly expands to reveal the answer (use CSS transition, max-height trick or React state)
- Only ONE question open at a time (clicking a new one closes the previous)
- The chevron rotates 180 degrees when open (transition-transform duration-300)
- Add a subtle hover state to each question row: `hover:bg-surface/5` with rounded corners
- Add a contextual icon (bronze, size 18) to the LEFT of each question:
  - "Is this legal?" → Scale icon
  - "How long does this take?" → Clock icon
  - "How much does it cost?" → Coins icon
  - "I already have an accountant..." → Users icon
  - "What if my situation changes?" → RefreshCw icon

### 10. MOBILE HAMBURGER MENU
- The current nav hides links with `hidden md:flex` but provides NO mobile alternative
- Add a hamburger icon (3 horizontal lines, or use the Menu lucide icon) that appears on mobile (`md:hidden`)
- On click, open a slide-in drawer from the right (or a full-screen overlay) with:
  - The nav links (What We Do, How It Works, About) — stacked vertically, large tap targets
  - "Client Login" text link
  - "Try the Demo" button (full width)
  - A close (X) button in the top right
- Style: `bg-ink text-surface` with bronze accents, matching the dark sections
- Add smooth slide/fade transition on open/close

### 11. VISUAL RHYTHM — Break the stripe monotony
- Add at least ONE section that uses a gradient background transition instead of a hard color swap. For example, the "Who This Is For" section could fade from ink at the top to a slightly different dark tone at the bottom, or use a subtle radial gradient with bronze/5 at center.
- In the "Who This Is For" section, add a very subtle background texture or pattern (e.g., a faint diagonal line pattern or noise texture at 2-3% opacity) to differentiate it from other plain dark sections.
- The footer currently has `rounded-t-[3rem] mt-[-3rem]` which creates an odd overlap since both FAQ and Footer use `bg-ink`. Either remove the rounded top OR add a thin bronze/10 horizontal rule between FAQ and Footer.

### 12. SOCIAL PROOF SECTION — Add between What You Get and second CTA
Add a new section between WhatYouGet and the second MidPageCTA:
- Background: `bg-ink` (dark), short height
- Content: a simplified world map (inline SVG, just continental outlines, thin stroke at surface/10)
- Place small bronze dots (6px circles) at these approximate locations on the map: Singapore, Switzerland, UAE, Panama, Paraguay, USA, Canada, Ireland
- Below the map: "Active across 9 jurisdictions on 5 continents" in `font-data text-xs uppercase tracking-widest text-surface/40`
- Below that: a row of 3-4 stat blocks (no cards, no borders — just numbers and labels):
  - "40+" with label "Countries" below
  - "9" with label "Jurisdictions" below
  - "200+" with label "Structures Designed" below
- Stats use `font-data text-4xl text-bronze/80` for the numbers, `text-xs uppercase tracking-widest text-surface/40` for labels
- The map should be ~200px tall, centered, very minimal — just outlines + dots. If a world map SVG is too complex, skip it and just show the stats row.

### 13. BLUEPRINT THREAD — Vertical continuity line
Add a thin decorative vertical line that runs down the left side of the page:
- Position: `fixed` or `absolute`, offset ~80px from the left edge on desktop
- Style: 1px wide, `bg-bronze/15`
- At each section header, place a small (8px diameter) bronze/30 filled circle on the line
- On mobile (`<md`): hide it entirely (`hidden md:block`)
- This is purely decorative — creates a visual "blueprint guideline" that connects all sections

### 14. FOOTER — Fix Wyoming/Ontario disclosure
The current footer copyright says: `© 2026 Blueprint Group LLC. All rights reserved. CPA Ontario, Canada.`

This awkwardly places a Canadian CPA credential next to a US LLC. Change to:

**Copyright line:** `© {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.`
- Do NOT mention Wyoming (unnecessary, sounds like a mailbox company)
- Do NOT mention CPA Ontario here (it now lives in Martin's About section badges)

**Disclaimer paragraph:** Keep exactly as-is:
```
Blueprint Global coordinates international structuring and project-manages the implementation process. We do not provide tax, legal, investment, or immigration advice. All advisory services are delivered by licensed professionals in their respective jurisdictions. Past outcomes do not guarantee future results. Each client's structure depends on their individual circumstances.
```

This cleanly separates the business entity (footer) from personal credentials (About bio).

## THINGS TO KEEP EXACTLY AS-IS
- All headline and body copy text (do not rewrite any words except where I specified above)
- The overall section order: Hero → TrustBand → Education → CTA → WhatYouGet → SocialProof(new) → CTA → WhoThisIsFor → HowItWorks → CTA → About → FAQ → Footer
- The color palette hex values
- The font families
- All existing links/URLs
- The Unsplash image URLs in Hero and Bridge background

## REMOVE for v0 preview
- Remove ALL GSAP animation code: the `import { gsap }` and `import { ScrollTrigger }` lines, the `gsap.registerPlugin(ScrollTrigger)` call, and every `useEffect` block that contains `gsap.from` or `gsap.context`. Keep `useRef` hooks ONLY if they're used for non-animation purposes (like the accordion state).
- Remove the entire `Bridge` component and its `<Bridge />` usage in App
- I'll re-add GSAP animations after bringing the code back

Here is the current App.jsx code:

```jsx
[PASTE THE CONTENTS OF src/App.jsx HERE]
```

---

## Step 4: Iterate visually
- v0 will show you a live preview
- Key things to check:
  - Education cards are compact (not 9 huge cards)
  - How It Works has geometric SVGs (not ghost text rectangles)
  - FAQ is collapsible accordion
  - Mobile hamburger menu works
  - About section has larger photo + LinkedIn badge + CPA Ontario badge
  - Footer says just "Blueprint Group LLC" (no "CPA Ontario, Canada")
  - Social proof section has stats (and ideally the map)
  - The Blueprint Thread line is visible on the left margin
- Ask v0 to adjust specific things: "make the education grid more compact", "the SVG in the Map card needs more detail", "the accordion animation is too fast"

## Step 5: Bring it back
Once you're happy with the design:
1. Copy the final code from v0
2. Paste it to me in Claude Code
3. I'll re-add GSAP animations, verify the build, and push to the branch

## Quick copy command
To copy App.jsx to clipboard, run this in terminal:
```
cat ~/claude/blueprint-global/src/App.jsx | pbcopy
```
