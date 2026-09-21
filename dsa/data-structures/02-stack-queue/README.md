# DSA — Stack & Queue

Asked at: everywhere. Stacks specifically power a whole family of "matching/nesting" and
"next greater element" problems that look unrelated until you recognize the shape.

## Core idea
- **Stack** — LIFO (last in, first out). Push/pop from the same end, both O(1).
- **Queue** — FIFO (first in, first out). Enqueue at the back, dequeue from the front, both
  O(1) *if implemented right* — a naive `array.shift()` is O(n) because it re-indexes every
  remaining element; a proper queue avoids that (see `implementation.js`).

## What to know cold
- **Valid parentheses / balanced brackets** — the canonical "why do we even need a stack"
  example: push opening brackets, pop-and-match on closing ones.
- **Monotonic stack** — a stack kept sorted (increasing or decreasing) by popping anything
  that would break the order before pushing. This is THE technique behind "next greater
  element", "daily temperatures", and stock-span style problems — most people can't derive
  it from scratch under pressure, so it's worth memorizing the shape.

## Files
```
node implementation.js   # Stack, Queue (O(1) ops), valid-parentheses, monotonic stack demo
node exercise.js          # 🎯 extend it — min-stack, and queue-via-two-stacks
```

## What an interviewer is watching for
1. Do you know a naive array-shift-based queue is O(n) per dequeue, and how to avoid it
   (two pointers into a fixed array, or two stacks — see the exercise)?
2. Can you recognize when a problem is secretly "next greater/smaller element" in disguise,
   and reach for a monotonic stack instead of nested loops (O(n) vs O(n²))?
