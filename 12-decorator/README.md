# Lesson 12 — Decorator

**Problem:** ek base object mein runtime pe extra behavior/features jodne
hain (coffee add-ons, text formatting, middleware), lekin har combination ke
liye subclass banana class-explosion ban jaata hai.

**Idea:** har add-on ko ek wrapper object banao jo asli object jaisa hi
interface follow kare, aur wrapped object ko call karke apna kaam upar se
jode. Decorators ko **kisi bhi order mein, kitne bhi stack** kiya ja sakta hai.

## Files — is order mein chalao
```
node 1-naive.js      # ❌ har combination ke liye subclass
node 2-decorator.js  # ✅ stackable wrapper objects
node exercise.js     # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Same interface as wrapped object** — decorator aur base dono
   `cost()`/`describe()` follow karte hain, caller ko fark nahi padta.
2. **Composable at runtime** — combinations *code* mein nahi, *chaining* se
   banti hain.

## When to skip
Agar sirf 1-2 fixed variants hain jo kabhi combine nahi hongi, simple
subclass ya if/else kaafi hai — Decorator tabhi kamaata hai jab
**independent add-ons ko mix-and-match** karna ho.
