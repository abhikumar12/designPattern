// 🎯 EXERCISE — two more classic BST interview questions.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: `isValidBST(root)` — check whether a binary tree is a VALID BST. The tempting-but-
//         WRONG approach is checking `node.left.value < node.value < node.right.value` at
//         every node (this misses violations further down the tree). Correct approach:
//         either (a) do an in-order traversal and check the result is strictly increasing,
//         or (b) recurse with a (min, max) valid-range that narrows at each step.
//
// TODO 2: `kthSmallest(root, k)` — return the kth smallest value in the BST. Use the
//         in-order-is-sorted fact: do an in-order traversal and return the kth element — or,
//         for better than O(n) when k is small, stop the traversal early once you've visited
//         k nodes instead of collecting the whole array first.
//
// TODO 3 (bonus): what happens to `insert()`'s time complexity if you insert values
//         1, 2, 3, 4, 5 in that exact order? Draw (in a comment) what the tree looks like
//         and explain why every operation becomes O(n) instead of O(log n).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
