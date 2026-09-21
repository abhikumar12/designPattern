# Pattern — Greedy

Asked at: everywhere interval/scheduling problems show up. The trickiest pattern to know
WHEN to trust — greedy is fast when it works, but it doesn't always give the right answer.

## When to reach for it (and the catch)
A greedy algorithm makes the locally-best choice at every step, never reconsidering it, and
hopes that adds up to a globally-best answer. **It doesn't always work** — that's the catch,
and it's exactly why DP (Lesson 6) exists: DP is what you reach for when greedy's "never
look back" assumption breaks.

Greedy DOES work when the problem has the **greedy-choice property**: the locally optimal
choice at each step is provably part of SOME globally optimal solution. Interval scheduling
is the textbook example where this holds — see the proof sketch in the code comments.

## Files
```
node pattern.js      # activity selection (interval scheduling) + jump game, both greedy
node exercise.js      # 🎯 extend it — merge intervals, and a case where greedy FAILS
```

## What an interviewer is watching for
1. Can you at least SKETCH why the greedy choice is safe for this specific problem, instead
   of just asserting "greedy works here" without justification?
2. Do you know greedy isn't universally applicable — being asked to identify a case where
   the "obvious" greedy choice fails (see the exercise) is a real, common follow-up question.
