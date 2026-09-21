// 🎯 EXERCISE — extend the sharding/replication design.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: implement `HashShardRouter` — same `route(key)` contract as RangeShardRouter, but
//         uses `hash(key) % shardCount` (reuse the MD5-based `hash()` from Lesson 3 — it's
//         what gives an even spread; a cheap hand-rolled hash can silently cluster similar
//         keys together). Route the same 20 keys through both routers and eyeball how much
//         more evenly the hash router spreads them.
//
// TODO 2: fix the "read your own writes" problem from simulate.js — add a
//         `writeThenReadOwn(store, key, value)` helper that: writes the value, then reads it
//         back from the PRIMARY (not the replica) immediately after, so the caller always
//         sees their own write regardless of replication lag.
//
// TODO 3 (bonus): ReplicatedStore currently has exactly one replica. Extend it to support
//         MULTIPLE replicas (an array instead of a single Map), and add a
//         `readFromAnyReplica(key)` that round-robins across them. What new problem does
//         this introduce that a single replica didn't have? (Hint: think about what happens
//         if replicas lag by DIFFERENT amounts.)
