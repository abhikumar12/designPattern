// 🎯 EXERCISE — two harder backtracking problems, one needing pruning.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `combinationSum(candidates, target)` — find all UNIQUE combinations (numbers can
//         repeat within a combination) that sum to target. Same backtrack skeleton as
//         subsets(), but with PRUNING: stop exploring a branch as soon as the running sum
//         would exceed target (don't just build the full combination and check at the end —
//         bail out early, it's much faster on large inputs).
//
// TODO 2: `solveNQueens(n)` — place n queens on an n×n board so none attack each other
//         (no two share a row, column, or diagonal). Backtrack row by row: for each row, try
//         every column; before placing, check it doesn't conflict with any queen already
//         placed (track used columns and both diagonal directions); if valid, place and
//         recurse to the next row, then undo. Return the count of valid solutions (or the
//         board layouts themselves, your choice).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
