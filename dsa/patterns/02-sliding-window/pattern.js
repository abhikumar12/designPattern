// 🪟 SLIDING WINDOW — track what enters/leaves the window instead of recomputing it, O(n)
// Chalao:  node pattern.js
//
// See README.md for fixed vs. variable window, and when each applies.

// ---- Fixed-size window: max sum of any contiguous subarray of size k ----
function maxSumSubarray(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i]; // build the first window
  let maxSum = windowSum;

  for (let end = k; end < nums.length; end++) {
    windowSum += nums[end] - nums[end - k]; // add what enters, remove what leaves
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// ---- Variable-size window: longest substring without repeating characters ----
function longestUniqueSubstring(s) {
  const seen = new Map(); // char -> last index seen
  let left = 0, longest = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1; // shrink the window to just past the previous occurrence
    }
    seen.set(ch, right);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// ---------------- DEMO ----------------
console.log('maxSumSubarray([2,1,5,1,3,2], 3):', maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
console.log('longestUniqueSubstring("abcabcbb"):', longestUniqueSubstring('abcabcbb')); // 3 ("abc")
console.log('longestUniqueSubstring("bbbbb"):', longestUniqueSubstring('bbbbb'));       // 1
