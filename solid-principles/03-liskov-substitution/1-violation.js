// ❌ VIOLATION — Square, Rectangle ko "extends" karta hai, lekin base class ke contract
// (setWidth aur setHeight INDEPENDENT hain) ko todta hai.
// Chalao:  node 1-violation.js

class Rectangle {
  setWidth(w) { this.width = w; }
  setHeight(h) { this.height = h; }
  area() { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(w) { this.width = w; this.height = w; } // side-effect: height bhi badal gaya!
  setHeight(h) { this.width = h; this.height = h; }
}

function resizeAndCheck(rect) {
  rect.setWidth(4);
  rect.setHeight(5);
  console.log(`expected area 20, got ${rect.area()}`);
}

resizeAndCheck(new Rectangle()); // 20 — sahi
resizeAndCheck(new Square());    // 25 — GALAT! Square base class ka contract nahi follow karta

// PROBLEM: Square TECHNICALLY Rectangle "extends" karta hai, lekin jahan bhi Rectangle
// expected hai, Square substitute karne se code galat behave karta hai. Yeh Liskov
// Substitution ko todta hai — "subtype ko base type ki jagah use karna SAFE hona chahiye."
