# Pattern — Binary Search

Asked at: everywhere. Most people know binary search on a plain sorted array — the higher-
signal version is recognizing it applies to "binary search on the ANSWER" too, which shows
up constantly in harder problems.

## When to reach for it
Classic case: find a value in a SORTED array — O(log n) instead of O(n).

**The upgrade that matters more**: whenever a problem asks for the MINIMUM/MAXIMUM value
that satisfies some condition, and "does X satisfy the condition" gets EASIER to check as X
increases (or decreases) — monotonically — you can binary search over the space of POSSIBLE
ANSWERS, not just over an array. This is "binary search on the answer" and it's the pattern
most people miss.

## Files
```
node pattern.js      # search in a rotated sorted array + binary search on the answer space
node exercise.js      # 🎯 extend it — find first/last position of a target, sqrt(x)
```

## What an interviewer is watching for
1. Do you get the loop condition and midpoint math exactly right (`left <= right`,
   `mid = left + Math.floor((right - left) / 2)` to avoid overflow in languages where that
   matters, and correctly updating `left = mid + 1` / `right = mid - 1`)? Off-by-one errors
   here are the #1 thing that trips people up under pressure.
2. Can you recognize a "binary search on the answer" problem that doesn't LOOK like a search
   problem at all (no sorted array in sight)?
