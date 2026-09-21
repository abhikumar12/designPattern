# Lesson 14 — Flyweight

**Problem:** bohot saare (hazaron/lakhon) similar objects banane hain, aur
har object apna heavy/shared data (texture, font, config) alag se duplicate
karta hai — memory waste hota hai.

**Idea:** jo data **shared** ho sakta hai (same type ke sab objects ke liye
same) usse alag nikaal ke ek jagah reuse karo. Har instance mein sirf
**unique** data (position, jaisi cheezein) rakho.

## Files — is order mein chalao
```
node 1-naive.js      # ❌ har object apna shared data duplicate karta hai
node 2-flyweight.js  # ✅ shared data ek factory se reuse hota hai
node exercise.js     # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Intrinsic vs extrinsic state** — intrinsic (shared, type-level) alag,
   extrinsic (unique, instance-level) alag.
2. **Factory ensures reuse** — naya object banane se pehle check karo ki
   shared version already exist karta hai kya.

## When to skip
Agar objects ki count chhoti hai (sainkdo, hazaron nahi) ya shared data heavy
nahi hai, yeh optimization ki zaroorat nahi — premature optimization se
bachna behtar hai.
