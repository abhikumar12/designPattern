# Lesson 10 — Bridge

**Problem:** ek cheez do independent dimensions mein badalti hai (e.g. urgency
× channel, shape × renderer). Har combination ke liye alag class banao to
combinations ke saath class count **exponentially** badhta hai.

**Idea:** do dimensions ko DO alag hierarchies mein tod do — ek "abstraction"
(kya) aur ek "implementation" (kaise) — aur abstraction implementation ko
*hold* (reference) kare, inherit nahi kare. Ab dono independently badhte hain.

## Files — is order mein chalao
```
node 1-naive.js   # ❌ (urgency × channel) har combo ke liye class
node 2-bridge.js  # ✅ do hierarchies, ek doosre ko hold karti hain
node exercise.js  # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Composition over inheritance** — dusri dimension ko *inherit* nahi,
   *hold* karo.
2. **Independent extensibility** — naya channel ya nayi urgency level add
   karna doosri dimension ko touch nahi karta.

## When to skip
Agar sirf EK dimension hai jo badalti hai (channel ya urgency, dono nahi),
Strategy pattern (Lesson 1) kaafi hai — Bridge tabhi chahiye jab do
dimensions ho jo independently combine hoti hon.
