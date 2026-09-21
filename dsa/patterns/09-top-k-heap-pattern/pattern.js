// 🏔️ TOP-K (HEAP PATTERN) — keep a heap of size K instead of sorting everything
// Chalao:  node pattern.js
//
// The MinHeap implementation itself lives in dsa/data-structures/05-heap/ -- this file
// focuses on RECOGNIZING the pattern, reusing the same shape on two different problems.

class MinHeap {
  #items = [];
  get size() { return this.#items.length; }
  peek() { return this.#items[0]; }
  #parent(i) { return Math.floor((i - 1) / 2); }
  #left(i) { return 2 * i + 1; }
  #right(i) { return 2 * i + 2; }
  #swap(i, j) { [this.#items[i], this.#items[j]] = [this.#items[j], this.#items[i]]; }
  #compare(a, b) { return this.#key(a) - this.#key(b); }
  #key; // a function extracting the comparison value -- lets us heap arbitrary payloads
  constructor(key = (x) => x) { this.#key = key; }

  insert(value) {
    this.#items.push(value);
    let i = this.#items.length - 1;
    while (i > 0 && this.#compare(this.#items[i], this.#items[this.#parent(i)]) < 0) {
      this.#swap(i, this.#parent(i)); i = this.#parent(i);
    }
  }
  extractMin() {
    if (!this.#items.length) return undefined;
    const min = this.#items[0];
    const last = this.#items.pop();
    if (this.#items.length) {
      this.#items[0] = last;
      let i = 0;
      while (true) {
        let smallest = i;
        const l = this.#left(i), r = this.#right(i);
        if (l < this.#items.length && this.#compare(this.#items[l], this.#items[smallest]) < 0) smallest = l;
        if (r < this.#items.length && this.#compare(this.#items[r], this.#items[smallest]) < 0) smallest = r;
        if (smallest === i) break;
        this.#swap(i, smallest); i = smallest;
      }
    }
    return min;
  }
}

// ---- Top K Frequent Elements ----
function topKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) counts.set(n, (counts.get(n) ?? 0) + 1);

  // min-heap of [value, count] pairs, ordered by COUNT -- smallest count gets evicted first
  const heap = new MinHeap(([, count]) => count);
  for (const entry of counts) {
    heap.insert(entry);
    if (heap.size > k) heap.extractMin();
  }
  const result = [];
  while (heap.size) result.push(heap.extractMin()[0]);
  return result.reverse(); // heap pops smallest-count first -- reverse for largest-count first
}

// ---- Merge K sorted arrays into one sorted array ----
function mergeKSorted(arrays) {
  const heap = new MinHeap(([value]) => value);
  arrays.forEach((arr, arrIndex) => { if (arr.length) heap.insert([arr[0], arrIndex, 0]); });

  const result = [];
  while (heap.size) {
    const [value, arrIndex, itemIndex] = heap.extractMin();
    result.push(value);
    const nextIndex = itemIndex + 1;
    if (nextIndex < arrays[arrIndex].length) heap.insert([arrays[arrIndex][nextIndex], arrIndex, nextIndex]);
  }
  return result;
}

// ---------------- DEMO ----------------
console.log('topKFrequent([1,1,1,2,2,3], 2):', topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]

console.log('mergeKSorted([[1,4,5],[1,3,4],[2,6]]):', mergeKSorted([[1, 4, 5], [1, 3, 4], [2, 6]]));
// [1,1,2,3,4,4,5,6]
