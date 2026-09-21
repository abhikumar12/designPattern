// 🎯 EXERCISE — ise Strategy pattern (registry form) mein refactor karo.
// Chalao:  node exercise.js
//
// Rules:
//   'standard'  -> flat ₹50
//   'express'   -> ₹50 + ₹10 per kg
//   'overnight' -> ₹200 flat

// ----- naive version (isse refactor karna hai) -----
function shippingCost(order, method) {
  if (method === 'standard')  return 50;
  if (method === 'express')   return 50 + 10 * order.weightKg;
  if (method === 'overnight') return 200;
  throw new Error(`Unknown method: ${method}`);
}

const order = { weightKg: 3, total: 1200 };
console.log('standard :', shippingCost(order, 'standard'));
console.log('express  :', shippingCost(order, 'express'));
console.log('overnight:', shippingCost(order, 'overnight'));


// ============================================================
// TODO 1: upar wale ko `const strategies = { ... }` + chhote dispatch
//         function mein badlo. Har strategy ko (order) milega.
//
// TODO 2 (bonus): 'express-free-above-1000' add karo — agar order.total > 1000
//         to express free (₹0), warna normal express charge.
//         Sawaal: naya rule add karte waqt kya PURANI strategies ko chhuna pada?
//         (Sahi jawab: nahi. Yehi open/closed ka fayda hai.)
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================

// const strategies = {
//   ...
// };
// function shipping(method, order) { ... }
// console.log(shipping('express', order));
