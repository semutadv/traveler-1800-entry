// Entry for make.fun contest "One Sentence for a Traveler from 1800".
// The program writes exactly one sentence (183 characters, no trailing
// newline) to <output>/entry.txt: a picture of the modern internet built
// only from things a person of 1800 already knows — printing presses,
// post riders, libraries, and a slate carried in the hand.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Imagine every printing press, post rider and library on Earth shrunk into one small glowing slate you carry, where any question you ask is answered by strangers before your tea cools.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  // The output directory is a mount point in the grader: clear what is
  // inside it, never remove the directory itself.
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), SENTENCE, "utf8");
}

main();
