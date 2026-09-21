# DSA — Linked List

Asked at: everywhere, foundational. Also the base for a big chunk of "fast & slow pointer"
questions (cycle detection, middle of list, Nth-from-end) — see that pattern lesson.

## Core idea
A linked list is a chain of nodes, each holding a value and a pointer to the next node.
Unlike an array, there's no contiguous memory — insertion/deletion at a KNOWN position is
O(1) (no shifting), but random access is O(n) (must walk from the head).

## What to know cold
- Singly vs doubly linked (we implement singly here — the harder, more commonly-asked one)
- Reversing a list IN PLACE, O(1) space (classic whiteboard question, also appears buried
  inside bigger problems)
- Finding the middle in ONE pass, and detecting a cycle — both via fast & slow pointers
  (fast moves 2x speed) — see [Fast & Slow Pointers](../../patterns/03-fast-slow-pointers/)

## Files
```
node implementation.js   # LinkedList: push, reverse, findMiddle, hasCycle
node exercise.js          # 🎯 extend it — merge two sorted lists, remove Nth from end
```

## What an interviewer is watching for
1. Do you reverse in-place with O(1) space, not by building a new list/array?
2. Do you know the fast/slow pointer trick well enough to use it for BOTH "find middle" and
   "detect cycle" without re-deriving it from scratch each time?
3. Can you reason about edge cases (empty list, single node, list already a cycle from head)?
