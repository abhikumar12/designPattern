// ❌ THE NAIVE VERSION — approval levels ek hi function mein nested if/else,
// naya level add karna is function ko dobara edit karna hai.
// Chalao:  node 1-naive.js

function approveExpense(amount) {
  if (amount <= 1000) {
    console.log(`✅ Manager approved ₹${amount}`);
  } else if (amount <= 10000) {
    console.log(`✅ Director approved ₹${amount}`);
  } else if (amount <= 100000) {
    console.log(`✅ VP approved ₹${amount}`);
  } else {
    console.log(`❌ ₹${amount} needs CEO approval — not implemented here`);
  }
}

approveExpense(500);
approveExpense(5000);
approveExpense(50000);

// PROBLEM: naya approval level (CEO) ya level ke thresholds badalne ke liye
// is function ko dobara edit karna padega. Poora "kaun approve karta hai"
// logic ek hi jagah tightly coupled hai.
