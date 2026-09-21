# SOLID 1 — Single Responsibility Principle (SRP)

**Rule:** ek class ka sirf **EK "reason to change"** hona chahiye.

**Problem:** jab ek class business logic + persistence + presentation + notification sab
karti hai, to koi bhi EK concern badalne se poori class touch hoti hai — aur baaki concerns
accidentally break ho sakte hain.

**Idea:** har concern ko apni khud ki class mein nikaalo. "Reason to change" = kaun sa
external factor (DB engine, email provider, report format, pricing rule) is class ko
badalne ke liye force karega.

## Files — is order mein chalao
```
node 1-violation.js   # ❌ ek class, 4 reasons to change
node 2-fixed.js        # ✅ har concern apni class mein
node exercise.js       # 🎯 tumhara turn
```

## Yeh design patterns se kaise judta hai
SRP hi wo foundation hai jispe [Facade](../../13-facade/) aur [Command](../../03-command/)
jaise patterns khade hote hain — "encapsulate what varies" ka pehla kadam yeh decide karna
hai ki **KYA** varies, aur SRP tumhe woh dikhata hai.

## When to skip
Har chhoti class ko 5 sub-classes mein todna zaroori nahi — agar do concerns HAMESHA saath
badalte hain (genuinely coupled), unhe alag karna sirf indirection badhata hai. SRP tab
lagao jab concerns ke liye alag-alag, **independent** reasons-to-change ho.
