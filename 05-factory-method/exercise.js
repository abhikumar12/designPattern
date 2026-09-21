// 🎯 EXERCISE — shape banane ka if/else ko Factory Method mein refactor karo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function makeShape(type, size) {
  if (type === 'circle')   return { type, area: () => Math.PI * size * size };
  if (type === 'square')   return { type, area: () => size * size };
  throw new Error(`Unknown shape: ${type}`);
}

console.log('circle area:', makeShape('circle', 3).area().toFixed(2));
console.log('square area:', makeShape('square', 3).area());

// ============================================================
// TODO 1: `shapeFactories` registry object banao — { circle: (size) => {...},
//         square: (size) => {...} } — jismein har entry ek factory function
//         hai jo shape object return karta hai.
//
// TODO 2: `makeShape(type, size)` ko registry lookup karne wala banao (jaisa
//         2-factory-method.js mein hai).
//
// TODO 3 (bonus): 'triangle' add karo (area = base*height/2, size ko base aur
//         height dono maan lo ya function signature adjust karo) — makeShape
//         ko chhue bina.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
