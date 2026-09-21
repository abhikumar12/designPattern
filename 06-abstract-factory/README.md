# Lesson 6 — Abstract Factory

**Problem:** kuch objects **families** mein aate hain jinka saath mein
consistent rehna zaroori hai (theme ke button+checkbox, DB ke
connection+query-builder). Agar har object alag jagah se banta hai, mismatch
(dark button + light checkbox) possible ho jaata hai.

**Idea:** ek factory poori family banaye. Caller ek hi factory pakadta hai aur
usi se saare related objects nikalta hai — mismatch structurally impossible
ho jaata hai.

## Files — is order mein chalao
```
node 1-naive.js             # ❌ har object alag factory function se — mismatch possible
node 2-abstract-factory.js  # ✅ ek factory = poori consistent family
node exercise.js            # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Factory Method ka bada bhai** — ek object ke bajaye, related objects ka
   poora *set* banata hai.
2. **Consistency by construction** — galat combination banana structurally
   mushkil ho jaata hai, runtime check ki zaroorat nahi.

## When to skip
Agar objects ke beech koi "family" relationship nahi hai (wo independently
change ho sakte hain), plain Factory Method (Lesson 5) kaafi hai — Abstract
Factory ka extra layer overkill hoga.
