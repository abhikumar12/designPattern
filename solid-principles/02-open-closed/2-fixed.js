// ✅ FIXED — naya discount type add karna ab EXTENSION hai (naya entry), MODIFICATION nahi
// (existing code chhua nahi).
// Chalao:  node 2-fixed.js

const discountStrategies = {
  regular: (amount) => amount * 0.05,
  premium: (amount) => amount * 0.10,
  vip: (amount) => amount * 0.20,
};

function calculateDiscount(type, amount) {
  const strategy = discountStrategies[type];
  if (!strategy) throw new Error(`Unknown type: ${type}`);
  return strategy(amount);
}

console.log(calculateDiscount('regular', 1000));
console.log(calculateDiscount('vip', 1000));

// Naya tier add karna:
discountStrategies.platinum = (amount) => amount * 0.30;
console.log(calculateDiscount('platinum', 1000));

// calculateDiscount() ka body EK baar bhi nahi badla. Yehi Open/Closed hai — aur yeh
// literally Strategy pattern hai (Lesson 1). OCP hi wo "why" hai jiske liye Strategy
// exist karta hai.
