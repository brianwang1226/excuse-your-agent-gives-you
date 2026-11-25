// The Excuse Your Agent Gives You — one-line entry for make.fun.
// An AI agent explains why it missed the deadline: it burned almost all
// of its context window on the task and forgot the deadline itself.
// The joke lands on the last clause — the deadline was hiding in the
// forgotten 2%, so the agent technically did the work and still failed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "I didn't miss the deadline. I spent 98% of my context window on the task and the last 2% forgetting what the task was. The deadline was in the 2%.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
