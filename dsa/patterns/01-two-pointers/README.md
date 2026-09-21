# Pattern — Two Pointers

Asked at: everywhere. The simplest pattern here, and the one that most reliably turns an
O(n²) nested loop into O(n).

## When to reach for it
The problem involves a **sorted** array (or can be sorted), and you're comparing pairs of
elements — especially "find a pair/triplet that sums to X" or "check symmetry" (palindrome).
Instead of a nested loop checking every pair (O(n²)), walk from BOTH ends toward the middle,
using the sorted order to decide which pointer to move — O(n).

## Files
```
node pattern.js      # two-sum on a sorted array + valid palindrome, both O(n)
node exercise.js      # 🎯 extend it — 3Sum, container with most water
```

## What an interviewer is watching for
1. Do you notice the array is sorted (or sortable) and reach for two pointers INSTEAD of a
   hash map — two pointers uses O(1) extra space, a hash-map approach uses O(n).
2. Can you justify WHICH pointer to move at each step, and why that never skips a valid
   answer (this is the part people hand-wave and get wrong)?
