// 🔗 LINKED LIST — from-scratch implementation with the operations interviewers ask for
// Chalao:  node implementation.js

class ListNode {
  constructor(value) { this.value = value; this.next = null; }
}

class LinkedList {
  constructor() { this.head = null; }

  push(value) {
    const node = new ListNode(value);
    if (!this.head) { this.head = node; return this; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
    return this;
  }

  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }

  // Reverse IN PLACE — O(n) time, O(1) space. Classic whiteboard question.
  reverse() {
    let prev = null;
    let cur = this.head;
    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
    return this;
  }

  // Find the middle node in ONE pass — fast pointer moves 2x speed of slow.
  findMiddle() {
    let slow = this.head, fast = this.head;
    while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
    return slow ? slow.value : undefined;
  }

  // Floyd's cycle detection ("tortoise and hare") — O(1) space, no extra Set needed.
  hasCycle() {
    let slow = this.head, fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
}

// ---------------- DEMO ----------------
const list = new LinkedList().push(1).push(2).push(3).push(4).push(5);
console.log('list:', list.toArray());
console.log('middle:', list.findMiddle());

list.reverse();
console.log('reversed:', list.toArray());
console.log('has cycle (should be false):', list.hasCycle());

const cyclic = new LinkedList().push(1).push(2).push(3);
cyclic.head.next.next.next = cyclic.head; // manually wire node 3 back to node 1
console.log('has cycle (should be true):', cyclic.hasCycle());
