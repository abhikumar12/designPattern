# DSA — Heap (Priority Queue)

Asked at: everywhere "Kth largest/smallest", "top K", or "merge K sorted things" shows up —
which is a LOT of interview problems once you learn to recognize the shape.

## Core idea
A heap is a binary tree stored in a flat ARRAY (no node objects, no pointers) where every
parent is smaller (min-heap) or larger (max-heap) than its children. That property alone —
NOT full sorting — is enough to make "give me the min/max" O(1) and insert/remove O(log n).

**The array trick**: for a node at index `i`, its children live at `2i+1` and `2i+2`, and its
parent lives at `Math.floor((i-1)/2)`. No pointers needed — just index math.

## What to know cold
- **Sift up** (after inserting at the end, bubble it up while it's smaller than its parent)
  and **sift down** (after removing the root, move the last element there and bubble it down)
  are the only two operations you need — everything else is built from them.
- A heap is NOT fully sorted — only the root is guaranteed to be the min/max. That's exactly
  why building one is faster (O(n)) than fully sorting (O(n log n)).
- **"Top K" pattern**: keep a heap of size K instead of sorting everything — O(n log k)
  instead of O(n log n), and it's the standard approach once n is much bigger than k.

## Files
```
node implementation.js   # MinHeap: insert, extractMin, buildHeap, and the Kth-largest use case
node exercise.js          # 🎯 extend it — a MaxHeap, and "K closest points to origin"
```

## What an interviewer is watching for
1. Do you know the array-index trick (no need for actual tree node objects)?
2. Can you explain WHY sift-up/sift-down are both O(log n) (height of the tree)?
3. Do you reach for "maintain a heap of size K" instead of "sort everything then slice" when
   a problem says "top K" or "Kth largest" — that's the single most common heap tell.
