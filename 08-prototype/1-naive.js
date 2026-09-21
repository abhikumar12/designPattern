// ❌ THE NAIVE VERSION — similar object har baar scratch se, expensive setup
// duplicate ho raha hai.
// Chalao:  node 1-naive.js

function createGoblin() {
  // pretend yeh expensive hai (asset load, stat calculation, etc.)
  return { type: 'goblin', hp: 30, speed: 5, loot: ['dagger'] };
}

const goblin1 = createGoblin();
const goblin2 = createGoblin();
goblin2.hp = 45; // is goblin ko thoda strong banana hai

console.log(goblin1);
console.log(goblin2);

// PROBLEM: har goblin poori setup logic dobara chalata hai, sirf ek field
// tweak karne ke liye bhi. Agar setup expensive ho (e.g. deep nested config,
// file load) to yeh wasteful hai.
