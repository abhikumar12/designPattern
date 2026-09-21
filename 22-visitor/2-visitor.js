// ✅ VISITOR PATTERN — naye operations ko shape classes ke BAHAR, alag
// "visitor" objects mein rakho. Shapes sirf ek chhota `accept(visitor)`
// method rakhte hain — naya operation add karne ke liye unhe edit nahi
// karna padta.
// Chalao:  node 2-visitor.js

class Circle {
  constructor(r) { this.r = r; }
  accept(visitor) { return visitor.visitCircle(this); } // fixed, kabhi nahi badalta
}
class Square {
  constructor(s) { this.s = s; }
  accept(visitor) { return visitor.visitSquare(this); }
}

// Operation #1: area calculation — ek visitor object
const areaVisitor = {
  visitCircle: (c) => Math.PI * c.r * c.r,
  visitSquare: (s) => s.s * s.s,
};

// Operation #2 (naya!): SVG export — shapes ko CHHUE BINA add hua
const svgVisitor = {
  visitCircle: (c) => `<circle r="${c.r}" />`,
  visitSquare: (s) => `<rect width="${s.s}" height="${s.s}" />`,
};

const shapes = [new Circle(2), new Square(3)];
shapes.forEach((s) => console.log('area:', s.accept(areaVisitor).toFixed(2)));
shapes.forEach((s) => console.log('svg:', s.accept(svgVisitor)));

// Naya operation (e.g. perimeter) add karna = ek naya visitor object,
// Circle/Square classes ko CHHUE BINA.
