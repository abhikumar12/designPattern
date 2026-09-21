# Pattern — Top-K (Heap Pattern)

Asked at: everywhere "top K", "K most frequent", "K closest", or "merge K sorted things"
shows up. The Heap data structure lesson covers the mechanics — this lesson is about
RECOGNIZING when a problem is secretly this pattern.

## When to reach for it
Any time a problem wants the K largest/smallest/closest/most-frequent items out of a bigger
collection. The naive approach sorts everything first — O(n log n). Keeping a heap of size K
instead gets you O(n log k), which matters a lot once n is much bigger than k (e.g. "top 10
trending topics out of a million tweets").

**The counterintuitive part** (worth internalizing, not just memorizing): to find the K
LARGEST items, you keep a MIN-heap of size K — whatever's smallest among your current top-K
(the heap's root) is the first thing evicted when something bigger shows up. Flip it for K
smallest (use a MAX-heap instead).

## Files
```
node pattern.js      # top K frequent elements + merge K sorted arrays, both heap-based
node exercise.js      # 🎯 extend it — Kth largest in a STREAM (heap state persists across calls)
```

## What an interviewer is watching for
1. Do you know WHY the heap size stays capped at K (evicting as you go) instead of pushing
   everything in and popping K times at the end — the capped version is O(n log k), the other
   is O(n log n), and the difference is the entire point when n >> k.
2. Can you correctly explain the "min-heap for K largest" inversion without getting confused?
