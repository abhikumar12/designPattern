// 🔗 CONSISTENT HASHING — why it beats naive modulo hashing when servers scale in/out
// Chalao:  node simulate.js
//
// See README.md for the problem this solves and how virtual nodes fit in.

// MD5 as a diffusion hash — this is a Node built-in (no npm install), and it's what real
// consistent-hashing implementations (e.g. libketama) actually use: not for security, but
// because it spreads similar-looking keys (`user-0`, `user-1`, `user-2`...) evenly across
// the full 32-bit range. A cheaper hand-rolled hash (djb2, FNV) sounds appealing but often
// clusters near-identical short strings together instead of spreading them — which silently
// breaks this whole demo by making one virtual node "own" a huge cluster of keys at once.
import { createHash } from 'node:crypto';
function hash(str) {
  return createHash('md5').update(str).digest().readUInt32BE(0);
}

// ---- Naive: modulo hashing ----
function naiveAssign(key, serverCount) {
  return hash(key) % serverCount;
}

// ---- Consistent hashing: a ring with virtual nodes for even distribution ----
class ConsistentHashRing {
  #ring = new Map(); // ringHash -> serverId
  #sortedHashes = [];
  #virtualNodesPerServer;

  constructor(virtualNodesPerServer = 100) { this.#virtualNodesPerServer = virtualNodesPerServer; }

  addServer(serverId) {
    for (let i = 0; i < this.#virtualNodesPerServer; i++) {
      this.#ring.set(hash(`${serverId}#${i}`), serverId);
    }
    this.#resort();
  }

  removeServer(serverId) {
    for (const [h, id] of this.#ring) if (id === serverId) this.#ring.delete(h);
    this.#resort();
  }

  #resort() { this.#sortedHashes = [...this.#ring.keys()].sort((a, b) => a - b); }

  getServer(key) {
    const h = hash(key);
    // first server hash >= key hash, walking clockwise; wrap around at the end of the ring
    const idx = this.#sortedHashes.findIndex((serverHash) => serverHash >= h);
    const ringHash = idx === -1 ? this.#sortedHashes[0] : this.#sortedHashes[idx];
    return this.#ring.get(ringHash);
  }
}

// ---------------- DEMO ----------------
const keys = Array.from({ length: 20 }, (_, i) => `user-${i}`);

console.log('-- naive modulo hashing --');
const before3 = keys.map((k) => naiveAssign(k, 3));
const after4 = keys.map((k) => naiveAssign(k, 4)); // one server added
const naiveMoved = before3.filter((_, i) => before3[i] !== after4[i]).length;
console.log(`  keys that moved when going 3 -> 4 servers: ${naiveMoved}/${keys.length}`);

console.log('-- consistent hashing --');
const ring = new ConsistentHashRing();
['server-A', 'server-B', 'server-C'].forEach((s) => ring.addServer(s));
const beforeRing = keys.map((k) => ring.getServer(k));
ring.addServer('server-D'); // one server added
const afterRing = keys.map((k) => ring.getServer(k));
const ringMoved = beforeRing.filter((_, i) => beforeRing[i] !== afterRing[i]).length;
console.log(`  keys that moved when going 3 -> 4 servers: ${ringMoved}/${keys.length}`);

console.log('\nThis is THE reason distributed caches/DBs use consistent hashing: adding a');
console.log('server should only reshuffle ~1/N of the keys, not almost all of them.');
