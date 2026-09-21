// 🐢🐇 FAST & SLOW POINTERS — O(1) space cycle detection & midpoint-finding
// Chalao:  node pattern.js
//
// The full linked-list version of this lives in dsa/data-structures/01-linked-list/ (see
// hasCycle() and findMiddle() there) — this file isolates the PATTERN itself so it's clear
// it's reusable outside linked lists too (see exercise.js for a non-list example).

class ListNode {
  constructor(value) { this.value = value; this.next = null; }
}

function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  return slow ? slow.value : undefined;
}

function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // fast "lapped" slow -> there's a cycle
  }
  return false; // fast reached the end -> no cycle
}

// ---------------- DEMO ----------------
const a = new ListNode(1), b = new ListNode(2), c = new ListNode(3), d = new ListNode(4);
a.next = b; b.next = c; c.next = d;
console.log('middle of 1->2->3->4:', findMiddle(a)); // 3 (upper-middle of an even-length list)
console.log('has cycle:', hasCycle(a)); // false

d.next = b; // wire the tail back into the middle -> creates a cycle
console.log('has cycle after wiring d -> b:', hasCycle(a)); // true
