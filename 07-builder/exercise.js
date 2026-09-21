// 🎯 EXERCISE — pizza order ko Builder pattern se refactor karo.
// Chalao:  node exercise.js

// ----- naive version (isse refactor karna hai) -----
function makePizza(size, crust, toppings, extraCheese) {
  return { size, crust, toppings: toppings ?? [], extraCheese: !!extraCheese };
}
console.log(makePizza('large', 'thin', ['mushroom', 'olives'], true));

// ============================================================
// TODO 1: `PizzaBuilder` class banao with methods: setSize(size),
//         setCrust(crust), addTopping(name), setExtraCheese(bool), build().
//         Har set/add method `this` return kare (chaining ke liye).
//
// TODO 2: default size 'medium', default crust 'regular' rakho constructor
//         mein, toppings [] se start karo.
//
// TODO 3 (bonus): agar `build()` call hone tak size set nahi hua (still
//         default) to warn console.log karo — "using default size".
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// new PizzaBuilder().setSize('large').addTopping('mushroom').build()
// jaisa use hona chahiye.
// ============================================================
