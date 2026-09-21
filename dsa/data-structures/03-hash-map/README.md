# DSA — Hash Map

Asked at: everywhere, both as "implement one from scratch" AND as the go-to tool for turning
an O(n²) brute force into O(n) (two-sum is the canonical example).

## Core idea
A hash map stores key-value pairs in an array of "buckets," using a **hash function** to turn
a key into a bucket index. Average-case O(1) get/set/delete — the entire trick is spreading
keys evenly across buckets so few of them collide.

## What to know cold
- **Collisions are inevitable** (pigeonhole principle: more possible keys than buckets).
  **Chaining** (each bucket holds a small list of entries) is the simplest fix and what
  `implementation.js` uses.
- **Load factor** (`size / bucketCount`) matters — too high, and chains get long, and lookups
  degrade toward O(n). Real hash maps **resize** (grow the bucket array + rehash everything)
  once load factor crosses a threshold, same idea as JS `Array` growing under the hood.
- The #1 use case in interviews: trade O(n) SPACE for turning an O(n²) nested-loop scan into
  an O(n) single pass — "have I seen this before?" becomes an O(1) lookup instead of an O(n)
  re-scan.

## Files
```
node implementation.js   # HashMap with chaining + auto-resize, and the two-sum use case
node exercise.js          # 🎯 extend it — group anagrams, first non-repeating character
```

## What an interviewer is watching for
1. Do you know WHY average-case is O(1) but worst-case is O(n) (all keys hashing to the same
   bucket)?
2. Can you explain chaining vs. the alternative (open addressing / probing) at a high level?
3. Do you reach for a hash map automatically when a problem needs "have I seen X before?" —
   this is the single most common interview pattern-recognition moment there is.
