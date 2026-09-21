// ❌ THE NAIVE VERSION — har add-on combination ke liye alag subclass —
// class explosion (Bridge lesson jaisa hi problem, dusre context mein).
// Chalao:  node 1-naive.js

class Coffee { cost() { return 100; } describe() { return 'Coffee'; } }
class CoffeeWithMilk extends Coffee {
  cost() { return super.cost() + 20; }
  describe() { return super.describe() + ' + Milk'; }
}
class CoffeeWithMilkAndSugar extends CoffeeWithMilk {
  cost() { return super.cost() + 10; }
  describe() { return super.describe() + ' + Sugar'; }
}

const order = new CoffeeWithMilkAndSugar();
console.log(order.describe(), '=', order.cost());

// PROBLEM: Milk, Sugar, Whip, ExtraShot — 4 add-ons ke 2^4 = 16 possible
// combinations, har combo ke liye subclass nahi bana sakte.
