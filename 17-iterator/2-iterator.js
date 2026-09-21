// ✅ ITERATOR PATTERN — har collection apna traversal khud implement kare,
// lekin BAHAR se ek hi uniform interface (`next()`) dikhaye. Caller ko
// internal structure jaanne ki zaroorat nahi.
// Chalao:  node 2-iterator.js

class LinkedList {
  constructor() { this.head = null; }
  push(value) {
    const node = { value, next: null };
    if (!this.head) { this.head = node; return this; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
    return this;
  }
  // Iterator protocol — JS ke `for...of` se compatible!
  [Symbol.iterator]() {
    let current = this.head;
    return {
      next: () => {
        if (!current) return { done: true, value: undefined };
        const value = current.value;
        current = current.next;
        return { done: false, value };
      },
    };
  }
}

const list = new LinkedList().push('a').push('b').push('c');

// Ab caller ko linked-list ke internals (head/next) ka pata hi nahi —
// array ki tarah hi `for...of` use karta hai:
for (const item of list) console.log('list item:', item);

function printAll(collection) {
  for (const item of collection) console.log('  ->', item);
}
printAll([1, 2, 3]);   // array
printAll(list);        // linked list — SAME function, dono pe kaam karta hai!
