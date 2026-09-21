# Lesson 22 — Visitor

**Problem:** classes ka ek fixed set hai (shapes, AST nodes), aur unpe naye
**operations** add karte rehna hai (area, export, evaluate, print). Har naye
operation ke liye har class ko edit karna padta hai — aur agar classes
third-party se aayi ho to edit karna possible hi nahi.

**Idea:** naye operation ko class ke andar method ke bajaye ek alag "visitor"
object mein rakho. Har class mein bas ek chhota, kabhi-na-badalne wala
`accept(visitor)` method rehta hai jo sahi visitor-method ko call karta hai.

## Files — is order mein chalao
```
node 1-naive.js     # ❌ naya operation = har shape class edit
node 2-visitor.js   # ✅ naya operation = naya visitor object, classes untouched
node exercise.js    # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Add operations without modifying classes** — Open/Closed principle,
   operations ke perspective se.
2. **Double dispatch** — `shape.accept(visitor)` shape ka type decide karta
   hai, andar `visitor.visitX(this)` operation decide karta hai.

## When to skip
Agar classes ka set frequently badalta hai (naya shape type baar-baar add
hota hai) lekin operations stable hain, Visitor ulta pain hai — har naya
shape ke liye HAR visitor ko edit karna padega. Visitor tab kamaata hai jab
**classes stable hain, operations badalte rehte hain** (ulta scenario).
