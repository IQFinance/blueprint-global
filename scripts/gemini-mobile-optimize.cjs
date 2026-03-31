require('dotenv').config({ path: require('path').join(__dirname, '..', '..', '.env') });
const fs = require('fs');
const path = require('path');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) {
  console.error('ERROR: OPENROUTER_API_KEY not found in .env');
  process.exit(1);
}

const appJsxPath = path.join(__dirname, '..', 'src', 'App.jsx');
const appJsx = fs.readFileSync(appJsxPath, 'utf-8');

const prompt = `You are a senior frontend engineer specializing in mobile-first responsive design.

I need you to optimize this React landing page (Vite + Tailwind CSS) for MOBILE devices. The desktop version looks great — focus ONLY on mobile (< 768px).

## Design System
- Colors: ink (#16181B), bronze (#9C7B52), porcelain (#F6F2EA), graphite (#2E3137), surface (#F6F2EA)
- Fonts: Inter (font-sans), Instrument Serif (font-drama), IBM Plex Mono (font-data)
- Border radius: 2rem-3rem (pill shapes)
- Aesthetic: minimal, sophisticated, B2B premium

## Known Mobile Issues to Fix

1. **Hero section**: The \`md:whitespace-nowrap\` causes awkward line breaks on small screens. The hero text sizing (text-[1.55rem]) is too small on mobile — bump it up. The hero height min-h-[78dvh] may be too tall on short phones. Make the CTA button full-width on mobile.

2. **Trust Band**: The vertical stacking on mobile has too much gap. Tighten spacing. Consider a 1-column compact layout.

3. **Education (Three Pillars)**: Good on desktop but on mobile the pillars stack. Ensure proper spacing between stacked pillars. Add a visual separator between pillars on mobile.

4. **What You Get (Deliverables)**: The number + text layout needs better mobile alignment. The large numbers (text-4xl) may overwhelm on small screens. Reduce number size on mobile.

5. **Who This Is For**: Cards should be full-width on mobile with reduced padding. The grid gap may be too large.

6. **How It Works (Sticky Cards)**: The sticky card behavior with \`top: calc(120px + idx*30px)\` breaks on mobile. Remove sticky behavior on mobile entirely — just stack the cards normally. The SVG illustrations are already hidden on mobile (good). Reduce padding inside cards on mobile.

7. **About section**: The photo + content stacks on mobile. Reduce photo size on mobile. Tighten padding inside the card.

8. **FAQ**: The padding and text sizes are fine but verify the accordion touch targets are at least 48px tall.

9. **Footer**: The two-column link layout may overflow on very narrow screens. Stack if needed.

10. **Navbar**: The floating navbar with top-6 and w-[90%] works but verify it doesn't clip the "Try the Demo" button text on small screens. Consider reducing button padding on mobile.

11. **General**: Check all text doesn't overflow viewport. Ensure no horizontal scroll. Verify touch targets >= 44px.

## Rules
- Return ONLY the complete updated App.jsx file — no explanations, no markdown fences, no commentary
- Keep ALL existing desktop styles intact — only ADD or MODIFY mobile-specific classes
- Use Tailwind responsive prefixes (default = mobile, md: = tablet+, lg: = desktop)
- Do NOT change any copy/text content
- Do NOT change colors, fonts, or the design system
- Do NOT remove any existing functionality (GSAP animations, accordion, mobile menu, etc.)
- Do NOT add new dependencies
- Keep the same component structure and exports

Here is the current App.jsx:

${appJsx}`;

async function main() {
  console.log('Sending App.jsx to Gemini 2.5 Pro via OpenRouter...');
  console.log(`Input size: ${appJsx.length} chars, ~${Math.round(appJsx.length/4)} tokens`);

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://blueprintglobal.io',
      'X-Title': 'Blueprint Global Mobile Optimization'
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-pro',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 32000,
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`OpenRouter error (${response.status}):`, err);
    process.exit(1);
  }

  const data = await response.json();

  if (data.error) {
    console.error('API error:', data.error);
    process.exit(1);
  }

  let result = data.choices?.[0]?.message?.content;
  if (!result) {
    console.error('No content in response:', JSON.stringify(data, null, 2));
    process.exit(1);
  }

  // Strip markdown code fences if Gemini wraps them anyway
  result = result.replace(/^```(?:jsx|javascript|js)?\n?/, '').replace(/\n?```\s*$/, '');

  const outputPath = path.join(__dirname, '..', 'src', 'App.mobile-optimized.jsx');
  fs.writeFileSync(outputPath, result, 'utf-8');

  console.log(`\nDone! Output written to: src/App.mobile-optimized.jsx`);
  console.log(`Output size: ${result.length} chars`);
  console.log(`Model used: ${data.model || 'google/gemini-2.5-pro'}`);
  console.log(`Tokens: ${JSON.stringify(data.usage || {})}`);
  console.log('\nReview the file, then replace App.jsx when ready:');
  console.log('  cp src/App.mobile-optimized.jsx src/App.jsx');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
