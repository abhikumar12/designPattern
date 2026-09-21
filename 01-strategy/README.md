# Lesson 1 — Strategy

**Problem:** ek kaam kai tarikon se ho sakta hai, aur kaunsa tarika use karna hai
woh runtime pe decide hota hai (payment method, export format, shipping cost...).

**Idea:** har variant ko apne function/object mein nikaalo jo ek *common contract*
follow kare. Caller ko sirf woh reference pakdao jo use chahiye. Naya variant add
karna = naya object likhna, purana code chhue bina.

## Files — is order mein chalao
```
node 1-naive.js            # ❌ if/else wali problem
node 2-strategy-class.js   # ✅ class + strategy objects
node 3-strategy-registry.js# ✅ idiomatic JS: object as registry (best for JS)
node exercise.js           # 🎯 tumhara turn
```

## Teen principles yahan dikh rahe hain
1. **Encapsulate what varies** — har payment method ka logic alag.
2. **Program to an interface** — sab `pay(amount)` contract follow karte hain.
3. **Composition over inheritance** — Checkout strategy ko *hold* karta hai,
   inherit nahi karta.

## When to skip
Sirf 2 variants hain jo kabhi badhenge nahi? Plain `if` behtar — pattern ki
indirection ki cost mat uthao.
