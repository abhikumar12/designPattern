// 🚦 RATE LIMITER — classic system-design/LLD question, Strategy pattern
// Chalao:  node design.js
//
// See README.md for functional requirements, algorithms, and their tradeoffs.

class FixedWindowStrategy {
  constructor(limit, windowMs) { this.limit = limit; this.windowMs = windowMs; this.counters = new Map(); }
  allow(clientId) {
    const now = Date.now();
    const entry = this.counters.get(clientId);
    if (!entry || now - entry.windowStart >= this.windowMs) {
      this.counters.set(clientId, { windowStart: now, count: 1 });
      return true;
    }
    if (entry.count < this.limit) { entry.count++; return true; }
    return false;
  }
}

class SlidingWindowLogStrategy {
  constructor(limit, windowMs) { this.limit = limit; this.windowMs = windowMs; this.log = new Map(); }
  allow(clientId) {
    const now = Date.now();
    const timestamps = (this.log.get(clientId) ?? []).filter((t) => now - t < this.windowMs);
    if (timestamps.length < this.limit) {
      timestamps.push(now);
      this.log.set(clientId, timestamps);
      return true;
    }
    this.log.set(clientId, timestamps);
    return false;
  }
}

class TokenBucketStrategy {
  constructor(capacity, refillPerSec) { this.capacity = capacity; this.refillPerSec = refillPerSec; this.buckets = new Map(); }
  allow(clientId) {
    const now = Date.now();
    const bucket = this.buckets.get(clientId) ?? { tokens: this.capacity, last: now };
    const elapsedSec = (now - bucket.last) / 1000;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsedSec * this.refillPerSec);
    bucket.last = now;
    if (bucket.tokens >= 1) { bucket.tokens -= 1; this.buckets.set(clientId, bucket); return true; }
    this.buckets.set(clientId, bucket);
    return false;
  }
}

// ---- Context: doesn't know or care which algorithm is plugged in ----
class RateLimiter {
  constructor(strategy) { this.strategy = strategy; }
  setStrategy(strategy) { this.strategy = strategy; }
  allowRequest(clientId) { return this.strategy.allow(clientId); }
}

// ---------------- DEMO ----------------
const limiter = new RateLimiter(new FixedWindowStrategy(3, 1000)); // 3 req/sec
console.log('-- fixed window (3/sec) --');
for (let i = 1; i <= 5; i++) {
  console.log(`req ${i}:`, limiter.allowRequest('user-1') ? '✅ allowed' : '❌ blocked');
}

limiter.setStrategy(new TokenBucketStrategy(3, 1)); // capacity 3, refill 1/sec
console.log('-- token bucket (capacity 3, refill 1/sec) --');
for (let i = 1; i <= 5; i++) {
  console.log(`req ${i}:`, limiter.allowRequest('user-2') ? '✅ allowed' : '❌ blocked');
}
