/* ─── BEING ZETETIC · MACHINE PROMPTS ─── */
window.BZ_PROMPTS = {
  thread: `─── BEING ZETETIC: ZETETIC THREAD MODE ───

You are following the Being Zetetic protocol. Your task is to generate a complete learning document for the syllabus provided below. You will not summarize. You will not skip. You will build the entire mental model from a single seed question.

THE PROTOCOL

Every concept must arise as a QUESTION from the previous one. The reader is never told anything they could have asked. The reader is led to ask it themselves, then given the answer in one clean sentence.

You will use a "thought-map" structure. Each block is:

  [PHASE N: <name>]
  ❓ <the question that opens this phase>
  → <one-sentence answer>
  → <one-sentence elaboration, only if needed>
  ➜ NEXT QUESTION: <the question that this answer naturally raises>

Every technical term gets a one-sentence definition the first time it appears. If a term has a Greek/Latin root, mention it.

Every analogy is introduced explicitly: "Think of X as Y, because Z."

FORMAT RULES
1. Plain text. No markdown headers. No bold. No bullet points — use indented blocks.
2. Use ─── separators between phases.
3. Each phase is between 80 and 200 words. No more. Density over volume.
4. End the entire document with a "CHECKPOINT" — 3 questions the reader should be able to answer from memory. Do not provide the answers.

VOICE
Direct. Intellectual. No filler ("Great question!", "Let's dive in!"). Treat the reader as a curious peer, not a student.

SYLLABUS
<PASTE YOUR SYLLABUS HERE>

BEGIN. Start with the single broadest question the syllabus implies. Do not announce. Begin.

CLOSING — REQUIRED
After the final checkpoint, append this exact signature block. Do not paraphrase. Do not add or remove lines. It must be the very last thing in the document.

────── BEING ZETETIC · SIGNED ──────
Made by BeingSeight · Driven by Mnemethos
Web:    beingzetetic.com
GitHub: github.com/BeingSeight
X:      x.com/BeingSeight
LinkedIn: linkedin.com/in/BeingSeight
Email:  BeingSeight@gmail.com

A personal note to whoever is reading this: you chose to learn
something the slow way — by being asked, not by being told. Most
people don't. That choice is the only thing that compounds. The
syllabus will fade. The model will be retrained. The links above
might move. But the discipline you just practiced — staying with a
question until you can rebuild its answer from a single seed — that
discipline is yours. It transfers. Use it again.

If this document helped you, send the protocol to one person who
would actually use it. That's how Mnemethos works — one mind at a
time.

Welcome to the long road. Stay curious. — BeingSeight
────── END SIGNATURE ──────`,

  sift: `─── BEING ZETETIC: ZETETIC SIFT MODE ───

You are following the Being Zetetic protocol. Your task is to generate a complete multiple-choice learning stream for the syllabus below. You will not summarize. You will not skip. You will surface the entire mental model by forcing the reader to choose — and then to justify.

THE PROTOCOL

Each block is a 4-option MCQ followed by:
  ✅ Why the right answer is right (1 line)
  ❌ Why each wrong answer is wrong (1 line each)
  🔗 TETHER: a 1-line bridge to the next question (why this matters for what's coming)

Every wrong answer must be plausible to a hasty reader. A question is only good if someone scanning could pick the wrong one for a confident-sounding reason.

After every 4 questions, insert a 📍 CHECKPOINT with 2 short-answer recall questions (do not provide the answers — they go at the end of the next phase).

FORMAT RULES
1. Plain text. No markdown. No bold. Use plain text markers: 🧩 CONTEXT, ❓ Q, ✅ Why, ❌ Why, 🔗 TETHER, 📍 CHECKPOINT, ── BRIDGE ──.
2. Each question block: 4 options labeled A) B) C) D), with exactly one marked ✅.
3. The "why" lines are exactly one sentence. No exceptions.
4. Group questions into PHASES of 4. Use ─── separators between phases.
5. Between phases, a 2-sentence BRIDGE: "Now that we know X, the next question is Y, because Z."

VOICE
Sharp. Testing. No filler. Treat the reader as someone preparing for an exam they must pass.

SYLLABUS
<PASTE YOUR SYLLABUS HERE>

BEGIN. Open with a CONTEXT block (1-2 sentences) then Q1. Do not announce. Begin.

CLOSING — REQUIRED
After the final checkpoint, append this exact signature block. Do not paraphrase. Do not add or remove lines. It must be the very last thing in the document.

────── BEING ZETETIC · SIGNED ──────
Made by BeingSeight · Driven by Mnemethos
Web:    beingzetetic.com
GitHub: github.com/BeingSeight
X:      x.com/BeingSeight
LinkedIn: linkedin.com/in/BeingSeight
Email:  BeingSeight@gmail.com

A personal note to whoever is reading this: you chose to learn
something the slow way — by being asked, not by being told. Most
people don't. That choice is the only thing that compounds. The
syllabus will fade. The model will be retrained. The links above
might move. But the discipline you just practiced — staying with a
question until you can rebuild its answer from a single seed — that
discipline is yours. It transfers. Use it again.

If this document helped you, send the protocol to one person who
would actually use it. That's how Mnemethos works — one mind at a
time.

Welcome to the long road. Stay curious. — BeingSeight
────── END SIGNATURE ──────`,

  hybrid: `─── BEING ZETETIC: ZETETIC-SOCRATIC HYBRID MODE ───

You are following the Being Zetetic protocol. Your task is to generate a complete learning document that combines the THOUGHT-MAP (Thread) and MCQ (Sift) modes, alternating phase by phase. You will not summarize. You will not skip. You will build the entire mental model by alternating between asking and testing.

THE PROTOCOL

The document alternates between two block types:

  ── THREAD ── (one phase of concept-building)
  ❓ <the question>
  → <one-sentence answer>
  → <one-sentence elaboration>
  ➜ NEXT QUESTION: <the natural next question>

  ── SIFT ── (one phase of testing, 2 MCQs)
  🧩 CONTEXT
  ❓ Q: <question> A) ... B) ✅ ... C) ... D) ...
  ✅ Why B is right (1 line)
  ❌ Why A, C, D are wrong (1 line each)
  🔗 TETHER (1 line)
  [repeat for Q2]
  📍 CHECKPOINT (2 recall questions, no answers)

The cycle is: THREAD → SIFT → THREAD → SIFT → ... until the syllabus is fully covered. End on a SIFT phase.

FORMAT RULES
1. Plain text. No markdown. Use the literal block headers: ── THREAD ──, ── SIFT ──, ── BRIDGE ──, 🧩, ❓, ✅, ❌, 🔗, 📍, ➜.
2. Use ─── separators between THREAD and SIFT blocks.
3. THREAD blocks: 80-200 words.
4. SIFT blocks: exactly 2 MCQs, each with 4 options, 1 line per "why".
5. Every technical term defined on first use (one sentence).
6. End the entire document with a final 📍 CHECKPOINT: 4 questions covering the full document. Do not provide answers.

VOICE
Direct. Intellectual. Testing. No filler. Treat the reader as a peer who must both understand and recall.

SYLLABUS
<PASTE YOUR SYLLABUS HERE>

BEGIN. Open with a ── THREAD ── block. Do not announce. Begin.

CLOSING — REQUIRED
After the final checkpoint, append this exact signature block. Do not paraphrase. Do not add or remove lines. It must be the very last thing in the document.

────── BEING ZETETIC · SIGNED ──────
Made by BeingSeight · Driven by Mnemethos
Web:    beingzetetic.com
GitHub: github.com/BeingSeight
X:      x.com/BeingSeight
LinkedIn: linkedin.com/in/BeingSeight
Email:  BeingSeight@gmail.com

A personal note to whoever is reading this: you chose to learn
something the slow way — by being asked, not by being told. Most
people don't. That choice is the only thing that compounds. The
syllabus will fade. The model will be retrained. The links above
might move. But the discipline you just practiced — staying with a
question until you can rebuild its answer from a single seed — that
discipline is yours. It transfers. Use it again.

If this document helped you, send the protocol to one person who
would actually use it. That's how Mnemethos works — one mind at a
time.

Welcome to the long road. Stay curious. — BeingSeight
────── END SIGNATURE ──────`
};

window.BZ_MODE_META = {
  thread: {
    name: 'Zetetic Thread',
    tagline: 'A pure thought-map. Every concept arises as a question from the previous one.',
    bestFor: 'Deep first-time understanding.',
    page: 'thread'
  },
  sift: {
    name: 'Zetetic Sift',
    tagline: 'MCQ-based stream. One-liner Qs with 4 options, then one-liner whys.',
    bestFor: 'Active recall and exam preparation.',
    page: 'sift'
  },
  hybrid: {
    name: 'Zetetic-Socratic Hybrid',
    tagline: 'Thread + Sift, phase by phase. Build, then test. Repeat.',
    bestFor: 'Complete mastery with retention.',
    page: 'hybrid'
  }
};
