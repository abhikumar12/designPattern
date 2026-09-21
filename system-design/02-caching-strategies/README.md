# HLD 2 — Caching Strategies

Asked at: literally everywhere. "Design an LRU cache" is one of the most common
data-structure-meets-system-design questions there is, asked standalone AND as a building
block in bigger system-design answers (CDN, DB query cache, session store).

## Core ideas
**Where the cache sits (the pattern, not the eviction policy):**
- **Cache-aside (lazy loading)** — app checks cache first; on a miss, reads from the DB and
  populates the cache. Most common pattern. Cache can go stale if the DB changes elsewhere.
- **Write-through** — every write goes to the cache AND the DB synchronously. Cache is
  always fresh, but writes are slower.
- **Write-back (write-behind)** — writes go to the cache immediately, DB is updated
  asynchronously later. Fast writes, but risks data loss if the cache dies before flushing.

**Eviction policy (what gets removed when the cache is full):**
- **LRU (Least Recently Used)** — evict whatever hasn't been touched in the longest time.
  The default almost everywhere (Redis, most CDNs) because access patterns are usually
  "recently used = likely to be used again."
- **LFU (Least Frequently Used)** — evict whatever's been accessed the fewest times. Better
  for some workloads, but needs extra bookkeeping (a frequency counter) and can keep old
  "one-time popular" items around too long.

## Files
```
node simulate.js     # LRUCache with O(1) get/put, using a JS idiom worth knowing
node exercise.js      # 🎯 extend it — TTL expiry + a cache-aside wrapper
```

## What an interviewer is watching for
1. Can you get O(1) `get`/`put`? The classic answer is a hash map + doubly linked list. In
   JS specifically, a **`Map` already preserves insertion order** and has O(1)
   delete+re-insert — `simulate.js` uses that instead of hand-rolling a linked list. Knowing
   this JS-specific shortcut is a good signal you're not just reciting a memorized answer.
2. Do you know the difference between cache-aside/write-through/write-back, and can you say
   which one fits a given scenario (e.g. a read-heavy product catalog vs. a write-heavy
   counter)?
3. Do you think about cache INVALIDATION — the other classic hard problem ("there are only
   two hard things in computer science: cache invalidation and naming things")?
