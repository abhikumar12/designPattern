// 🏃 GREEDY — make the locally-best choice at each step, never look back
// Chalao:  node pattern.js
//
// See README.md for when greedy is provably safe, vs. when it silently gives a wrong answer.

// ---- Activity Selection: max number of non-overlapping intervals you can pick ----
// Greedy rule: always pick the activity that FINISHES EARLIEST among what's left.
// Why this is safe: whatever the optimal solution's first-finishing activity is, swapping it
// for the earliest-finishing one available can only free up MORE room for everything after
// it, never less -- so picking earliest-finish-first never costs you anything.
function maxActivities(intervals) {
  const sorted = [...intervals].sort((a, b) => a[1] - b[1]); // sort by END time
  const selected = [sorted[0]];
  let lastEnd = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    if (start >= lastEnd) { selected.push(sorted[i]); lastEnd = end; }
  }
  return selected;
}

// ---- Jump Game: can you reach the last index, starting at index 0, where nums[i] is the
// MAX jump length from index i? ----
// Greedy rule: track the farthest index reachable so far; if you ever reach an index beyond
// that farthest point before updating it, you're stuck -- there's no jump that gets you past it.
function canJump(nums) {
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // this index is unreachable -- nothing before it could jump here
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
}

// ---------------- DEMO ----------------
console.log('maxActivities:', maxActivities([[1, 4], [3, 5], [0, 6], [5, 7], [3, 9], [5, 9], [6, 10], [8, 11], [8, 12], [2, 14], [12, 16]]));

console.log('canJump([2,3,1,1,4]):', canJump([2, 3, 1, 1, 4])); // true
console.log('canJump([3,2,1,0,4]):', canJump([3, 2, 1, 0, 4])); // false -- stuck at index 3
