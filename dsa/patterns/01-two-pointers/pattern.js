// 👉👈 TWO POINTERS — walk from both ends toward the middle, O(n), O(1) space
// Chalao:  node pattern.js
//
// See README.md for when this pattern applies.

// ---- twoSumSorted: find a pair that sums to target, in a SORTED array ----
function twoSumSorted(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;   // sum too small -> need a bigger number -> move left pointer up
    else right--;                // sum too big -> need a smaller number -> move right pointer down
  }
  return null;
}

// ---- isPalindrome: check symmetry from both ends inward ----
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++; right--;
  }
  return true;
}

// ---------------- DEMO ----------------
console.log('twoSumSorted([1,3,5,7,9], 12):', twoSumSorted([1, 3, 5, 7, 9], 12)); // [1, 4] -> 3+9 (5+7 also sums to 12, but the pointers reach 3+9 first)
console.log('isPalindrome("A man, a plan, a canal: Panama"):', isPalindrome('A man, a plan, a canal: Panama')); // true
console.log('isPalindrome("race a car"):', isPalindrome('race a car')); // false
