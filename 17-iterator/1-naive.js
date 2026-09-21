// ❌ THE NAIVE VERSION — caller ko har collection ke internal structure ka
// pata hona chahiye, taaki sahi tarike se loop kare.
// Chalao:  node 1-naive.js

const arrayCollection = [1, 2, 3];
const linkedList = { head: { value: 'a', next: { value: 'b', next: { value: 'c', next: null } } } };

// Array ke liye ek tarika
for (const item of arrayCollection) console.log('array item:', item);

// Linked list ke liye BILKUL alag tarika — caller ko internal shape pata hona zaroori
let node = linkedList.head;
while (node) { console.log('list item:', node.value); node = node.next; }

// PROBLEM: caller ko har collection type ka internal structure yaad rakhna
// padta hai. Ek generic function jo "kisi bhi collection" pe kaam kare —
// likhna mushkil hai kyunki traversal logic collection ke saath tightly
// coupled hai.
