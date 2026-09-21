// ❌ THE NAIVE VERSION — simple math expressions ("3 + 4") ko ek hi function
// mein string-parsing + hardcoded if/else se evaluate kiya ja raha hai.
// Chalao:  node 1-naive.js

function evaluate(expr) {
  const parts = expr.split(' ');
  if (parts.length === 3 && parts[1] === '+') return Number(parts[0]) + Number(parts[2]);
  if (parts.length === 3 && parts[1] === '-') return Number(parts[0]) - Number(parts[2]);
  throw new Error(`cannot evaluate: ${expr}`);
}

console.log(evaluate('3 + 4'));
console.log(evaluate('10 - 6'));

// PROBLEM: sirf DO numbers wale simple expressions handle hote hain.
// Nested expressions ("3 + 4 - 2") ya naya operator add karna is function
// ko bade if/else mein aur uljha dega — grammar aur evaluation mixed hain.
