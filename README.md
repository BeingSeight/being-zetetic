<div align="center">

# Ⲍ Being Zetetic

### The learning protocol for lifelong mastery of anything.

**Zero-to-depth, in 60 seconds.** Pick a mode, copy the prompt, paste into any frontier model, replace the syllabus — and own the concept.

[**🌐 Open the live site →**](https://beingseight.github.io/being-zetetic)
&nbsp;·&nbsp;
[**📄 Read an example →**](https://beingseight.github.io/being-zetetic/examples/operating-systems)

![Made by BeingSeight](https://img.shields.io/badge/made%20by-BeingSeight-3ad6c6?style=flat-square)
![Driven by Mnemethos](https://img.shields.io/badge/driven%20by-Mnemethos-3ad6c6?style=flat-square)
![License: MIT](https://img.shields.io/badge/license-MIT-3ad6c6?style=flat-square)
![Static site](https://img.shields.io/badge/stack-static%20site-0c1f25?style=flat-square)
![Zero tracking](https://img.shields.io/badge/tracking-none-0c1f25?style=flat-square)

</div>

---

## The problem

In the AI era, we consume faster but grasp less. We have surface knowledge of everything and deep confidence in nothing. The fundamentals stay black boxes we never open.

Most learning tools optimize for throughput — engagement, time-on-page, completion rate. They never measure **retention in six months**. They never ask whether you can rebuild the concept from a single seed question.

## The solution

**Being Zetetic** is a protocol that refuses to let you fake understanding. Every concept arises as a question from the previous one. Every term is defined in one sentence. Nothing is assumed. The final checkpoint is the proof of ownership.

It's three prompt-shaped procedures you run against any frontier model (Claude, ChatGPT, Gemini). The AI is a vehicle. The syllabus is the territory. Your mind is the only thing that counts.

---

## Three modes · one syllabus · three depths

| Mode | What it does | Best for |
| :--- | :---------- | :------- |
| 🧵 **Zetetic Thread** | Pure thought-map. Every concept arises as a question from the previous one. | Deep first-time understanding |
| 🧪 **Zetetic Sift** | MCQ stream. One-liner questions, 4 plausible options, one-liner explanations. | Active recall & exam prep |
| 🔄 **Zetetic-Socratic Hybrid** | Thread + Sift, alternating. Build, test, build, test. | Complete mastery with retention |

[**🧵 Open Thread →**](https://beingseight.github.io/being-zetetic/thread)
&nbsp;·&nbsp;
[**🧪 Open Sift →**](https://beingseight.github.io/being-zetetic/sift)
&nbsp;·&nbsp;
[**🔄 Open Hybrid →**](https://beingseight.github.io/being-zetetic/hybrid)

---

## ⚡ Try it now (60 seconds)

1. **Pick a mode** → [Thread](https://beingseight.github.io/being-zetetic/thread), [Sift](https://beingseight.github.io/being-zetetic/sift), or [Hybrid](https://beingseight.github.io/being-zetetic/hybrid)
2. **Click `Copy Prompt`** on the page
3. **Paste into** Claude, ChatGPT, or Gemini
4. **Replace** `<PASTE YOUR SYLLABUS HERE>` with any topic you want to learn
5. **Read the generated document** — export to PDF, keep it forever

That's it. No signup, no install, no account, no tracking.

> **Don't know what to learn first?** Three complete Zetetic documents are pre-generated and ready to read:
> - [What is an Operating System?](https://beingseight.github.io/being-zetetic/examples/operating-systems) — *~12 min read*
> - [JavaScript Closures](https://beingseight.github.io/being-zetetic/examples/javascript-closures) — *~10 min read*
> - [Blockchain Basics](https://beingseight.github.io/being-zetetic/examples/blockchain-basics) — *~11 min read*

---

## How it compares

| | **Being Zetetic** | Anki | Obsidian | Plain ChatGPT |
| :--- | :---: | :---: | :---: | :---: |
| Builds understanding | ✅ | ❌ recall only | ❌ links concepts | ⚠️ gives answers |
| Tests comprehension | ✅ | ✅ | ❌ | ❌ |
| Zero setup | ✅ | ⚠️ deck building | ⚠️ vault setup | ✅ |
| Works offline (PDF) | ✅ | ✅ | ⚠️ | ❌ |
| Forces you to think | ✅ questions lead | ❌ | ❌ | ❌ |
| Open protocol (MIT) | ✅ | ❌ | ❌ | ❌ |
| You own the document | ✅ | ⚠️ | ✅ | ❌ |

The differentiator isn't the AI — it's the **protocol**. The prompts enforce a structure the model can't skip past: every concept must arise as a question from the previous one, every term gets one sentence, and the document ends on a Sift-style checkpoint. The AI is forced to be a teacher, not an answer machine.

---

## For AI agents

The site exposes a **Machine Hub** with bare prompt endpoints designed for agent-to-agent handoff. No chrome, no design, no human-readable wrapper — just the raw protocol with a copy button.

- [`/machine/thread`](https://beingseight.github.io/being-zetetic/machine-thread) — raw Thread prompt
- [`/machine/sift`](https://beingseight.github.io/being-zetetic/machine-sift) — raw Sift prompt
- [`/machine/hybrid`](https://beingseight.github.io/being-zetetic/machine-hybrid) — raw Hybrid prompt

Each endpoint is a single self-contained page. `GET` the page, append a syllabus, execute.

---

## Driven by Mnemethos

> Mnemethos is the philosophy that drives everything I build.
> *From μνήμη (memory) and the act of building the divine in the everyday.*

A full-length book on the concept — its real-world psychological impact on the person who lives by it — is releasing **September 1, 2026**. [Read the manifesto →](https://beingseight.github.io/being-zetetic/mnemethos)

---

## Local development

```sh
# any static server works
python3 -m http.server 3000
# → http://localhost:3000/
```

No `npm install`. No transpiler. No build pipeline. The site is what it is.

---

## File structure

```
being-zetetic/
├── index.html              # Landing page
├── thread.html             # Zetetic Thread (human page)
├── sift.html               # Zetetic Sift (human page)
├── hybrid.html             # Zetetic-Socratic Hybrid (human page)
├── mnemethos.html          # The philosophy / manifesto
├── machine.html            # Machine Hub — raw prompt index
├── machine-thread.html     # Raw Thread prompt for AI agents
├── machine-sift.html       # Raw Sift prompt for AI agents
├── machine-hybrid.html     # Raw Hybrid prompt for AI agents
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
│   ├── analytics.js        # Local-first analytics (localStorage)
│   ├── meta.js             # Head meta injection
│   ├── og-card.png         # Open Graph social card
│   └── favicon*.png        # Z-mark favicon pack
├── _redirects              # Clean-URL routing (Netlify / Cloudflare)
├── robots.txt
├── LICENSE                 # MIT
└── README.md
```

## Editing the prompts

All three mode prompts live in `assets/prompts.js` under `window.BZ_PROMPTS`. The HTML pages render them via a small `document.getElementById('…').textContent = window.BZ_PROMPTS.thread` pattern, and the `[data-copy]` buttons copy them straight from that source of truth.

Edit once → updates everywhere.

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

The `404.html` client-side router maps clean URLs → `.html` files. Cloudflare Pages / Netlify get native support via `_redirects`.

## Deployment

Any static host works. No build step.

- **Cloudflare Pages** *(recommended)* — connect repo, leave build command empty, output dir = `/`. Free custom domain, native clean-URL support, fastest CDN.
- **Netlify** — drop the folder or connect Git. `_redirects` is honored automatically.
- **GitHub Pages** — push to `main`, enable Pages, source = `/`. The `404.html` router handles clean-URL fallback.

---

## License

MIT. Take the protocol, fork the site, make it your own.

---

<div align="center">

**Built by [BeingSeight](https://github.com/BeingSeight)**
&nbsp;·&nbsp; [github](https://github.com/BeingSeight)
&nbsp;·&nbsp; [linkedin](https://www.linkedin.com/in/BeingSeight)
&nbsp;·&nbsp; [x](https://x.com/BeingSeight)
&nbsp;·&nbsp; [email](mailto:BeingSeight@gmail.com)

*Driven by Mnemethos.*

</div>
