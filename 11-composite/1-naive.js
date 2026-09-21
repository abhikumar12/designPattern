// ❌ THE NAIVE VERSION — file aur folder ko har jagah alag treat karna padta
// hai, har naye operation ke liye type-check duplicate hota hai.
// Chalao:  node 1-naive.js

function getSize(node) {
  if (node.type === 'file') return node.size;
  if (node.type === 'folder') {
    let total = 0;
    for (const child of node.children) total += getSize(child); // recursion, par type-check saath
    return total;
  }
  throw new Error('unknown node type');
}

const tree = {
  type: 'folder', name: 'src',
  children: [
    { type: 'file', name: 'index.js', size: 10 },
    { type: 'folder', name: 'utils', children: [{ type: 'file', name: 'math.js', size: 5 }] },
  ],
};

console.log('total size:', getSize(tree));

// PROBLEM: har naya operation (print, count files, search) getSize() jaisa
// har jagah "file vs folder" if/else dobara likhega. Caller ko bhi hamesha
// yaad rakhna padta hai ki node file hai ya folder.
