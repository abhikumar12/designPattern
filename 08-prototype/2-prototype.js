// ✅ PROTOTYPE PATTERN — ek baar "template" object banao, naye instances
// usse CLONE karke banao (expensive setup dobara nahi chalta).
// Chalao:  node 2-prototype.js

// Class use karte hain taaki clone() method PROTOTYPE chain pe rahe, instance
// ki apni "own" data properties mein nahi — structuredClone(this) sirf data
// clone karta hai, functions clone nahi kar sakta (agar clone() khud ek own
// property hoti, jaisa plain object literal mein hota, to yeh crash karta).
class Goblin {
  constructor() {
    this.type = 'goblin'; this.hp = 30; this.speed = 5; this.loot = ['dagger'];
  }
  clone() {
    return structuredClone(this); // deep copy, prototype ke reference se independent
  }
}

const goblinPrototype = new Goblin(); // ek baar "expensive" setup

const goblin1 = goblinPrototype.clone();
const goblin2 = goblinPrototype.clone();
goblin2.hp = 45; // sirf clone mein change, prototype untouched

console.log(goblin1);
console.log(goblin2);
console.log('prototype still:', goblinPrototype.hp);

// Naya enemy type (orc) add karna = ek nayi class jo yehi clone() pattern
// follow kare, goblinPrototype ko CHHUE BINA.
class Orc {
  constructor() {
    this.type = 'orc'; this.hp = 60; this.speed = 3; this.loot = ['axe'];
  }
  clone() { return structuredClone(this); }
}
const orcPrototype = new Orc();
console.log(orcPrototype.clone());
