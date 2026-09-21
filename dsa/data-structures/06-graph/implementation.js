// 🕸️ GRAPH — adjacency list + BFS + DFS, the two traversals that unlock most graph problems
// Chalao:  node implementation.js

class Graph {
  #adjacency = new Map();

  addNode(node) { if (!this.#adjacency.has(node)) this.#adjacency.set(node, []); }

  addEdge(a, b) { // undirected: connects both ways
    this.addNode(a); this.addNode(b);
    this.#adjacency.get(a).push(b);
    this.#adjacency.get(b).push(a);
  }

  neighbors(node) { return this.#adjacency.get(node) ?? []; }

  bfs(start) {
    const visited = new Set([start]);
    const order = [];
    const queue = [start];
    while (queue.length) {
      const node = queue.shift(); // small demo graphs -- fine; see Stack & Queue lesson for O(1) version
      order.push(node);
      for (const next of this.neighbors(node)) {
        if (!visited.has(next)) { visited.add(next); queue.push(next); }
      }
    }
    return order;
  }

  dfs(start) {
    const visited = new Set();
    const order = [];
    const walk = (node) => {
      if (visited.has(node)) return;
      visited.add(node);
      order.push(node);
      for (const next of this.neighbors(node)) walk(next);
    };
    walk(start);
    return order;
  }

  // BFS also gives you shortest path length in an UNWEIGHTED graph, almost for free
  shortestPath(start, end) {
    const visited = new Set([start]);
    const queue = [[start, 0]];
    while (queue.length) {
      const [node, dist] = queue.shift();
      if (node === end) return dist;
      for (const next of this.neighbors(node)) {
        if (!visited.has(next)) { visited.add(next); queue.push([next, dist + 1]); }
      }
    }
    return -1; // unreachable
  }

  connectedComponents() {
    const visited = new Set();
    const components = [];
    for (const node of this.#adjacency.keys()) {
      if (visited.has(node)) continue;
      const component = this.dfs(node);
      component.forEach((n) => visited.add(n));
      components.push(component);
    }
    return components;
  }
}

// ---------------- DEMO ----------------
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('E', 'F'); // disconnected from the rest

console.log('BFS from A:', graph.bfs('A'));
console.log('DFS from A:', graph.dfs('A'));
console.log('shortest path A -> D:', graph.shortestPath('A', 'D')); // 2
console.log('connected components:', graph.connectedComponents());
