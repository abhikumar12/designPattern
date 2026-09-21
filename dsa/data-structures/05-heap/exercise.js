// 🎯 EXERCISE — extend the heap without breaking its O(log n) operations.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: build a `MaxHeap` — same shape as MinHeap, just flip the two comparisons (in
//         #siftUp and #siftDown) so the LARGEST value ends up at the root instead.
//
// TODO 2: `kClosestToOrigin(points, k)` — given an array of [x, y] points, return the K
//         points closest to (0, 0). Use a MAX-heap of size K, keyed by squared distance
//         (no need for Math.sqrt — comparing squared distances gives the same ordering and
//         avoids the extra work). Evict the FARTHEST point whenever the heap exceeds size K
//         (mirror the kthLargest() shape from implementation.js, but with Max instead of Min
//         and a custom "distance" comparison instead of raw value comparison).
//
// TODO 3 (bonus): why does `kthLargest` use a heap of size K instead of just sorting the
//         whole array and taking `nums[nums.length - k]`? Give the actual time-complexity
//         comparison (in terms of n and k) and say when the heap approach wins.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
