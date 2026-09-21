// 🎯 EXERCISE — a cycle-detection problem with NO linked list in sight.
// Copy pattern.js above this comment (or edit it directly), then:
//
// TODO 1: `isHappyNumber(n)` — repeatedly replace a number with the sum of the squares of
//         its digits (e.g. 19 -> 1²+9² = 82 -> 8²+2² = 68 -> ... ). The number is "happy" if
//         this process eventually reaches 1. If it's NOT happy, the sequence enters a cycle
//         that never includes 1 (it's a mathematical fact that it always either reaches 1 or
//         cycles — never grows forever). Recognize this as fast & slow pointers on an
//         IMPLICIT sequence: "slow" applies the transform once per step, "fast" applies it
//         twice, and you're looking for slow === fast (a cycle) vs. reaching 1.
//
// TODO 2 (bonus): once `hasCycle()` returns true for a linked list, how would you find WHERE
//         the cycle STARTS (not just that one exists)? Hint: after slow and fast meet, reset
//         one pointer to the head and advance BOTH one step at a time — where they meet again
//         is the start of the cycle. Try to explain (in a comment) why that works, using the
//         distances involved (this one has a genuinely elegant proof, worth understanding
//         rather than just memorizing).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
