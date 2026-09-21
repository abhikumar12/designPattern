// ⛰️ HEAP (MIN-HEAP) — array-backed implementation, no node objects needed
// Chalao:  node implementation.js

class MinHeap {
  #items = [];

  get size() { return this.#items.length; }
  peek() { return this.#items[0]; }

  #parent(i) { return Math.floor((i - 1) / 2); }
  #left(i) { return 2 * i + 1; }
  #right(i) { return 2 * i + 2; }
  #swap(i, j) { [this.#items[i], this.#items[j]] = [this.#items[j], this.#items[i]]; }

  insert(value) {
    this.#items.push(value);
    this.#siftUp(this.#items.length - 1);
  }

  #siftUp(i) {
    while (i > 0 && this.#items[i] < this.#items[this.#parent(i)]) {
      this.#swap(i, this.#parent(i));
      i = this.#parent(i);
    }
  }

  extractMin() {
    if (this.#items.length === 0) return undefined;
    const min = this.#items[0];
    const last = this.#items.pop();
    if (this.#items.length > 0) { this.#items[0] = last; this.#siftDown(0); }
    return min;
  }

  #siftDown(i) {
    while (true) {
      let smallest = i;
      const l = this.#left(i), r = this.#right(i);
      if (l < this.#items.length && this.#items[l] < this.#items[smallest]) smallest = l;
      if (r < this.#items.length && this.#items[r] < this.#items[smallest]) smallest = r;
      if (smallest === i) return;
      this.#swap(i, smallest);
      i = smallest;
    }
  }
}

// ---- Classic use case: Kth largest element, via a MIN-heap of size K ----
// Counterintuitive at first: use a MIN-heap even though we want the LARGEST — keep only K
// elements in it, and whatever's smallest among those K (the heap's root) gets evicted
// whenever a bigger number shows up. What survives is the K largest, and the root is the Kth.
function kthLargest(nums, k) {
  const heap = new MinHeap();
  for (const n of nums) {
    heap.insert(n);
    if (heap.size > k) heap.extractMin();
  }
  return heap.peek();
}

// ---------------- DEMO ----------------
const heap = new MinHeap();
[5, 3, 8, 1, 9, 2].forEach((n) => heap.insert(n));
console.log('peek (min):', heap.peek());

const sorted = [];
while (heap.size > 0) sorted.push(heap.extractMin());
console.log('extracted in order:', sorted); // [1, 2, 3, 5, 8, 9] -- extracting one-by-one sorts it!

console.log('kthLargest([3,2,1,5,6,4], 2):', kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
