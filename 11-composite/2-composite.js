// ✅ COMPOSITE PATTERN — File aur Folder dono EK hi interface follow karte
// hain (getSize()), caller ko fark nahi karna padta "leaf" hai ya "branch".
// Chalao:  node 2-composite.js

class File {
  constructor(name, size) { this.name = name; this.size = size; }
  getSize() { return this.size; }
  print(indent = '') { console.log(`${indent}📄 ${this.name} (${this.size})`); }
}

class Folder {
  constructor(name) { this.name = name; this.children = []; }
  add(node) { this.children.push(node); return this; }
  getSize() { return this.children.reduce((sum, c) => sum + c.getSize(), 0); } // same method name!
  print(indent = '') {
    console.log(`${indent}📁 ${this.name}/`);
    this.children.forEach((c) => c.print(indent + '  '));
  }
}

const utils = new Folder('utils').add(new File('math.js', 5));
const tree = new Folder('src')
  .add(new File('index.js', 10))
  .add(utils);

tree.print();
console.log('total size:', tree.getSize());

// Naya operation (print) add karna = File aur Folder dono mein ek method,
// caller code (`tree.print()`) file/folder ka fark kiye bina kaam karta hai.
