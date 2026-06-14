# Being Zetetic

> The learning protocol for lifelong mastery of anything.
> Become the Being that inquires.

**Live site:** [https://beingseight.github.io/being-zetetic](https://beingseight.github.io/being-zetetic)
**Made by:** [BeingSeight](https://github.com/BeingSeight) · Driven by Mnemethos
**Stack:** Static site. Zero backend. Zero build step.

---

## What this is

A static website that hosts a learning protocol in three modes:

- **Zetetic Thread** — pure thought-map. Every concept arises as a question from the previous one.
- **Zetetic Sift** — MCQ-based stream. One-liner Qs, one-liner whys.
- **Zetetic-Socratic Hybrid** — Thread + Sift alternating. Build, test, build, test.

Plus:

- A **Mnemethos** page explaining the philosophy behind the protocol.
- A **Machine Hub** with raw prompts designed to be ingested directly by AI agents.
- **Three pre-generated example documents** (Operating Systems, JavaScript Closures, Blockchain Basics) you can read right now.

The protocol is open. The prompts are public. The site has no tracking cookies, no third-party analytics, no build pipeline.

## Local development

```sh
python3 -m http.server 3000
# → http://localhost:3000/
```

Any static-file server works. There is no `npm install`, no transpiler.

## File structure

```
.
├── index.html              # Landing page
├── thread.html             # Zetetic Thread (human)
├── sift.html               # Zetetic Sift (human)
├── hybrid.html             # Zetetic-Socratic Hybrid (human)
├── mnemethos.html          # Philosophy page
├── machine.html            # Machine Hub
├── machine-thread.html     # Raw prompt — AI agent
├── machine-sift.html       # Raw prompt — AI agent
├── machine-hybrid.html     # Raw prompt — AI agent
├── 404.html                # Client-side router + 404
├── examples/               # Pre-generated Zetetic documents
│   ├── index.html
│   ├── operating-systems.html
│   ├── javascript-closures.html
│   └── blockchain-basics.html
├── assets/
│   ├── styles.css          # Single global stylesheet
│   ├── prompts.js          # Source of truth for the three prompts
│   ├── app.js              # Copy buttons, active nav
│   ├── maker.js            # Maker / footer partials
│   ├── meta.js             # Head meta injection
│   ├── analytics.js        # Local-first analytics (localStorage)
│   └── og-card.png         # Open Graph social card
├── _redirects              # Clean-URL routing (Netlify)
├── robots.txt
└── README.md
```

## Editing the prompts

All three mode prompts live in `assets/prompts.js` under `window.BZ_PROMPTS`. The HTML pages render them via a small `document.getElementById('...').textContent = window.BZ_PROMPTS.thread` pattern, and the `[data-copy]` buttons copy them straight from that source of truth.

Edit once, updates everywhere.

## Deployment

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In Cloudflare Pages, "Create application" → "Pages" → "Connect to Git".
3. Select the repo. Build command: *(none)*. Build output: `/`.
4. Deploy. Cloudflare serves `/thread` from `thread.html` natively — no `_redirects` needed.
5. Add the custom domain `https://beingseight.github.io/being-zetetic` in the Pages project.

### Netlify

Drop the folder on Netlify, or connect via Git. The included `_redirects` file maps the clean URLs to the `.html` files.

### Vercel

`vercel deploy` from the project root. Add a `vercel.json` with the same rewrites if you want clean URLs without the `.html` extension.

### GitHub Pages

Push to `gh-pages` branch. Note: GitHub Pages does not honor `_redirects`, so the `404.html` client-side router handles clean-URL fallback.

## URL map

| Clean URL             | File                              |
| --------------------- | --------------------------------- |
| `/`                   | `index.html`                      |
| `/thread`             | `thread.html`                     |
| `/sift`               | `sift.html`                       |
| `/hybrid`             | `hybrid.html`                     |
| `/mnemethos`          | `mnemethos.html`                  |
| `/machine`            | `machine.html`                    |
| `/machine/thread`     | `machine-thread.html`             |
| `/machine/sift`       | `machine-sift.html`               |
| `/machine/hybrid`     | `machine-hybrid.html`             |
| `/examples`           | `examples/index.html`             |
| `/examples/<slug>`    | `examples/<slug>.html`            |

## License

MIT. Take the protocol, fork the site, make it your own.

---

Built in the open. No analytics that phone home. The protocol works because it doesn't let you fake understanding — neither does the code.
