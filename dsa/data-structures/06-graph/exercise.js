// 🎯 EXERCISE — two more classic graph interview questions.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: `hasCycle(graph)` — detect whether an UNDIRECTED graph contains a cycle. DFS from
//         each unvisited node, tracking the node you arrived FROM (its parent) — if you ever
//         reach an already-visited node that ISN'T your immediate parent, that's a cycle.
//         (Careful: for undirected graphs, seeing your own parent again is normal, not a
//         cycle — the edge goes both ways.)
//
// TODO 2: `numIslands(grid)` — given a 2D grid of '1' (land) and '0' (water), count the
//         number of islands (connected groups of '1's, connected up/down/left/right only).
//         Treat the grid AS a graph: each land cell is a node, its 4 neighbors are edges.
//         Run DFS (or BFS) from every unvisited land cell, marking everything it touches as
//         visited, and count how many times you had to start a fresh traversal — that count
//         IS the number of islands.
//
// TODO 3 (bonus): implementation.js's BFS uses `queue.shift()`, which is O(n) per call (see
//         the Stack & Queue lesson for why). For a graph with thousands of nodes this adds
//         up. Rewrite `bfs()` to use the O(1) `Queue` class from that lesson instead.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
