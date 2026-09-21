// 🎯 EXERCISE — two more classic DP problems, one 1D, one 2D-ish.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `houseRobber(nums)` — you can't rob two ADJACENT houses (triggers an alarm).
//         Maximize total money robbed. Find the recurrence first: for house i, you either
//         (a) skip it (keep whatever the best was through i-1), or (b) rob it (its value +
//         the best through i-2, since i-1 is now off-limits). Write both a memoized version
//         and a space-optimized version (like climbStairsOptimized) that only tracks the
//         last two "best so far" values.
//
// TODO 2: `knapsack01(weights, values, capacity)` — the classic 0/1 knapsack: given items
//         each with a weight and value, and a weight CAPACITY, maximize total value without
//         exceeding capacity (each item used at most once — that's the "0/1": take it or
//         don't). This is 2D DP: `dp[i][w]` = best value using the first i items with
//         capacity w. Recurrence: for each item, either skip it (`dp[i-1][w]`) or take it IF
//         it fits (`values[i] + dp[i-1][w - weights[i]]`) — take whichever is bigger.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
