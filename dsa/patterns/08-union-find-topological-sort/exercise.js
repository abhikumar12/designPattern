// 🎯 EXERCISE — one Union-Find problem, one topological-sort problem.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `findRedundantConnection(edges)` — given a graph that was a valid TREE and then
//         had ONE extra edge added (creating exactly one cycle), find that extra edge.
//         Process edges in order with a UnionFind: the first edge where `union(a, b)`
//         returns false (they were ALREADY connected) is the redundant one — return it
//         immediately.
//
// TODO 2: `canFinishAllCourses(numCourses, prerequisites)` — return true/false for whether
//         all courses can be completed given the prerequisite constraints. This is almost
//         free once you have topologicalSort() from pattern.js — just check whether it
//         returns null (cycle -> impossible) or a full order (possible).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
