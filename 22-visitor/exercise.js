// 🎯 EXERCISE — simple expression tree (Number, Add nodes) ke liye
// evaluate() aur print() operations ko Visitor se add karo, node classes ko
// chhue bina.
// Chalao:  node exercise.js

// ----- given node classes (accept() already fixed hai, inhe mat badlo) -----
class NumberNode {
  constructor(value) { this.value = value; }
  accept(visitor) { return visitor.visitNumber(this); }
}
class AddNode {
  constructor(left, right) { this.left = left; this.right = right; }
  accept(visitor) { return visitor.visitAdd(this); }
}

// (2 + 3)
const tree = new AddNode(new NumberNode(2), new NumberNode(3));

// ============================================================
// TODO 1: `evaluateVisitor` object banao with `visitNumber(node)` (return
//         node.value) aur `visitAdd(node)` (return node.left.accept(this) +
//         node.right.accept(this) — recursive!).
//
// TODO 2: `tree.accept(evaluateVisitor)` call karke result print karo
//         (chahiye: 5).
//
// TODO 3 (bonus): `printVisitor` banao jo expression ko string mein convert
//         kare (`"(2 + 3)"`), NumberNode/AddNode classes ko CHHUE BINA.
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
