# Lesson 16 — Chain of Responsibility

**Problem:** ek request ko kai possible handlers mein se koi ek handle kar
sakta hai (approval levels, support ticket routing, middleware), aur "kaun
handle karega" ka decision nested if/else mein tightly coupled hai.

**Idea:** har handler ko ek chain mein jodo. Har handler khud decide kare —
"main isse handle kar sakta hoon?" Agar haan, kaam khatam. Agar nahi, request
ko **agle handler** ko pass kar do.

## Files — is order mein chalao
```
node 1-naive.js                     # ❌ ek function, nested if/else levels
node 2-chain-of-responsibility.js   # ✅ handlers ki chain, har ek apna decision leta hai
node exercise.js                    # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Decouple sender from receiver** — sender ko pata nahi kaun final handle
   karega.
2. **Open/closed** — naya handler = chain mein ek naya link, existing
   handlers ko CHHUE BINA.

## When to skip
Agar handlers ka order/set fixed hai aur kabhi badlega nahi, seedha if/else
ya switch simpler hai — chain tabhi kamaati hai jab handlers **dynamically
configure/reorder** hone chahiye.
