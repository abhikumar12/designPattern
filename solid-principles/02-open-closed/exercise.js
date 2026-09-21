// 🎯 EXERCISE — shipping cost calculator ko OCP-compliant banao.
// Chalao:  node exercise.js

// ----- violation (isse refactor karna hai) -----
function shippingCost(method, weightKg) {
  if (method === 'standard') return 50;
  if (method === 'express') return 50 + 10 * weightKg;
  if (method === 'overnight') return 200;
  throw new Error(`Unknown method: ${method}`);
}
console.log(shippingCost('express', 3));

// ============================================================
// TODO 1: convert this into a `shippingStrategies` registry object (like discountStrategies
//         in 2-fixed.js), and a thin `shippingCost()` that just looks up + calls.
//
// TODO 2: add a new 'international' method (flat ₹500 + ₹50/kg) WITHOUT touching the
//         shippingCost() function body — only add a new registry entry.
//
// TODO 3 (bonus): what's the difference between this exercise and Lesson 1's Strategy
//         exercise? (Hint: there isn't one — that's the point. OCP is the PRINCIPLE, Strategy
//         is the PATTERN that satisfies it. Same code, different lens.)
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
