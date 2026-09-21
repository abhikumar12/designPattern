// 🗺️ HASH MAP — from-scratch implementation with chaining + resize
// Chalao:  node implementation.js

class HashMap {
  #buckets;
  #size = 0;
  #capacity;

  constructor(capacity = 8) {
    this.#capacity = capacity;
    this.#buckets = Array.from({ length: capacity }, () => []); // each bucket = a chain (array)
  }

  #hash(key) {
    // A simple, fast string hash (djb2-style) — good enough here since we chain collisions
    // anyway; a real production hash map would use something with stronger avalanche
    // properties (see the Consistent Hashing lesson in system-design/ for why that matters).
    const str = String(key);
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (h * 33 + str.charCodeAt(i)) >>> 0;
    return h % this.#capacity;
  }

  #resizeIfNeeded() {
    const loadFactor = this.#size / this.#capacity;
    if (loadFactor < 0.75) return;
    const old = this.#buckets;
    this.#capacity *= 2;
    this.#buckets = Array.from({ length: this.#capacity }, () => []);
    this.#size = 0;
    for (const chain of old) for (const [k, v] of chain) this.set(k, v); // rehash everything
  }

  set(key, value) {
    const chain = this.#buckets[this.#hash(key)];
    const existing = chain.find((entry) => entry[0] === key);
    if (existing) { existing[1] = value; return; }
    chain.push([key, value]);
    this.#size++;
    this.#resizeIfNeeded();
  }

  get(key) {
    const chain = this.#buckets[this.#hash(key)];
    const entry = chain.find((e) => e[0] === key);
    return entry ? entry[1] : undefined;
  }

  has(key) { return this.get(key) !== undefined; }

  delete(key) {
    const chain = this.#buckets[this.#hash(key)];
    const idx = chain.findIndex((e) => e[0] === key);
    if (idx === -1) return false;
    chain.splice(idx, 1);
    this.#size--;
    return true;
  }

  get size() { return this.#size; }
}

// ---- Classic use case: two-sum, O(n) instead of O(n²) ----
function twoSum(nums, target) {
  const seen = new HashMap(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
  return null;
}

// ---------------- DEMO ----------------
const map = new HashMap(4); // small capacity on purpose, to trigger a resize below
for (let i = 0; i < 10; i++) map.set(`key-${i}`, i * i);
console.log('map size after 10 inserts (auto-resized):', map.size);
console.log('get("key-7"):', map.get('key-7'));
map.delete('key-7');
console.log('has("key-7") after delete:', map.has('key-7'));

console.log('twoSum([2,7,11,15], 9):', twoSum([2, 7, 11, 15], 9)); // [0, 1]
