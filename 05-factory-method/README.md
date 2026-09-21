# Lesson 5 — Factory Method

**Problem:** object banane ka logic (`new X()`, kaunsi class chuni) caller ke
code mein bikhra hua hai. Naya type add karna matlab har jagah if/else dhoondh
ke edit karna.

**Idea:** object banane ka kaam ek dedicated factory function/method ko do.
Caller sirf "mujhe X type chahiye" bolta hai, konsi class instantiate hui —
uski chinta nahi karta.

## Files — is order mein chalao
```
node 1-naive.js            # ❌ caller khud class chunta hai
node 2-factory-method.js   # ✅ factory function + registry
node exercise.js           # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Separate creation from use** — "kya banaya" aur "kaise use kiya" alag.
2. **Open/closed** — naya type = registry mein entry, caller code same rehta.

## When to skip
Sirf ek hi class hai jo kabhi variant nahi legi? Seedha `new X()` karo —
factory ki indirection tabhi kamaati hai jab **multiple related types** ho
jinke beech runtime pe chunna ho.
