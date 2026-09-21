# Pattern — Backtracking

Asked at: everywhere "all possible X" or "every valid arrangement" shows up — subsets,
permutations, combinations, N-Queens, Sudoku solvers.

## When to reach for it
The problem asks to generate/count ALL valid ways to do something, and the search space is
built up incrementally (adding one element/choice at a time). Backtracking explores a
decision tree: make a choice, recurse, and if it leads nowhere (or after exploring it fully),
UNDO the choice and try the next one.

## The shape (it's always the same skeleton)
```
function backtrack(currentState, choices) {
  if (currentState is a complete/valid solution) { record it; return; }
  for (choice of choices) {
    make the choice (mutate currentState)
    backtrack(currentState, remaining choices)
    undo the choice (mutate currentState back)   <- the "back" in backtracking
  }
}
```

## Files
```
node pattern.js      # subsets + permutations, both using the same backtrack skeleton
node exercise.js      # 🎯 extend it — combination sum, N-Queens
```

## What an interviewer is watching for
1. Do you correctly UNDO the choice after recursing (the classic bug: forgetting to pop/undo,
   so state leaks between branches)?
2. Can you add PRUNING — bail out of a branch early once you know it can't lead to a valid
   solution, instead of exploring it fully first? (Combination Sum needs this: stop adding
   numbers once the running sum exceeds the target.)
