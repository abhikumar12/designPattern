// 🌲 BACKTRACKING — explore a decision tree: choose, recurse, undo
// Chalao:  node pattern.js
//
// See README.md for the skeleton this pattern always follows.

// ---- All subsets of a set (the "power set") ----
function subsets(nums) {
  const result = [];
  const current = [];

  function backtrack(start) {
    result.push([...current]); // every state along the way IS a valid subset -- record it now
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);       // choose
      backtrack(i + 1);            // recurse
      current.pop();               // undo -- try the next choice with a clean slate
    }
  }
  backtrack(0);
  return result;
}

// ---- All permutations of a set ----
function permutations(nums) {
  const result = [];
  const current = [];
  const used = new Array(nums.length).fill(false);

  function backtrack() {
    if (current.length === nums.length) { result.push([...current]); return; } // only COMPLETE arrangements count
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; current.push(nums[i]);   // choose
      backtrack();                              // recurse
      used[i] = false; current.pop();           // undo
    }
  }
  backtrack();
  return result;
}

// ---------------- DEMO ----------------
console.log('subsets([1,2,3]):', subsets([1, 2, 3]));
// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

console.log('permutations([1,2,3]):', permutations([1, 2, 3]));
// all 6 orderings of [1,2,3]
