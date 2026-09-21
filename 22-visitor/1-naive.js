// ❌ THE NAIVE VERSION — naya operation (e.g. "export to SVG") add karne ke
// liye HAR shape class ko edit karna padta hai.
// Chalao:  node 1-naive.js

class Circle {
  constructor(r) { this.r = r; }
  area() { return Math.PI * this.r * this.r; }
  // naya operation chahiye? yahan naya method jodo... har shape mein.
}
class Square {
  constructor(s) { this.s = s; }
  area() { return this.s * this.s; }
}

const shapes = [new Circle(2), new Square(3)];
shapes.forEach((s) => console.log(s.constructor.name, 'area:', s.area().toFixed(2)));

// PROBLEM: agar kal "toSvg()" operation chahiye har shape ke liye, to Circle
// AUR Square dono classes ko edit karna padega. Jitne shapes utni jagah edit.
// Aur agar shapes third-party library se aayi hon (edit hi nahi kar sakte)?
