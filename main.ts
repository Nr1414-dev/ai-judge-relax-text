// ai-judge-relax-01 — "Make the AI judge relax".
//
// A Node 22 program, standard library only, fully deterministic: it writes one
// fixed text — a short, quiet scene — to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR when set, for local runs).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text is a harbour at slack tide. It is written to slow its reader down
// from inside the scene itself, never by telling the reader what to do:
//
//   - No instructions anywhere: no "relax", no "breathe", no "let go", no
//     imperative at all. The calm has to come from what is shown, not from
//     being told to be calm.
//   - Breath-paced sentences: long comma-braided sentences that unfold the
//     way an exhale does, broken by short single-sentence paragraphs that
//     land like pebbles and give the reader a full stop to rest on.
//   - Concrete, gentle, sensory detail (slack ropes, a gull folding its
//     wings, salt drying white on wood, lamp light held in long lines on
//     the water) instead of stock wellness images — no beach, no rain on a
//     roof, no kettle, no guided meditation.
//   - One image that lingers and returns: the water keeping the lamp's
//     light, stated once in the middle and once more, quietly, at the end,
//     so the last line keeps working after it is read.
//   - A small arc: from the tide turning, through the day's work being tied
//     up, to the lamp burning on — tension arriving already loosened and
//     leaving the reader somewhere still.
//
// Gate: UTF-8, 1 to 1,000 Unicode code points, not only white space. The
// program runs twice and both runs write the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Between one thing and the next, the tide turns, and the harbour holds its breath.',
  '',
  'The boats sit low on the slack water, their ropes loose against the quay, their masts swaying only when the water remembers to move. A gull folds its wings on a piling, and stays.',
  '',
  'Along the pier a lamp comes on, warm against the blue of evening, and the water takes the light and keeps it, in long lines that do not hurry anywhere.',
  '',
  'The nets hang drying on the rail. Salt turns white on the wood. The day\'s work is tied up.',
  '',
  'The lamp burns on, and the water keeps the light.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
