// 🎯 EXERCISE — extend the LRU cache without breaking its O(1) contract.
// Copy simulate.js above this comment (or just edit simulate.js directly), then:
//
// TODO 1: add TTL (time-to-live) expiry — `put(key, value, ttlMs)` should store an expiry
//         timestamp alongside the value, and `get(key)` should treat an expired entry as a
//         miss (return -1 AND actually delete it, don't leave dead weight in the map).
//
// TODO 2: write a `getOrCompute(cache, db, key)` function implementing the CACHE-ASIDE
//         pattern from the README: check the cache first; on a miss, call `db.fetch(key)`,
//         `cache.put()` the result, then return it. Use a fake `db` object with a `fetch()`
//         that just logs "hit the database" so you can see cache hits vs misses in the
//         console output.
//
// TODO 3 (bonus): implement an `LFUCache` (Least Frequently Used) — same get/put contract as
//         LRUCache, but evicts whichever key has the LOWEST access count (track counts in a
//         second Map). What's a realistic access pattern where LFU would outperform LRU?
