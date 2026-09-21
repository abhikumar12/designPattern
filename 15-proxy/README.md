# Lesson 15 — Proxy

**Problem:** asli object expensive hai (load slow, network call), ya usmein
access-control chahiye — lekin caller ko asli object jaisa hi interface
chahiye, sirf "kab aur kaise access ho" pe control chahiye.

**Idea:** ek "stand-in" object banao jo asli object jaisa hi interface follow
kare. Proxy decide karta hai — lazily load kare, cache kare, ya access allow/
deny kare — phir kaam asli object ko delegate kare.

## Files — is order mein chalao
```
node 1-naive.js   # ❌ eager load, no access control
node 2-proxy.js   # ✅ lazy load + access control, same interface
node exercise.js  # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Same interface as real object** — caller ko fark nahi padta proxy hai
   ya asli object.
2. **Control before delegate** — proxy pehle decide karta hai (load? cache?
   allow?), phir kaam asli object ko sonpta hai.

## When to skip
Agar object cheap hai aur access-control/caching/lazy-loading ki zaroorat
nahi, seedha real object use karo — Proxy sirf tab kamaata hai jab "access
ko control karna" genuinely valuable ho.
