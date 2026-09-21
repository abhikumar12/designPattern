# HLD 3 — Consistent Hashing

Asked at: Amazon, Uber, any company running distributed caches/DBs. A favorite "implement it
live" question because it's genuinely non-obvious until you've seen it once, and it's the
mechanism behind DynamoDB, Cassandra, and most CDN/memcached client routing.

## The problem it solves
Naive routing does `hash(key) % serverCount`. That works fine — until you add or remove a
server. `serverCount` changes, and almost **every** key's `% serverCount` result changes
with it, meaning almost every key suddenly maps to a different server. For a cache, that's
a mass cache-miss stampede. For a database, that's a massive, unnecessary data migration.

## The idea
Place servers AND keys on a conceptual ring (hash values from 0 to 2³²-1). A key belongs to
the first server clockwise from its position. Adding/removing one server only affects the
keys between it and its neighbor — roughly `1/N` of all keys, not nearly all of them.

**Virtual nodes**: a real server gets placed on the ring many times (under different hashes)
instead of once, so the keys it owns are spread evenly around the ring instead of one big
contiguous chunk. Without virtual nodes, you can get very uneven load by bad luck.

## Files
```
node simulate.js     # naive modulo hashing vs. consistent hashing, side by side
node exercise.js      # 🎯 extend it — removeServer() + measure virtual-node impact
```

## What an interviewer is watching for
1. Can you explain WHY modulo hashing breaks on scale-up/down, concretely (not just "it's
   bad")?
2. Do you know virtual nodes exist and why (even distribution, not just "more nodes")?
3. Can you reason about the actual number of keys that move — "roughly 1/N" is the answer
   they're listening for, and `simulate.js` proves it with real numbers.
