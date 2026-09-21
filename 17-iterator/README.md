# Lesson 17 — Iterator

**Problem:** alag-alag collections (array, linked list, tree) ka internal
structure alag hota hai. Agar caller ko har collection traverse karne ke
liye uska internal shape jaanna pade, to generic "loop over anything" code
likhna mushkil ho jaata hai.

**Idea:** har collection apna traversal khud implement kare, lekin bahar se
ek **uniform interface** (`next()` / JS ka `Symbol.iterator`) dikhaye. Caller
sirf `for...of` use karta hai — collection array hai ya linked list, usse
fark nahi padta.

## Files — is order mein chalao
```
node 1-naive.js      # ❌ har collection ka traversal alag, caller ko internals pata hone chahiye
node 2-iterator.js   # ✅ Symbol.iterator — uniform `for...of` sabke liye
node exercise.js     # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Uniform traversal interface** — caller collection ke internals se
   decouple ho jaata hai.
2. JS mein `Symbol.iterator` implement karna matlab tumhara custom type
   `for...of`, spread (`[...x]`), `Array.from()` sab ke saath kaam karta hai.

## When to skip
JS ke built-in collections (Array, Map, Set) already iterable hain — apna
Iterator sirf tab likho jab tumhara **custom data structure** (linked list,
tree, graph) ho jise `for...of` se traverse karna ho.
