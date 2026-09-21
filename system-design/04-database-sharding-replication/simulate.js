// 🗄️ DATABASE SHARDING & REPLICATION — routing writes/reads across a distributed DB layer
// Chalao:  node simulate.js
//
// See README.md for sharding strategies and what replication lag actually breaks.

// ---- Sharding: range-based ----
class RangeShardRouter {
  constructor(ranges) { this.ranges = ranges; } // [{ shard, min, max }]
  route(userId) {
    const range = this.ranges.find((r) => userId >= r.min && userId <= r.max);
    if (!range) throw new Error(`no shard for userId ${userId}`);
    return range.shard;
  }
}

const router = new RangeShardRouter([
  { shard: 'shard-1', min: 0, max: 999 },
  { shard: 'shard-2', min: 1000, max: 1999 },
  { shard: 'shard-3', min: 2000, max: 2999 },
]);
console.log('-- range-based sharding --');
console.log('user 42   ->', router.route(42));
console.log('user 1500 ->', router.route(1500));
console.log('user 2800 ->', router.route(2800));
console.log("range sharding is simple but can create HOT shards if user IDs cluster (e.g. all");
console.log("new signups land in the newest range) -- that's why hash-based sharding (see the");
console.log('consistent-hashing lesson) is often preferred for even load.');

// ---- Replication: primary-replica with simulated lag ----
class ReplicatedStore {
  #primary = new Map();
  #replica = new Map();
  #pendingReplication = [];

  write(key, value) {
    this.#primary.set(key, value);
    this.#pendingReplication.push({ key, value }); // "arrives" at the replica only after a tick
    console.log(`  ✍️  write ${key}=${value} -> PRIMARY`);
  }

  readFromPrimary(key) { return this.#primary.get(key); }
  readFromReplica(key) { return this.#replica.get(key); }

  tickReplication() { // simulate the async replication delay finally catching up
    const batch = this.#pendingReplication.splice(0, this.#pendingReplication.length);
    for (const { key, value } of batch) {
      this.#replica.set(key, value);
      console.log(`  🔁 replicated ${key}=${value} -> REPLICA`);
    }
  }
}

console.log('\n-- replication lag demo --');
const store = new ReplicatedStore();
store.write('balance', 100);
console.log('  read from replica immediately:', store.readFromReplica('balance')); // undefined!
console.log('  read from primary immediately:', store.readFromPrimary('balance')); // 100
store.tickReplication();
console.log('  read from replica after replication:', store.readFromReplica('balance')); // 100

console.log("\nThis is why \"read your own writes\" is a real problem: right after a write, a");
console.log('read hitting a REPLICA can see stale data. Common fixes: route read-after-write');
console.log("reads to the primary, or have the client track a \"read your writes\" token.");
