# How to Use v0 for Blueprint Global Design

## Step 1: Go to v0.dev
Open https://v0.dev and sign in (free tier works).

## Step 2: Start a new chat
Click "New Chat" or the composer.

## Step 3: Paste this prompt

Copy everything below the line and paste it as your first message in v0:

---

Here is a landing page for a premium international structuring firm. I need you to improve the **visual design** while keeping the exact same copy and section order. The code is React + Tailwind CSS.

**Design system:**
- Colors: ink (#16181B), bronze (#9C7B52), porcelain (#F6F2EA), graphite (#2E3137), surface (#F6F2EA)
- Fonts: Inter (body), Instrument Serif (italic headlines), IBM Plex Mono (labels)
- Border radius: 2rem-3rem (pill shapes)
- Aesthetic: minimal, sophisticated, B2B premium

**What to improve:**
1. Section spacing ratios — some sections have too much dead space, others feel cramped
2. Visual hierarchy — make headings, subheads, and body text more clearly differentiated
3. Card grid layouts — ensure clean 2x3 or 3x3 grids with consistent sizing
4. CTA placement and sizing — CTAs should be prominent without being pushy
5. The "About" section layout — photo + bio side by side, left-aligned
6. FAQ section — consider accordion-style for cleaner look
7. Mobile responsiveness — ensure nothing breaks on small screens
8. Overall whitespace and rhythm between sections

**Keep exactly as-is:**
- All copy/text content
- Section order
- Color palette
- Font choices
- All links/URLs

**Remove:** GSAP animations (v0 can't preview them). I'll add them back after.

Then paste the App.jsx code below:

```jsx
[PASTE THE CONTENTS OF src/App.jsx HERE]
```

---

## Step 4: Iterate visually
- v0 will show you a live preview
- Ask it to adjust specific things: "make the hero taller", "tighten the card grid", "add more contrast to headings"
- Each iteration shows you the result immediately

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
