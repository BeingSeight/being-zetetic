# Being Zetetic — beingzetetic.com

The learning protocol for lifelong mastery of anything.

A static site. No backend. Deploy to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

## Structure

- `index.html` — Landing page (Hero, three mode cards, how-to-use, machine link)
- `thread.html`, `sift.html`, `hybrid.html` — Human mode pages (explanation + example + prompt)
- `machine.html` — Machine hub
- `machine-thread.html`, `machine-sift.html`, `machine-hybrid.html` — Raw prompts (optimized for AI agents)
- `assets/styles.css` — Single global stylesheet
- `assets/prompts.js` — The three mode prompts (source of truth; injected into pages)
- `assets/app.js` — Copy buttons, active nav
- `_redirects` — Clean-URL routing for Netlify-style hosts

## Deploy

Drop the folder on Netlify / Vercel / Cloudflare Pages. The `_redirects` file handles the clean URLs in the blueprint (`/thread`, `/machine/thread`, etc).

## Edit prompts

All three machine prompts live in `assets/prompts.js` under `window.BZ_PROMPTS`. Edit there once, updates propagate to:
- Landing page "Copy Prompt" buttons
- Human mode pages' full-prompt boxes
- `/machine/*` raw pages
