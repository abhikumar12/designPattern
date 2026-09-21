# HLD 4 — Database Sharding & Replication

Asked at: any company past "single database" scale — Amazon, Uber, most fintechs.
Interviewers use this to see if you understand the REAL consequences of scaling data, not
just "add more servers."

## Sharding (horizontal partitioning) — spreading data ACROSS machines
- **Range-based** — e.g. user IDs 0-999 on shard 1, 1000-1999 on shard 2. Simple, but can
  create **hot shards**: if new users get sequential IDs, all new traffic hits the newest
  (and often least-provisioned) shard.
- **Hash-based** — `hash(userId) % shardCount`, or better, consistent hashing (see
  [Lesson 3](../03-consistent-hashing/)) so resharding doesn't move almost everything.
  Spreads load evenly but makes range queries ("all users created this week") expensive —
  they now have to fan out across every shard.
- **Geo-based** — shard by region, so EU user data stays in an EU shard. Often driven by
  data-residency LAW (GDPR), not just performance.

## Replication — copies of the SAME data for availability/read-scaling
- **Primary-replica (leader-follower)** — writes go to one primary; replicas copy the
  primary's changes asynchronously and serve reads. Scales read throughput, but replicas can
  lag behind — this is exactly the "eventual consistency" tradeoff from CAP theorem
  (see [Lesson 5](../05-cap-theorem-and-consistency/)).
- **Replication lag** creates a real bug class: a user writes something, then immediately
  reads it back from a lagging replica and doesn't see their own write. `simulate.js` shows
  this exact failure.

## Files
```
node simulate.js     # range-based sharding + primary-replica with simulated lag
node exercise.js      # 🎯 extend it — hash-based sharding + "read your own writes"
```

## What an interviewer is watching for
1. Do you know sharding (spreading DIFFERENT data across machines) and replication (copying
   the SAME data across machines) are solving different problems, and most real systems use
   BOTH together (each shard has its own primary + replicas)?
2. Can you name a concrete failure mode of range sharding (hot shards) and hash sharding
   (expensive range queries)?
3. Do you understand replication lag well enough to propose a fix (route a user's reads to
   the primary right after their own write) rather than just naming the problem?
