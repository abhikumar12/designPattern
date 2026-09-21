// 🎯 EXERCISE — a "Top-K over a STREAM" problem, where the heap's state persists.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: build a `KthLargestStream` class — constructor takes k and an initial array of
//         numbers; an `add(value)` method adds ONE new number and returns the CURRENT Kth
//         largest value seen so far (across ALL add() calls, not just this one). This is the
//         same "min-heap of size K" trick as kthLargest() in the Heap data-structure lesson,
//         but now the heap needs to persist as INSTANCE STATE across multiple calls instead
//         of being built fresh each time.
//
// TODO 2 (bonus): why is maintaining a heap of size K across a stream fundamentally better
//         suited to this problem than re-sorting the whole running list on every add() call?
//         Give the time complexity of both approaches per add() call, in terms of n (total
//         numbers seen) and k.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
