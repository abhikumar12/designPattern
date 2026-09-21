# LLD 4 — Rate Limiter

Asked at: Uber, Stripe, most API-platform companies — often phrased as "design an API rate
limiter" in a system-design round, but the algorithm core is pure LLD/Strategy.

## Functional Requirements
- Limit how many requests a client can make within a time window
- Support multiple algorithms interchangeably: fixed window, sliding window log, token bucket

## Patterns used (and why)
- **Strategy** — each algorithm is a self-contained object with the same `allow(clientId)`
  contract. `RateLimiter` (the context) never knows which one is plugged in.

## Files
```
node design.js      # three algorithms implemented + a runnable demo of each
node exercise.js     # 🎯 extend it — a 4th algorithm + per-client overrides
```

## What an interviewer is watching for
1. Do you know the tradeoffs between algorithms? Fixed window is simple but allows a burst of
   2x the limit right at the window boundary. Sliding window log is accurate but memory-heavy
   (stores every timestamp). Token bucket allows controlled bursts and is what most real
   systems (AWS, Stripe) actually use.
2. Is the algorithm truly swappable — same `allow()` contract, zero `if (algo === 'x')` in the
   caller?
3. Do you reason about per-client state (a `Map` keyed by clientId) vs. one global counter?
