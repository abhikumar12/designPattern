// 🎯 EXERCISE — classic Bird/Penguin problem. Fix the LSP violation.
// Chalao:  node exercise.js

// ----- violation (isse refactor karna hai) -----
class Bird {
  fly() { console.log('🕊️ flying high'); }
}
class Sparrow extends Bird {}
class Penguin extends Bird {
  fly() { throw new Error('penguins cannot fly!'); } // breaks the base contract
}

function makeBirdFly(bird) { bird.fly(); } // written assuming ALL Birds can fly()
makeBirdFly(new Sparrow());
try { makeBirdFly(new Penguin()); } catch (e) { console.log(`❌ ${e.message}`); }

// ============================================================
// TODO 1: `Penguin extends Bird` is the LSP violation — Penguin cannot honestly promise
//         everything Bird promises. Split `Bird` into a base with only what's TRUE for every
//         bird (e.g. `eat()`, `layEggs()`), and a separate `FlyingBird` (extends Bird, adds
//         `fly()`) that only flying birds extend.
//
// TODO 2: make Sparrow extend FlyingBird, and Penguin extend Bird (NOT FlyingBird). Rewrite
//         makeBirdFly() to only accept FlyingBird — this should now be a compile-time-shaped
//         guarantee (well, JS doesn't compile-check, but the TYPE relationship should make
//         it obviously wrong to pass a Penguin there).
//
// TODO 3 (bonus): where else in the wild have you seen a subclass override a method just to
//         throw/no-op? That's almost always an LSP smell — name one example from a codebase
//         you've worked in (or a hypothetical one) in a comment.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
