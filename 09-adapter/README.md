# Lesson 9 — Adapter

**Problem:** tumhare app ko ek interface chahiye, lekin jo library/API mil
rahi hai uska shape alag hai (different param order, different field names).
Tum usko change nahi kar sakte (third-party/legacy).

**Idea:** ek thin wrapper (adapter) banao jo purani/mismatched interface ko
apne app ke expected shape mein convert kare. App sirf apne expected interface
se baat karta hai, adapter ke peeche kya hai — usse fark nahi padta.

## Files — is order mein chalao
```
node 1-naive.js     # ❌ har jagah mismatch-handling duplicate
node 2-adapter.js   # ✅ ek wrapper, clean interface
node exercise.js    # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Isolate the mismatch** — conversion logic ek hi jagah rehta hai.
2. **App depends on ITS interface, not theirs** — third-party SDK badle to
   sirf adapter badalta hai.

## When to skip
Agar tum khud us API/library ke owner ho (usko directly badal sakte ho),
adapter mat banao — seedha shape fix karo. Adapter tabhi zaroori hai jab
tum kisi cheez ko control nahi kar sakte.
