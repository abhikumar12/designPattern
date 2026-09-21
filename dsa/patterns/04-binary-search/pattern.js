// 🔍 BINARY SEARCH — O(log n) search, on both arrays and "answer spaces"
// Chalao:  node pattern.js
//
// See README.md for the "binary search on the answer" upgrade — the part most people miss.

// ---- Classic: search in a ROTATED sorted array (e.g. [4,5,6,7,0,1,2]) ----
function searchRotated(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) { // left half [left..mid] is normally sorted
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else { // right half [mid..right] is normally sorted instead
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

// ---- "Binary search on the answer": minimum EATING SPEED to finish all bananas in `h` hours
// (a simplified version of the classic "Koko Eating Bananas" problem) ----
function minEatingSpeed(piles, h) {
  const hoursNeeded = (speed) =>
    piles.reduce((total, pile) => total + Math.ceil(pile / speed), 0);

  let left = 1, right = Math.max(...piles); // the answer (a valid speed) lies somewhere in here
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (hoursNeeded(mid) <= h) right = mid; // speed `mid` works -> maybe a SLOWER speed also works
    else left = mid + 1;                     // speed `mid` too slow -> need to eat faster
  }
  return left; // smallest speed that still finishes in time
}

// ---------------- DEMO ----------------
console.log('searchRotated([4,5,6,7,0,1,2], 0):', searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log('searchRotated([4,5,6,7,0,1,2], 3):', searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1

console.log('minEatingSpeed([3,6,7,11], 8):', minEatingSpeed([3, 6, 7, 11], 8)); // 4
