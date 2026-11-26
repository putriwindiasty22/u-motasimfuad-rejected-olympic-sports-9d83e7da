import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gag works because each part breaks a different Olympic expectation:
// the event rewards doing nothing, the foul is something you do in your
// sleep, and the doping is a dream. Keep the parts in that order.
const EVENT = "Freestyle Napping";
const RULE = "athletes race to fall asleep first; snoring is a foul";
const TWIST = "dreaming of the finish line is doping";

// The full entry line: a rejected Olympic sport described in one sentence.
const LINE = `${EVENT}: ${RULE}, and ${TWIST}.`;

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// A valid entry is a single line of 1–200 characters.
if (LINE.length < MIN_LENGTH || LINE.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${LINE.length}: ${JSON.stringify(LINE)}`,
  );
}

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

writeFileSync(OUT_FILE, LINE + "\n", "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
