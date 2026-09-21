// 🎯 EXERCISE — extend the rate limiter design without touching RateLimiter itself.
// Copy design.js above this comment (or just edit design.js directly), then:
//
// TODO 1: Implement a 4th strategy — SlidingWindowCounterStrategy — the hybrid approach real
//         systems favor: it splits time into fixed buckets (like FixedWindowStrategy) but
//         weights the previous bucket's count by how far into the current bucket we are,
//         approximating a true sliding window without storing every timestamp. Same `allow()`
//         contract as the others.
//
// TODO 2: Add per-client overrides — some clients (e.g. paid tier) should get a higher limit
//         than the default. Do this WITHOUT adding an `if (clientId === ...)` inside any
//         strategy — think about where a "limit lookup" belongs instead (hint: it's still the
//         strategy's job, just parameterized differently per client at construction time, or
//         via a small wrapper/decorator around any strategy).
//
// TODO 3 (bonus): which of the three original strategies would you pick for a public API that
//         must run across multiple servers (not just one process)? What breaks about storing
//         `Map`s in memory once you have more than one server instance?
