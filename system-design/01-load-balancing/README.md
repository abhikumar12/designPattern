# HLD 1 — Load Balancing

Asked at: every company with more than one server. Often the FIRST thing you draw in a
system-design round, and interviewers probe whether you know the algorithm tradeoffs, not
just the box-and-arrow diagram.

## Core idea
A load balancer sits in front of a pool of servers and decides which one handles each
incoming request. The algorithm you pick has real consequences:

- **Round Robin** — dead simple, cycles through servers evenly. Bad if servers have
  different capacity, or if some requests are much heavier than others.
- **Weighted Round Robin** — like Round Robin, but bigger/faster servers get proportionally
  more requests.
- **Least Connections** — send the request to whichever server currently has the fewest
  active connections. Adapts to uneven request duration, unlike Round Robin.
- **Consistent Hashing / IP Hash** — the same client (or key) always lands on the same
  server, which matters for **sticky sessions** or when a server holds local cache state.
  (Full implementation in [Lesson 3 — Consistent Hashing](../03-consistent-hashing/).)

## Files
```
node simulate.js     # all 3 basic algorithms, run against the same server pool
node exercise.js      # 🎯 extend it — health checks + a hybrid strategy
```

## What an interviewer is watching for
1. Do you know Round Robin can overload a slow/small server just as much as a fast one?
2. Do you know WHY sticky sessions matter (stateful in-memory session data) and what breaks
   without them (a user's session "disappears" if their next request hits a different
   server)?
3. Real load balancers (Nginx, AWS ELB, HAProxy) combine health checks with the algorithm —
   a server that's failing health checks should be pulled out of rotation. That's the
   exercise.
