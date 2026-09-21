// ✅ FLYWEIGHT PATTERN — shared/heavy data (texture, mesh) ko ALAG rakho aur
// same-type objects ke beech REUSE karo. Sirf unique data (x, y) har
// instance mein rehta hai.
// Chalao:  node 2-flyweight.js

// Flyweight factory — same type ke liye same shared object reuse karta hai
class TreeTypeFactory {
  static #types = new Map();
  static getType(type) {
    if (!TreeTypeFactory.#types.has(type)) {
      console.log(`  (creating shared texture+mesh for '${type}' — sirf EK baar)`);
      TreeTypeFactory.#types.set(type, {
        texture: `${type}-texture-data`,
        mesh: `${type}-mesh-data`,
      });
    }
    return TreeTypeFactory.#types.get(type); // same object wapas milta hai
  }
  static count() { return TreeTypeFactory.#types.size; }
}

// Tree ab sirf UNIQUE data (x, y) rakhta hai, shared data ko reference karta hai
class Tree {
  constructor(x, y, type) {
    this.x = x; this.y = y;
    this.sharedData = TreeTypeFactory.getType(type); // reused, duplicate nahi
  }
  render() { console.log(`🌳 tree at (${this.x},${this.y}) using ${this.sharedData.texture}`); }
}

const forest = [];
for (let i = 0; i < 5; i++) forest.push(new Tree(i, i * 2, 'oak'));
forest.forEach((t) => t.render());

console.log('unique shared objects created:', TreeTypeFactory.count(), '(sirf 1, chahe 5 trees hon)');
