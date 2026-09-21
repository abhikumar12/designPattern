// ❌ VIOLATION — naya discount type add karne ke liye is function ko HAR baar edit karna
// padta hai (modification), extend nahi kar sakte bina chhue.
// Chalao:  node 1-violation.js

function calculateDiscount(type, amount) {
  if (type === 'regular') return amount * 0.05;
  if (type === 'premium') return amount * 0.10;
  if (type === 'vip') return amount * 0.20;
  throw new Error(`Unknown type: ${type}`);
}

console.log(calculateDiscount('regular', 1000));
console.log(calculateDiscount('vip', 1000));

// PROBLEM: naya customer tier (e.g. 'platinum') add karne ke liye is EXISTING function ko
// dobara edit karna padega — jo already-tested code ko risk mein daalta hai. Yeh "closed
// for modification" ko todta hai.
