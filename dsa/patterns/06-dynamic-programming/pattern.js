// 🧩 DYNAMIC PROGRAMMING — solve each subproblem once, reuse the answer
// Chalao:  node pattern.js
//
// See README.md for top-down (memo) vs bottom-up (tabulation), and how to find the recurrence.

// ---- Climbing Stairs: how many distinct ways to climb n stairs, taking 1 or 2 at a time ----
// Recurrence: ways(n) = ways(n-1) + ways(n-2) -- your LAST step was either a 1-step or a
// 2-step, and those two cases are mutually exclusive and cover everything.

// Top-down: natural recursion + a memo cache
function climbStairsMemo(n, memo = new Map()) {
  if (n <= 2) return n;
  if (memo.has(n)) return memo.get(n);
  const result = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

// Bottom-up: build the table from the smallest subproblems up
function climbStairsTabulated(n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);
  dp[1] = 1; dp[2] = 2;
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}

// Space-optimized: we only ever look at the last TWO values, so keep just those, not a whole array
function climbStairsOptimized(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) { const cur = prev1 + prev2; prev2 = prev1; prev1 = cur; }
  return prev1;
}

// ---- 2D DP: Unique Paths — how many ways to walk from top-left to bottom-right of an
// m x n grid, moving only right or down ----
// Recurrence: paths(r, c) = paths(r-1, c) + paths(r, c-1) -- you arrived at (r, c) from
// EITHER directly above OR directly to the left, so sum those two subproblems.
function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1)); // first row/col: only 1 way each
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }
  return dp[m - 1][n - 1];
}

// ---------------- DEMO ----------------
console.log('climbStairsMemo(10):', climbStairsMemo(10));
console.log('climbStairsTabulated(10):', climbStairsTabulated(10));
console.log('climbStairsOptimized(10):', climbStairsOptimized(10)); // all three agree: 89

console.log('uniquePaths(3, 7):', uniquePaths(3, 7)); // 28
