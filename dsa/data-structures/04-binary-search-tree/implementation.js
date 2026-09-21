// 🌳 BINARY SEARCH TREE — from-scratch implementation: insert, search, delete, traversals
// Chalao:  node implementation.js

class TreeNode {
  constructor(value) { this.value = value; this.left = null; this.right = null; }
}

class BST {
  root = null;

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) { this.root = node; return this; }
    let cur = this.root;
    while (true) {
      if (value < cur.value) {
        if (!cur.left) { cur.left = node; return this; }
        cur = cur.left;
      } else {
        if (!cur.right) { cur.right = node; return this; }
        cur = cur.right;
      }
    }
  }

  search(value) {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }

  delete(value) { this.root = this.#deleteNode(this.root, value); return this; }

  #deleteNode(node, value) {
    if (!node) return null;
    if (value < node.value) { node.left = this.#deleteNode(node.left, value); return node; }
    if (value > node.value) { node.right = this.#deleteNode(node.right, value); return node; }

    // found the node to delete
    if (!node.left) return node.right;   // 0 or 1 child (right)
    if (!node.right) return node.left;   // 1 child (left)

    // 2 children: replace value with the in-order SUCCESSOR (smallest in right subtree),
    // then delete that successor from the right subtree instead (it has <= 1 child, easy case)
    let successor = node.right;
    while (successor.left) successor = successor.left;
    node.value = successor.value;
    node.right = this.#deleteNode(node.right, successor.value);
    return node;
  }

  inOrder() { const out = []; this.#inOrder(this.root, out); return out; }   // sorted order!
  #inOrder(node, out) { if (!node) return; this.#inOrder(node.left, out); out.push(node.value); this.#inOrder(node.right, out); }

  preOrder() { const out = []; this.#preOrder(this.root, out); return out; } // node, left, right
  #preOrder(node, out) { if (!node) return; out.push(node.value); this.#preOrder(node.left, out); this.#preOrder(node.right, out); }
}

// ---------------- DEMO ----------------
const tree = new BST();
[5, 3, 8, 1, 4, 7, 9].forEach((v) => tree.insert(v));

console.log('in-order (sorted!):', tree.inOrder());
console.log('pre-order:', tree.preOrder());
console.log('search(7):', tree.search(7));
console.log('search(6):', tree.search(6));

tree.delete(3); // has two children (1 and 4) -> replaced by successor (4)
console.log('in-order after delete(3):', tree.inOrder());
