// ✅ FIXED — Square, Rectangle nahi hai (is-a relationship galat thi). Dono ek common
// Shape interface follow karte hain, koi inheritance-via-force nahi.
// Chalao:  node 2-fixed.js

class Shape {
  area() { throw new Error('subclass must implement area()'); }
}

class Rectangle extends Shape {
  constructor(width, height) { super(); this.width = width; this.height = height; }
  area() { return this.width * this.height; }
}

class Square extends Shape {
  constructor(side) { super(); this.side = side; }
  area() { return this.side * this.side; }
}

function printArea(shape) { console.log(`area: ${shape.area()}`); }

printArea(new Rectangle(4, 5)); // 20
printArea(new Square(4));       // 16 — apna khud ka correct contract, koi surprise nahi

// Ab Square, Rectangle ki jagah "substitute" hone ka dawa hi nahi karta — dono independent
// Shape implementations hain. Jahan bhi Shape expected hai, dono safely use ho sakte hain
// kyunki koi hidden extra constraint (width===height) base contract se leak nahi ho raha.
