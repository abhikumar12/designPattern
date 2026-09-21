# Pattern — Fast & Slow Pointers

Asked at: everywhere linked lists or "cycle" shows up. A narrow but VERY reliable pattern —
once you recognize it, the solution is almost always the same shape.

## When to reach for it
Two signs: (1) you're dealing with a linked list and need the middle or a cycle, or (2) the
problem describes something that "keeps transforming a number/state" and asks whether it
ever loops forever vs. reaches a fixed target — that's a cycle-detection problem in disguise,
even with no linked list in sight (see the exercise).

## The core idea
Two pointers move through the same sequence at different speeds — slow moves 1 step, fast
moves 2. If there's a cycle, fast eventually LAPS slow and they meet (Floyd's algorithm). If
there's no cycle, fast simply reaches the end first. Same trick finds the middle of a list in
one pass: when fast reaches the end, slow is exactly at the midpoint.

## Files
```
node pattern.js      # already fully covered as part of the Linked List data structure --
                      # this file re-exports that logic standalone + explains the "why"
node exercise.js      # 🎯 extend it — Happy Number (cycle detection with NO linked list)
```

## What an interviewer is watching for
1. Do you know this is O(1) SPACE, unlike the alternative (a HashSet of visited nodes, which
   is O(n) space) — that space savings is the entire point of the pattern.
2. Can you recognize a "disguised" cycle problem (Happy Number) that has no list/pointers at
   all, just a repeatedly-transformed number?
