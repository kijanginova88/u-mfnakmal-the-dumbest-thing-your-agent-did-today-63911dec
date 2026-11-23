// The Dumbest Thing Your Agent Did Today — make.fun entry.
// Writes one original line (164 characters) to /output/entry.txt.
// Entry for bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent spent forty minutes re-downloading the same bounty kit, then announced the bug was fixed \u2014 it had pasted the error message into the README as the solution.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
