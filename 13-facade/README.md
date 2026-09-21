# Lesson 13 — Facade

**Problem:** ek kaam poora karne ke liye kai subsystems ko sahi order mein
call karna padta hai (decode → normalize → encode; reserve → charge → ship).
Har caller ko yeh poora orchestration aur order yaad rakhna padta hai.

**Idea:** subsystem ke aage ek simple object/function rakho jo saare steps
internally sahi order mein chalaye. Caller sirf ek method call karta hai,
subsystem ke internals se bekhabar.

## Files — is order mein chalao
```
node 1-naive.js    # ❌ caller khud subsystem orchestrate karta hai
node 2-facade.js   # ✅ ek simple entry point, internals chhupe hue
node exercise.js   # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Hide complexity, don't remove it** — subsystem waisa hi rehta hai, bas
   uske use karne ka tarika simple ho jaata hai.
2. **Single entry point** — orchestration logic ek hi jagah, duplicate nahi
   hoti har caller mein.

## When to skip
Agar subsystem already simple hai (1-2 calls), facade ek extra layer hi hai
jo kuch nahi kamaata — sirf tab banao jab **orchestration genuinely complex**
ho aur multiple callers ho.
