# DSA — Binary Search Tree (BST)

Asked at: everywhere. Also the base other structures build on (heaps, tries share the "tree
+ recursive traversal" shape).

## Core idea
A binary tree where every node's left subtree holds smaller values and its right subtree
holds larger values. That ordering makes search/insert/delete **average-case O(log n)** — you
discard half the remaining tree at every step, same idea as binary search on a sorted array.

**Worst case is O(n)**, though — if you insert already-sorted data, the tree degenerates into
a straight line (basically a linked list). Real-world BSTs (Red-Black trees, AVL trees) add
self-balancing to guarantee O(log n) even then; we implement the plain (unbalanced) version
here since that's what gets asked, and self-balancing is usually a "do you know this exists"
follow-up, not something you're expected to code live.

## What to know cold
- **In-order traversal of a BST visits nodes in SORTED order** — this is the single most
  useful fact about BSTs and comes up constantly ("validate a BST", "kth smallest element").
- Deletion has 3 cases: leaf node (just remove it), one child (splice it out), two children
  (replace with the in-order successor — the smallest node in the right subtree — then
  delete THAT node instead, which is guaranteed to have at most one child).

## Files
```
node implementation.js   # BST: insert, search, delete, in-order/pre-order/post-order traversal
node exercise.js          # 🎯 extend it — validate a BST, find the kth smallest element
```

## What an interviewer is watching for
1. Do you know in-order traversal gives sorted output, and can you use that fact instead of
   re-deriving traversal logic from scratch every time?
2. Can you correctly handle all 3 deletion cases, especially the two-children case?
3. Do you know average O(log n) vs worst O(n), and WHY (degenerates on sorted input)?
