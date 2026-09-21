# Lesson 7 — Builder

**Problem:** ek object banane ke liye bohot saare (zyadatar optional) params
chahiye. Constructor mein sabko positional pass karna unreadable hai aur order
galat hone par silent bug ban jaata hai.

**Idea:** object ko ek baar mein nahi, **step-by-step methods** se banao. Har
method ek field set karke `this` return kare (chaining), aakhir mein `build()`
final object de.

## Files — is order mein chalao
```
node 1-naive.js     # ❌ 6 positional params, order-sensitive
node 2-builder.js   # ✅ fluent chain, sirf jo chahiye set karo
node exercise.js    # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Step-by-step construction** — complex object ek chain of readable calls
   se banta hai.
2. **Sensible defaults** — sirf jo customize karna hai woh set karo, baaki
   default rahe.

## When to skip
Agar object mein 2-3 hi (mostly required) fields hain, plain object literal
`{ ... }` ya normal constructor kaafi hai — Builder tabhi kamaata hai jab
fields zyada hon aur zyada optional hon.
