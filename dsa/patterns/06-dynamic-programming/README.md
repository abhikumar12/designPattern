# Pattern — Dynamic Programming (DP)

Asked at: everywhere, and usually the hardest category in an interview loop. The one pattern
here that genuinely takes practice to get a feel for — there's no shortcut past doing several
of these.

## When to reach for it
The problem asks for an optimal value (min/max/count of ways) AND has **overlapping
subproblems** — a naive recursive solution would recompute the same smaller problem many
times. DP means: solve each distinct subproblem ONCE, and reuse the answer (cache it).

## Two ways to write it (same idea, different direction)
- **Top-down (memoization)** — write the natural recursive solution first, then add a cache
  (a Map or array) so repeated calls with the same arguments return instantly instead of
  recomputing.
- **Bottom-up (tabulation)** — build an array of answers to SMALLER subproblems first, and
  use them to build up to the answer for the full problem. No recursion, usually a bit faster
  in practice (no call-stack overhead).

## The real skill: finding the recurrence
Every DP problem reduces to answering: "if I know the answer to smaller version(s) of this
problem, how do I combine them to get THIS answer?" That relationship is the recurrence —
find it first, on paper, before writing any code.

## Files
```
node pattern.js      # 1D DP (climbing stairs, both memoized and tabulated) + 2D DP (unique
                      # paths through a grid)
node exercise.js      # 🎯 extend it — house robber, 0/1 knapsack
```

## What an interviewer is watching for
1. Can you write the brute-force recursive solution FIRST, identify which calls repeat, and
   THEN add memoization — rather than trying to jump straight to a tabulated array (that's
   usually how experienced people actually arrive at these, even if the final code looks
   different)?
2. Do you know the space optimization trick: many 1D DP problems only need the last 1-2
   values, not the whole array (see `climbStairsOptimized` in pattern.js)?
