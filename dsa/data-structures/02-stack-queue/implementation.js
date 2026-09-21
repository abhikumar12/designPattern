// 📚 STACK & QUEUE — from-scratch O(1) implementations + the classic problems they unlock
// Chalao:  node implementation.js

class Stack {
  #items = [];
  push(x) { this.#items.push(x); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items.at(-1); }
  isEmpty() { return this.#items.length === 0; }
  get size() { return this.#items.length; }
}

// A naive queue using array.shift() is O(n) per dequeue (every remaining element re-indexes).
// This version tracks a `head` pointer instead of physically removing from the front — O(1).
class Queue {
  #items = [];
  #head = 0;
  enqueue(x) { this.#items.push(x); }
  dequeue() {
    if (this.#head >= this.#items.length) return undefined;
    return this.#items[this.#head++];
  }
  peek() { return this.#items[this.#head]; }
  isEmpty() { return this.#head >= this.#items.length; }
  get size() { return this.#items.length - this.#head; }
}

// ---- Classic #1: valid parentheses ----
function isValid(s) {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const stack = new Stack();
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') { stack.push(ch); continue; }
    if (pairs[ch]) {
      if (stack.isEmpty() || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.isEmpty();
}

// ---- Classic #2: monotonic stack — "next greater element" for every item ----
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = new Stack(); // holds INDICES, kept in decreasing-value order
  for (let i = 0; i < nums.length; i++) {
    // pop anything smaller than the current number — THEY just found their "next greater"
    while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return result; // whatever's left on the stack at the end has no next-greater -> stays -1
}

// ---------------- DEMO ----------------
console.log('isValid("([{}])"):', isValid('([{}])'));   // true
console.log('isValid("([)]"):', isValid('([)]'));         // false

console.log('nextGreaterElement([2,1,2,4,3]):', nextGreaterElement([2, 1, 2, 4, 3]));
// [4, 2, 4, -1, -1]

const q = new Queue();
q.enqueue('a'); q.enqueue('b'); q.enqueue('c');
console.log('dequeue:', q.dequeue(), '-> remaining size:', q.size);
