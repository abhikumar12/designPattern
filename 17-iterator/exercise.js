// 🎯 EXERCISE — ek binary tree ko Iterator pattern se traverse-able banao,
// taaki `for...of` se depth-first traverse ho sake.
// Chalao:  node exercise.js

// ----- given structure (isse badalna nahi hai) -----
const tree = {
  value: 1,
  left:  { value: 2, left: { value: 4, left: null, right: null }, right: null },
  right: { value: 3, left: null, right: null },
};

// ----- naive version (isse refactor karna hai) -----
function printTree(node) {
  if (!node) return;
  console.log(node.value);
  printTree(node.left);
  printTree(node.right);
}
printTree(tree);

// ============================================================
// TODO 1: `TreeNode` class banao (value, left, right) jismein
//         `[Symbol.iterator]()` method ho jo depth-first (pre-order:
//         self -> left -> right) traversal kare aur `{done, value}` objects
//         de (2-iterator.js jaisa pattern).
//         Hint: recursion se ek array collect karke uska iterator return
//         karna sabse simple hoga.
//
// TODO 2: upar wale plain-object `tree` ko TreeNode instances se dobara
//         banao, phir `for (const v of root) console.log(v)` se print karo.
//
// TODO 3 (bonus): ek "breadth-first" iterator variant socho — kya isse bhi
//         `Symbol.iterator` ke through expose kiya jaa sakta hai? (Hint:
//         alag method naam do, jaise `bfs()`, jo khud ek iterable return kare.)
//
// Neeche apna solution likho, phir `node exercise.js` chala kar verify karo.
// ============================================================
