// ❌ THE NAIVE VERSION — har tree object apna poora heavy "texture" data
// duplicate karta hai, hazaron trees banate hi memory phat jaayegi.
// Chalao:  node 1-naive.js

class Tree {
  constructor(x, y, type) {
    this.x = x; this.y = y;
    this.type = type;
    // pretend yeh heavy shared data hai (mesh, texture...) — har tree isko duplicate karta hai
    this.texture = `${type}-texture-data-(pretend this is large)`;
    this.mesh = `${type}-mesh-data-(pretend this is large)`;
  }
  render() { console.log(`🌳 ${this.type} at (${this.x},${this.y}) using ${this.texture}`); }
}

const forest = [];
for (let i = 0; i < 5; i++) forest.push(new Tree(i, i * 2, 'oak'));
forest.forEach((t) => t.render());
console.log('trees created:', forest.length, '— har ek apna texture+mesh copy leke');

// PROBLEM: 'oak' texture/mesh SAME hai sab trees ke liye, phir bhi har Tree
// apna alag copy rakhta hai. 1 lakh trees banao to woh data 1 lakh baar
// duplicate hoga — memory waste.
