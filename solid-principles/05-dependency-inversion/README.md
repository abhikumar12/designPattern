# SOLID 5 — Dependency Inversion Principle (DIP)

**Rule:** high-level modules (business logic) ko low-level modules (DB, email provider, file
system) pe DIRECTLY depend nahi karna chahiye. **Dono** ko ek abstraction (contract) pe
depend karna chahiye.

**Problem:** jab high-level class kisi concrete low-level class ko khud `new` karti hai, to
woh usi implementation se hamesha ke liye tightly coupled ho jaati hai — DB badalna, ya
unit test mein fake dependency use karna, mushkil ho jaata hai.

**Idea:** dependency ko `new` karne ke bajaye BAHAR se inject karo (constructor param). High-
level class sirf itna jaanti hai ki "mujhe kuch chahiye jiska `save()` method ho" — kaunsi
concrete class hai, usse fark nahi padta.

## Files — is order mein chalao
```
node 1-violation.js   # ❌ OrderService khud MySQLDatabase "new" karta hai
node 2-fixed.js        # ✅ database inject hoti hai, kaunsi hai fark nahi padta
node exercise.js       # 🎯 tumhara turn
```

## Yeh design patterns se kaise judta hai
Yeh technique — dependency ko constructor se inject karna — **Dependency Injection** kehlata
hai, aur yeh wahi mechanism hai jo [Adapter](../../09-adapter/) aur
[Abstract Factory](../../06-abstract-factory/) ko kaam karne laayak banata hai. Yeh bhi wahi
wajah hai ki `2-fixed.js` mein `InMemoryDatabase` se **testing** itni easy ho jaati hai —
DIP hi unit-testable code ki foundation hai.

## When to skip
Agar koi dependency GENUINELY kabhi nahi badlegi aur test mein fake karne ki zaroorat nahi
(e.g. `Math`, `console`), inject karna sirf ceremony hai. DIP tab lagao jab dependency
swap-able ya mock-able hona genuinely valuable ho.
