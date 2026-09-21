# Lesson 8 — Prototype

**Problem:** naya object banana expensive hai (heavy setup, nested config),
lekin zyadatar naye objects kisi existing object se **milte-julte** hote hain
— sirf 1-2 field alag.

**Idea:** ek "template" (prototype) object rakho. Naya instance scratch se
banane ke bajaye prototype ko **clone** karo, phir jo chahiye woh change karo.

## Files — is order mein chalao
```
node 1-naive.js      # ❌ har baar scratch se setup
node 2-prototype.js  # ✅ clone() se template reuse
node exercise.js     # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Clone instead of construct** — setup cost ek hi baar, uske baad copy.
2. **Deep clone matters** — `structuredClone` (ya deep clone) use karo,
   warna nested objects/arrays accidentally share ho jaate hain (shallow
   `{...obj}` sirf top-level copy karta hai).

## When to skip
Agar object banana already cheap hai (simple literal, no heavy setup), plain
`{ ... }` ya factory function likhna simpler hai — cloning ki extra
indirection ki zaroorat nahi.
