// ✅ DECORATOR PATTERN — add-ons ko wrapper objects banao jo SAME interface
// (cost/describe) follow karte hain aur asli object ko "wrap" karte hain.
// Chalao:  node 2-decorator.js

class Coffee {
  cost() { return 100; }
  describe() { return 'Coffee'; }
}

// Har decorator wahi interface (cost/describe) follow karta hai, aur jo
// wrap kiya hai uske result mein apna add-on jodta hai
class MilkDecorator {
  constructor(coffee) { this.coffee = coffee; }
  cost() { return this.coffee.cost() + 20; }
  describe() { return this.coffee.describe() + ' + Milk'; }
}
class SugarDecorator {
  constructor(coffee) { this.coffee = coffee; }
  cost() { return this.coffee.cost() + 10; }
  describe() { return this.coffee.describe() + ' + Sugar'; }
}

// Ab koi bhi combination RUNTIME pe chain ki jaa sakti hai, subclass nahi chahiye
let order = new Coffee();
order = new MilkDecorator(order);
order = new SugarDecorator(order);

console.log(order.describe(), '=', order.cost());

// Naya add-on (whip) = ek naya decorator class, existing decorators ko
// CHHUE BINA, aur kisi bhi order mein stack ho sakta hai.
