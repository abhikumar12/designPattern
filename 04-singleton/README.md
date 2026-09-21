# Lesson 4 — Singleton

**Problem:** kuch cheezein app mein **sirf ek hi** honi chahiye — config,
connection pool, logger. Agar har jagah `new` karte raho to alag-alag state
ban jaata hai aur sab out of sync ho jaate hain.

**Idea:** class khud control kare ki uska sirf ek instance bane. Pehli baar
`new`/`getInstance()` call hone par instance banta hai, uske baad wahi wapas
milta hai.

## Files — is order mein chalao
```
node 1-naive.js            # ❌ har `new Config()` alag object
node 2-singleton.js        # ✅ class + static instance
node 3-singleton-module.js # ✅ idiomatic JS: module scope khud singleton hai
node exercise.js           # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Single source of truth** — ek hi state, jahan se bhi access karo.
2. **Controlled instantiation** — constructor khud check karta hai ki instance
   already ban chuka hai ya nahi.

## When to skip
Singleton **global mutable state** hai — testing mushkil kar deta hai (state
tests ke beech leak hota hai) aur hidden dependencies bana deta hai. Agar
dependency injection se kaam chal sakta hai (function/constructor ko object
pass karo), woh usually behtar hai. JS mein simple config/constants ke liye
module export (`3-singleton-module.js`) aksar kaafi hai — poora class/pattern
zaroori nahi.
