# System Design (HLD) — Primer

Patterns and SOLID teach you to design a single service well. LLD practice teaches you to
design one class hierarchy well. This is the layer above both: how you design a system that
runs across MANY machines, where the failure modes are different (networks partition,
servers die, data has to live somewhere and get copied around).

Unlike the other modules, most of these topics can't be fully "solved" with a clean class —
they're fundamentally about **tradeoffs**. So each lesson pairs a runnable simulation (to
make the mechanism concrete) with a README that's honest about "it depends."

## How to use this module
1. Read the README's "Core idea(s)" section first.
2. Run `simulate.js` and actually read the output — several of these are designed to show
   you a concrete, measurable number (e.g. "only 2/20 keys moved") rather than just asserting
   a claim.
3. Do `exercise.js` — several of these ask you to extend toward what a REAL system (SQS,
   DynamoDB, Redis) actually does, past the simplified demo.

## Topics

| # | Topic | Also asked at |
|---|-------|----------------|
| 1 | [Load Balancing](01-load-balancing/) | every company with >1 server |
| 2 | [Caching Strategies (LRU)](02-caching-strategies/) | Amazon, Google, everyone |
| 3 | [Consistent Hashing](03-consistent-hashing/) | Amazon, Uber, distributed-systems teams |
| 4 | [DB Sharding & Replication](04-database-sharding-replication/) | any company past 1 DB server |
| 5 | [CAP Theorem & Consistency](05-cap-theorem-and-consistency/) | senior/staff system-design rounds |
| 6 | [Message Queues & Async](06-message-queues-async-processing/) | Uber, Swiggy, background-jobs-heavy systems |

## How this connects to the rest of the course
- Load Balancing's health-check exercise reuses **Decorator** (Lesson 12).
- Pub-Sub in the Message Queues lesson IS **Observer** (Lesson 2), just across services.
- Consistent Hashing is the real mechanism behind sticky-session **Strategy** routing
  (Lesson 1 / HLD Lesson 1).
- CAP's replication-lag demo is the exact same mechanism as the Sharding & Replication
  lesson's `ReplicatedStore` — same code idea, viewed from a different angle.

Real system-design interviews expect you to move fluidly between these layers: "I'd shard by
hash for even load (HLD 4), use consistent hashing so resharding is cheap (HLD 3), and cache
hot reads with an LRU eviction policy (HLD 2)" is a sentence that uses three of these lessons
at once — that fluency is the actual goal, not memorizing each topic in isolation.
