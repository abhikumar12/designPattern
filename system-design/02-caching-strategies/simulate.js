// 💾 CACHING STRATEGIES — LRU (Least Recently Used) cache, O(1) get/put
// Chalao:  node simulate.js
//
// See README.md for cache-aside vs write-through vs write-back, and why LRU is the
// default eviction policy almost everywhere.

class LRUCache {
  #capacity;
  #map; // JS Map preserves INSERTION order -- we exploit that for O(1) "recency" tracking
  constructor(capacity) { this.#capacity = capacity; this.#map = new Map(); }

  get(key) {
    if (!this.#map.has(key)) return -1;
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value); // re-insert -> now "most recently used"
    return value;
  }

  put(key, value) {
    if (this.#map.has(key)) this.#map.delete(key);
    else if (this.#map.size >= this.#capacity) {
      const oldestKey = this.#map.keys().next().value; // first inserted = least recently used
      this.#map.delete(oldestKey);
      console.log(`  evicted (LRU): ${oldestKey}`);
    }
    this.#map.set(key, value);
  }

  peekOrder() { return [...this.#map.keys()]; } // oldest -> newest
}

// ---------------- DEMO ----------------
const cache = new LRUCache(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
console.log('order:', cache.peekOrder()); // [a, b, c]

cache.get('a'); // touches 'a' -> moves to most-recent
console.log('order after get(a):', cache.peekOrder()); // [b, c, a]

cache.put('d', 4); // capacity full -> evicts LEAST recently used = 'b'
console.log('order after put(d):', cache.peekOrder()); // [c, a, d]

console.log('get(b):', cache.get('b')); // -1, evicted
