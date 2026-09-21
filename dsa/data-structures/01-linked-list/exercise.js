// 🎯 EXERCISE — two more classic linked-list interview questions.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: `mergeSorted(listA, listB)` — given two ALREADY-SORTED LinkedLists, return a new
//         LinkedList with all values from both, still sorted. Walk both lists with two
//         pointers and splice nodes together — this should be O(n), not "concat then sort"
//         (which would be O(n log n) and throws away the fact that both are already sorted).
//
// TODO 2: `removeNthFromEnd(list, n)` — remove the Nth node from the end, in ONE pass (no
//         counting the length first, then walking again). Hint: advance a "lead" pointer n
//         steps ahead of a "trail" pointer, then move both together until lead reaches the
//         end — trail is now right before the node to remove.
//
// TODO 3 (bonus): how would you check if two linked lists INTERSECT (share a tail, forming
//         a Y-shape) and find the intersection node, without extra memory (no Set of visited
//         nodes)? Hint: get both lengths first, then use the length difference to align two
//         pointers before walking them together.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
