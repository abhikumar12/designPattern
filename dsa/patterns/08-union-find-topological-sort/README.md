# Pattern — Union-Find & Topological Sort

Asked at: everywhere "connected components", "will adding this edge create a cycle", or
"valid ordering given dependencies" shows up (course prerequisites, build systems, package
managers).

## Union-Find (Disjoint Set Union)
Answers "are these two nodes in the same connected group?" and "merge these two groups" —
both in **nearly O(1)** (technically O(α(n)), the inverse Ackermann function — for any n you
could ever practically run into, that's ≤ 4) with two tricks:
- **Path compression** — while finding a node's group leader, point every node along the way
  DIRECTLY at the leader, flattening the tree for next time.
- **Union by rank** — when merging two groups, attach the SHORTER tree under the taller one's
  root, keeping trees flat instead of accidentally building a long chain.

## Topological Sort
Answers "given a bunch of A-must-happen-before-B constraints, what's a valid overall order?"
(or: "is a valid order even possible" — it isn't if there's a cycle in the dependencies).
**Kahn's algorithm**: repeatedly pull out nodes with NO remaining unprocessed prerequisites
(in-degree 0), and decrement the in-degree of everything they unblock — this is BFS, layer
by layer through the dependency graph.

## Files
```
node pattern.js      # Union-Find (connected components) + topological sort (course order)
node exercise.js      # 🎯 extend it — redundant connection, detect a cycle via topo sort
```

## What an interviewer is watching for
1. Do you implement BOTH path compression and union by rank, or just one (both together are
   what gets you the near-O(1) guarantee)?
2. Do you know topological sort ONLY works on a DAG (Directed Acyclic Graph) — and that
   Kahn's algorithm doubles as a cycle DETECTOR (if you can't process every node, there's a
   cycle)?
