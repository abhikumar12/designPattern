// 🎯 EXERCISE — restaurant menu (single item vs combo/submenu) ko Composite
// se refactor karo taaki total price recursively, uniformly nikle.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function getPrice(entry) {
  if (entry.kind === 'item') return entry.price;
  if (entry.kind === 'combo') return entry.items.reduce((sum, e) => sum + getPrice(e), 0);
  throw new Error('unknown kind');
}

const menu = {
  kind: 'combo', name: 'Family Meal',
  items: [
    { kind: 'item', name: 'Burger', price: 150 },
    { kind: 'combo', name: 'Sides', items: [{ kind: 'item', name: 'Fries', price: 50 }] },
  ],
};
console.log('total price:', getPrice(menu));

// ============================================================
// TODO 1: `MenuItem` class banao (name, price) with `getPrice()` method
//         jo price return kare.
//
// TODO 2: `ComboMeal` class banao (name, empty children array) with
//         `add(entry)` aur `getPrice()` (children ka sum, recursively —
//         chahe entry MenuItem ho ya nested ComboMeal, same method call hota
//         hai) methods.
//
// TODO 3 (bonus): dono classes mein `print(indent)` method add karo jo tree
//         ko nicely console.log kare (2-composite.js jaisa).
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
