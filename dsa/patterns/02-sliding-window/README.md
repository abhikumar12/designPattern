# Pattern — Sliding Window

Asked at: everywhere. The go-to pattern whenever a problem asks about a CONTIGUOUS
subarray/substring and you catch yourself thinking about a nested loop.

## When to reach for it
The problem wants something about every contiguous subarray/substring of some size (or the
best one of ANY size) — max sum, longest/shortest valid run, etc. A brute force recomputes
each window from scratch (O(n·k) or O(n²)). A sliding window keeps a running result and
only adjusts for what ENTERS and LEAVES the window as it slides — O(n).

## Two flavors
- **Fixed-size window** — window size k is given. Slide by adding the new right element and
  removing the leftmost element every step.
- **Variable-size window** — grow the right edge until some condition breaks, then shrink
  from the left until it's valid again (classic: "longest substring without repeating
  characters").

## Files
```
node pattern.js      # fixed window (max sum subarray of size k) + variable window (longest
                      # substring without repeats)
node exercise.js      # 🎯 extend it — minimum size subarray sum, longest substring with
                      # at most K distinct characters
```

## What an interviewer is watching for
1. Do you recognize "contiguous subarray/substring" as the sliding-window tell, instead of
   reaching for nested loops?
2. For variable-size windows, do you correctly shrink from the left in a `while` (not `if`) —
   a single shrink step isn't always enough to restore validity.
