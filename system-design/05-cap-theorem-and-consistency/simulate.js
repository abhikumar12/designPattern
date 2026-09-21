// ⚖️ CAP THEOREM — during a network partition, pick Consistency OR Availability (not both)
// Chalao:  node simulate.js
//
// See README.md for the full theorem, real systems, and consistency models.

class Node {
  constructor(id) { this.id = id; this.data = new Map(); }
}

// ---- CP system: during a partition, refuse requests rather than risk stale data ----
class CPStore {
  constructor(nodes) { this.nodes = nodes; this.partitioned = false; }
  write(key, value) {
    if (this.partitioned) { console.log(`  ❌ [CP] write REJECTED — partition detected, can't guarantee consistency`); return false; }
    this.nodes.forEach((n) => n.data.set(key, value));
    console.log(`  ✅ [CP] write succeeded on all ${this.nodes.length} nodes`);
    return true;
  }
  read(key) {
    if (this.partitioned) { console.log(`  ❌ [CP] read REJECTED — can't guarantee it's not stale`); return null; }
    return this.nodes[0].data.get(key);
  }
}

// ---- AP system: during a partition, keep serving, accept possible staleness ----
class APStore {
  constructor(nodes) { this.nodes = nodes; this.partitioned = false; }
  write(key, value) {
    const reachable = this.partitioned ? [this.nodes[0]] : this.nodes; // only reach some nodes during a partition
    reachable.forEach((n) => n.data.set(key, value));
    console.log(`  ✅ [AP] write succeeded on ${reachable.length}/${this.nodes.length} nodes${this.partitioned ? ' (partitioned!)' : ''}`);
    return true;
  }
  read(key, fromNodeIndex = 0) {
    const value = this.nodes[fromNodeIndex].data.get(key);
    console.log(`  ✅ [AP] read from node ${fromNodeIndex}: ${value}${this.partitioned ? ' (might be stale!)' : ''}`);
    return value;
  }
}

// ---------------- DEMO ----------------
console.log('-- normal operation (no partition) --');
const cp = new CPStore([new Node('n1'), new Node('n2'), new Node('n3')]);
cp.write('x', 1);
cp.read('x');

console.log('\n-- network partition happens --');
cp.partitioned = true;
cp.write('x', 2); // rejected -- CP chooses Consistency over Availability
cp.read('x');      // rejected

const ap = new APStore([new Node('n1'), new Node('n2'), new Node('n3')]);
ap.write('y', 1);
ap.partitioned = true;
ap.write('y', 2);  // "succeeds" but only reaches 1 node -- AP chooses Availability
ap.read('y', 0);    // sees the new value
ap.read('y', 1);    // sees the OLD value -- stale read, but the system stayed UP

console.log('\nNeither choice is "wrong" -- it depends on the product. A payments ledger');
console.log('usually wants CP (better to reject than double-spend). A social media feed');
console.log('usually wants AP (better to show slightly stale data than an error page).');
