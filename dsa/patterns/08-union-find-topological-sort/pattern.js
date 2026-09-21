// 🧵 UNION-FIND & TOPOLOGICAL SORT — connectivity and dependency ordering
// Chalao:  node pattern.js
//
// See README.md for path compression, union by rank, and Kahn's algorithm.

// ---- Union-Find (Disjoint Set Union) ----
class UnionFind {
  #parent;
  #rank;

  constructor(n) {
    this.#parent = Array.from({ length: n }, (_, i) => i); // everyone starts as their own group leader
    this.#rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.#parent[x] !== x) this.#parent[x] = this.find(this.#parent[x]); // path compression
    return this.#parent[x];
  }

  union(a, b) {
    const rootA = this.find(a), rootB = this.find(b);
    if (rootA === rootB) return false; // already in the same group -- this edge creates a cycle
    // attach the shorter tree under the taller one (union by rank) -- keeps trees flat
    if (this.#rank[rootA] < this.#rank[rootB]) this.#parent[rootA] = rootB;
    else if (this.#rank[rootA] > this.#rank[rootB]) this.#parent[rootB] = rootA;
    else { this.#parent[rootB] = rootA; this.#rank[rootA]++; }
    return true;
  }

  countGroups(n) {
    const roots = new Set();
    for (let i = 0; i < n; i++) roots.add(this.find(i));
    return roots.size;
  }
}

function connectedComponents(n, edges) {
  const uf = new UnionFind(n);
  for (const [a, b] of edges) uf.union(a, b);
  return uf.countGroups(n);
}

// ---- Topological Sort (Kahn's algorithm) ----
function topologicalSort(numCourses, prerequisites) {
  const adjacency = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    adjacency[prereq].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);

  const order = [];
  while (queue.length) {
    const course = queue.shift();
    order.push(course);
    for (const next of adjacency[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : null; // null -> a cycle made full ordering impossible
}

// ---------------- DEMO ----------------
console.log('connectedComponents(5, [[0,1],[1,2],[3,4]]):', connectedComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2 groups: {0,1,2} and {3,4}

console.log('topologicalSort (valid):', topologicalSort(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
// course 1 & 2 need course 0 first; course 3 needs both 1 & 2 -- e.g. [0,1,2,3]

console.log('topologicalSort (cycle -> null):', topologicalSort(2, [[0, 1], [1, 0]]));
