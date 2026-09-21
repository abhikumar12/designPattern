// ✅ INTERPRETER PATTERN — grammar ke har "rule" ko ek chhoti class banao
// jismein `interpret()` method ho. Complex expressions in chhote nodes ko
// COMPOSE karke banti hain (jaisa Composite pattern).
// Chalao:  node 2-interpreter.js

class NumberExpr {
  constructor(value) { this.value = value; }
  interpret() { return this.value; }
}
class AddExpr {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() + this.right.interpret(); }
}
class SubtractExpr {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() - this.right.interpret(); }
}

// "3 + 4 - 2" ko tree se build karo — har node grammar ka ek rule hai
const expr = new SubtractExpr(
  new AddExpr(new NumberExpr(3), new NumberExpr(4)),
  new NumberExpr(2),
);
console.log('3 + 4 - 2 =', expr.interpret());

// Naya operator (multiply) add karna = ek nayi chhoti class, existing
// classes ko CHHUE BINA. Nested expressions naturally kaam karte hain
// kyunki har node bas .interpret() call karta hai apne children pe.
