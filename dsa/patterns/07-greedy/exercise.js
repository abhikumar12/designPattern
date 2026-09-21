// 🎯 EXERCISE — one more greedy problem, and a case where greedy actually FAILS.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `mergeIntervals(intervals)` — merge all overlapping intervals into their union.
//         Sort by START time (not end time this time), then walk through: if the current
//         interval overlaps the last one you kept (its start <= the kept one's end), merge
//         them (extend the end); otherwise, start a new kept interval.
//
// TODO 2 (the important one): construct a small example of the COIN CHANGE problem (given
//         coin denominations and a target amount, use the FEWEST coins possible) where the
//         "obvious" greedy strategy — always take the largest coin that fits — gives the
//         WRONG answer. Hint: try denominations like [1, 3, 4] with a target of 6. Write out
//         (in a comment) what greedy picks vs. what the actual optimal answer is, and explain
//         in one sentence why this is exactly the kind of problem Dynamic Programming
//         (Lesson 6) exists for.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
