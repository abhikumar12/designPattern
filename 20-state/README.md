# Lesson 20 — State

**Problem:** ek object ka behavior uske **current status** pe depend karta
hai (order: placed/paid/shipped; traffic light: red/green/yellow), aur har
method mein "abhi is status mein kya allowed hai" wala if/else duplicate
hota hai. Invalid transitions rokna bhi mushkil hai.

**Idea:** har status ko ek object bana do jo khud jaanta ho — "is state mein
kaunsa action allowed hai, aur uske baad next state kya hoga". Main object
(Order/Light) sirf current state ko delegate karta hai.

## Files — is order mein chalao
```
node 1-naive.js   # ❌ har method mein status if/else duplicate
node 2-state.js   # ✅ har status apna hi object, khud transitions decide karta hai
node exercise.js  # 🎯 tumhara turn
```

## Principles yahan dikh rahe hain
1. **Behavior depends on state, delegate it** — Strategy jaisa hi mechanism
   (delegation), lekin state *khud badalta hai* (self-transition), Strategy
   mein caller badalta hai.
2. **Invalid transitions naturally blocked** — jo state jis action ko
   support nahi karta, uska handler khud "not allowed" bol deta hai.

## When to skip
Agar sirf 2 states hain ya transitions kabhi badhenge nahi, simple boolean
flag + if/else kaafi hai — State pattern tabhi kamaata hai jab **kai states
aur transitions** ho jo complex ho rahe hon.
