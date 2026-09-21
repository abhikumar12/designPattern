# Lesson 2 — Observer

**Problem:** ek object ki state badalti hai, aur *kai doosre* objects ko react
karna hai — par source ko yeh nahi jaanna chahiye ki kaun sun raha hai.
(order shipped → email + SMS + analytics + inventory...)

**Idea:** Subject sirf ek list rakhta hai interested logon ki (Observers), aur
change pe unhe *notify* kar deta hai — bina jaane woh karte kya hain.

## Files — is order mein chalao
```
node 1-naive.js         # ❌ Order har service se coupled
node 2-observer.js      # ✅ subscribe / notify / unsubscribe khud banaya
node 3-eventemitter.js  # ✅ Node ka built-in EventEmitter = Observer pattern
node exercise.js        # 🎯 tumhara turn
```

## Ye JS mein built-in hai
- Node: `EventEmitter` — `on` = subscribe, `emit` = notify, `off` = unsubscribe
- Browser: `addEventListener` / `dispatchEvent`

## 2 khatre (exercise mein dhyaan do)
1. **Execution order guarantee nahi** — agar B ko A ke baad chalna zaroori hai,
   Observer galat tool hai.
2. **Memory leak** — `unsubscribe` bhoole to subject observer ko pakde rehta hai
   aur woh garbage-collect nahi hota.
