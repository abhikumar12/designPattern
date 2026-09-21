// 🎯 EXERCISE — two more classic stack/queue interview questions.
// Copy implementation.js above this comment (or edit it directly), then:
//
// TODO 1: build a `MinStack` — same push/pop/peek as Stack, PLUS a `getMin()` that returns
//         the current minimum in O(1). You can't just scan on every getMin() call (that's
//         O(n)) — track the running minimum alongside each push instead (hint: a second
//         stack, or push [value, minSoFar] pairs).
//
// TODO 2: implement a `Queue` using TWO stacks instead of an array (a classic "explain your
//         understanding of both structures" question). Enqueue pushes onto stack1. Dequeue:
//         if stack2 is empty, pop everything off stack1 onto stack2 (this reverses the
//         order), then pop from stack2. Prove to yourself why this gives correct FIFO order
//         and is still amortized O(1) per operation.
//
// TODO 3 (bonus): rewrite nextGreaterElement() from implementation.js to solve "daily
//         temperatures" instead — given an array of temperatures, return for each day how
//         many days until a WARMER day (0 if none). Same monotonic-stack shape, different
//         payload (store distances instead of values).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
