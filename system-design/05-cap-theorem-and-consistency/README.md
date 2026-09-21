# HLD 5 — CAP Theorem & Consistency Models

Asked at: nearly every senior/staff system-design round, usually as a follow-up to "what
happens if a server in your design goes down / the network splits?"

## The theorem
In a **distributed** system, during a **network partition** (some nodes can't talk to
others), you must choose between:
- **Consistency (C)** — every read gets the most recent write, or an error. Refuse to serve
  possibly-stale data.
- **Availability (A)** — every request gets a response, even if it might be stale.

You can't have both DURING a partition (Partition tolerance, P, isn't really optional for
any real distributed system — networks fail, so P is a given, and CAP is really "C vs A when
P happens"). When there's no partition, you can have both C and A.

## Real systems, real choices
- **CP** (favor consistency) — MongoDB (default config), Zookeeper, etcd, HBase. Good for:
  bank balances, inventory counts, leader election — anywhere stale data causes real harm
  (double-spending, overselling).
- **AP** (favor availability) — Cassandra, DynamoDB, CouchDB. Good for: social feeds, product
  catalogs, shopping carts — anywhere "show something, even if slightly stale" beats "show an
  error."

## Consistency models (the more nuanced answer beyond "CP or AP")
- **Strong consistency** — every read sees the latest write, always.
- **Eventual consistency** — replicas converge to the same value EVENTUALLY, if writes stop.
  (This is exactly what [Lesson 4](../04-database-sharding-replication/)'s replication lag
  demo showed.)
- **Causal consistency** — writes that are causally related (a reply always appears after
  the comment it replies to) are seen in order; unrelated writes can be seen in any order.

## Files
```
node simulate.js     # a CP store and an AP store behaving differently during a partition
node exercise.js      # 🎯 extend it — quorum-based tunable consistency
```

## What an interviewer is watching for
1. Do you know P isn't a choice (networks partition whether you like it or not) — the real
   choice is C vs A, and only DURING a partition?
2. Can you map a REAL requirement ("users must never see a negative balance" vs "the feed can
   be a few seconds stale") to CP or AP, with a reason?
3. Do you know quorum systems (Dynamo-style `W + R > N`) let you tune consistency PER
   OPERATION instead of being locked into pure CP or pure AP? That's the exercise.
