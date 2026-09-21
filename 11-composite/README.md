# Lesson 11 — Composite

**Problem:** ek tree structure hai (files/folders, menu/combo, org chart) —
kuch nodes "leaf" hain (single item), kuch "branch" hain (group jisme aur
nodes hain). Har operation mein "leaf ya branch?" check karna padta hai.

**Idea:** leaf aur branch dono ko EK hi interface do (e.g. `getSize()`,
`getPrice()`). Branch apna operation apne children pe recursively call karke
implement karta hai. Caller ko fark hi nahi karna padta — woh bas
`node.getSize()` call karta hai.

## Files — is order mein chalao
```
node 1-naive.js      # ❌ har operation mein type-check duplicate
node 2-composite.js  # ✅ File aur Folder same interface follow karte hain
node exercise.js     # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Uniform treatment** — single object aur group ko same tarike se treat
   karo.
2. **Recursive composition** — branch apna kaam apne children ko delegate
   karke karta hai.

## When to skip
Agar structure kabhi nested nahi hoga (sirf flat list), plain array +
`.reduce()` kaafi hai — Composite ki recursion tabhi chahiye jab genuinely
tree-shaped data ho.
