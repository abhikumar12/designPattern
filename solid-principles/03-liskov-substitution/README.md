# SOLID 3 — Liskov Substitution Principle (LSP)

**Rule:** agar `B` `A` ko extend karta hai, to jahan bhi `A` expected hai, `B` ko wahan
**safely substitute** kiya ja sakna chahiye — bina behavior galat kiye.

**Problem:** `extends` sirf syntax hai, guarantee nahi. Agar subclass base class ka contract
(implicit assumptions) todta hai, to code jo base class ke against likha gaya tha, subclass
ke saath silently galat behave karega.

**Idea:** agar "is-a" relationship genuinely FIT nahi karta (Square technically Rectangle
nahi hai, uski apni constraint hai), to inheritance mat force karo — dono ko ek common,
honest interface follow karwao.

## Files — is order mein chalao
```
node 1-violation.js   # ❌ Square, Rectangle ka contract todta hai
node 2-fixed.js        # ✅ dono independent Shape implementations
node exercise.js       # 🎯 tumhara turn (classic Bird/Penguin problem)
```

## Yeh design patterns se kaise judta hai
[Template Method](../../21-template-method/) aur [Composite](../../11-composite/) dono LSP
pe depend karte hain — dono mein subclasses ko base class ki jagah interchangeably use kiya
jaata hai. Agar LSP toot jaaye, in patterns ka poora point khatam ho jaata hai.

## When to skip
Yeh koi "kabhi skip karo" wali cheez nahi hai — LSP todna almost hamesha ek design bug hai,
optimization nahi. Agar lag raha hai ki tumhe LSP todna PAD raha hai, usually iska matlab
hai ki `extends` relationship hi galat hai — jaisa is lesson mein Square/Rectangle ka tha.
