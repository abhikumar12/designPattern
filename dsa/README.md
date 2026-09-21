# DSA — Data Structures & Algorithms

The coding-round track. Unlike the other modules, DSA isn't about applying a design — it's
about pattern-matching a NEW problem to one of a small set of techniques fast enough to solve
it in an interview. So this module is organized the same way the best DSA prep guides are:
**core data structures** (implement them from scratch, know their guarantees) and
**algorithmic patterns** (~9 techniques that generalize to the large majority of coding
questions you'll actually be asked).

## How to use this module
1. For a data structure: read the README, run `implementation.js`, then do `exercise.js`.
2. For a pattern: read the README's "When to reach for it" section FIRST — recognizing when
   a pattern applies is the actual interview skill, more than the code itself. Then run
   `pattern.js`, then do `exercise.js`.
3. When you hit a NEW problem you've never seen: before coding anything, ask "which of these
   9 patterns does this smell like?" That's the real practice — this module gives you the
   vocabulary to ask that question instead of staring at a blank editor.

## Data Structures

| # | Structure | Why it's asked |
|---|-----------|------------------|
| 1 | [Linked List](data-structures/01-linked-list/) | reversal, cycle detection, foundational |
| 2 | [Stack & Queue](data-structures/02-stack-queue/) | parentheses matching, monotonic stack |
| 3 | [Hash Map](data-structures/03-hash-map/) | O(1) "have I seen this?" — the #1 interview tool |
| 4 | [Binary Search Tree](data-structures/04-binary-search-tree/) | ordered data, O(log n) search |
| 5 | [Heap](data-structures/05-heap/) | top-K, Kth largest, priority scheduling |
| 6 | [Graph (BFS/DFS)](data-structures/06-graph/) | shortest path, connectivity, grid problems |

## Algorithmic Patterns

| # | Pattern | Tell-tale sign in the problem statement |
|---|---------|-------------------------------------------|
| 1 | [Two Pointers](patterns/01-two-pointers/) | sorted array, pair/triplet sum, palindrome |
| 2 | [Sliding Window](patterns/02-sliding-window/) | contiguous subarray/substring |
| 3 | [Fast & Slow Pointers](patterns/03-fast-slow-pointers/) | linked list middle/cycle, "does this loop forever" |
| 4 | [Binary Search](patterns/04-binary-search/) | sorted data, OR "minimize/maximize X such that condition holds" |
| 5 | [Backtracking](patterns/05-backtracking/) | "all possible ways", subsets, permutations, boards |
| 6 | [Dynamic Programming](patterns/06-dynamic-programming/) | optimal value + overlapping subproblems |
| 7 | [Greedy](patterns/07-greedy/) | interval scheduling, "always pick the best available now" |
| 8 | [Union-Find & Topological Sort](patterns/08-union-find-topological-sort/) | connectivity, dependency ordering |
| 9 | [Top-K (Heap)](patterns/09-top-k-heap-pattern/) | "K largest/smallest/most-frequent/closest" |

## How this connects to the rest of the course
DSA isn't a separate island from the rest of this repo — it's the toolbox the other modules
assume you already have. The O(1) `Queue` here is the same shape behind any real message
queue (see [system-design's Message Queues lesson](../system-design/06-message-queues-async-processing/));
the `MinHeap` here is exactly what a real "top-K" or "evict-the-oldest" cache would use under
the hood (see [Caching Strategies](../system-design/02-caching-strategies/)); `UnionFind` is
the standard real-world tool for cluster/network membership problems, the same shape of
question [Consistent Hashing](../system-design/03-consistent-hashing/) deals with at a
distributed-systems scale instead of an in-memory one.
