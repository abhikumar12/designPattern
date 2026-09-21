# Lesson 21 — Template Method

**Problem:** kai variants mein ek SAME skeleton/sequence hota hai (load ->
process -> export; welcome -> setup -> notify), lekin beech ka 1-2 step alag
hota hai. Naive tareeke mein poora skeleton har variant mein duplicate hota
hai.

**Idea:** skeleton ko ek base class mein **ek baar** fix karo (template
method). Jo steps variant-specific hain, unhe abstract/overridable methods
banao — subclasses sirf unhi ko implement karein, skeleton ko nahi chhuein.

## Files — is order mein chalao
```
node 1-naive.js             # ❌ poora skeleton har report mein duplicate
node 2-template-method.js   # ✅ skeleton ek jagah, sirf steps override hote hain
node exercise.js            # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Don't repeat the skeleton** — sequence/order ek hi jagah likha jaata
   hai.
2. **Hollywood Principle** — "don't call us, we'll call you": base class
   subclass ke methods ko sahi order mein khud call karta hai.

## When to skip
Agar variants ke beech skeleton hi alag hai (sirf 1-2 steps common hain,
poora flow nahi), Template Method zabardasti fit karoge to rigid ho jaayega
— tab Strategy (poora behavior swap) ya plain functions behtar hain.
