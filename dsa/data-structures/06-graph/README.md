# DSA — Graph (BFS & DFS)

Asked at: everywhere. Graphs are the most general structure here — trees, linked lists, and
grids are all special cases of graphs, and BFS/DFS are the two traversal tools that unlock
most graph problems.

## Core idea
A graph is a set of nodes (vertices) connected by edges. We represent it as an
**adjacency list** — a map from each node to the list of nodes it connects to. (The
alternative, an adjacency MATRIX, is simpler for dense graphs but wastes O(V²) space on
sparse ones — most interview graphs are sparse, so adjacency list is the default choice.)

## The two traversals — know both, know when to use which
- **BFS (Breadth-First Search)** — explore level by level, using a QUEUE. Finds the
  **shortest path in an unweighted graph** (guaranteed, because it visits everything at
  distance 1 before anything at distance 2).
- **DFS (Depth-First Search)** — go as deep as possible before backtracking, using a STACK
  (or recursion, which is just an implicit stack). Simpler to write recursively, natural fit
  for "does a path exist", "find all connected components", "detect a cycle".

## Files
```
node implementation.js   # Graph: adjacency list, BFS, DFS, shortest path, connected components
node exercise.js          # 🎯 extend it — detect a cycle, number of islands (grid-as-graph)
```

## What an interviewer is watching for
1. Do you reach for BFS specifically when the problem says "shortest path" / "minimum steps"
   / "fewest moves" — DFS does NOT guarantee shortest path.
2. Do you track VISITED nodes (a Set) so you don't infinite-loop on a cycle?
3. Do you recognize that a 2D grid is just a graph in disguise (each cell is a node, its
   up/down/left/right neighbors are edges) — this reframe unlocks a big class of "matrix"
   problems as ordinary BFS/DFS.
